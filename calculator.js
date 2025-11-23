(() => {
  const displayEl = document.getElementById("mainValue");
  const subEl = document.getElementById("subdisplay");
  const keys = document.getElementById("keys");
  const historyListEl = document.getElementById("historyList");

  let current = "0";
  let tokens = [];
  let waitingForNew = false;
  let history = [];

  function renderHistory() {
    historyListEl.innerHTML = "";
    if (!history.length) {
      const li = document.createElement("li");
      li.className = "history-empty";
      li.textContent = "Belum ada history";
      historyListEl.appendChild(li);
      return;
    }
    history.forEach((h) => {
      const li = document.createElement("li");
      li.className = "history-item";
      li.textContent = h;
      historyListEl.appendChild(li);
    });
  }

  function updateDisplay() {
    displayEl.textContent = current;
    if (tokens.length) {
      if (waitingForNew) {
        subEl.textContent = tokens.join(" ");
      } else {
        subEl.textContent = tokens.join(" ") + " " + current;
      }
    } else {
      subEl.textContent = "";
    }
  }

  function inputDigit(d) {
    if (current === "Error") {
      current = d;
      waitingForNew = false;
      updateDisplay();
      return;
    }
    if (waitingForNew) {
      current = d;
      waitingForNew = false;
    } else {
      current = current === "0" ? d : current + d;
    }
    updateDisplay();
  }

  function inputDecimal() {
    if (current === "Error") {
      current = "0.";
      waitingForNew = false;
      updateDisplay();
      return;
    }
    if (waitingForNew) {
      current = "0.";
      waitingForNew = false;
    } else if (!current.includes(".")) {
      current += ".";
    }
    updateDisplay();
  }

  function clearAll() {
    current = "0";
    tokens = [];
    waitingForNew = false;
    updateDisplay();
  }

  function clearEntry() {
    current = "0";
    history = [];
    renderHistory();
    updateDisplay();
  }

  function pushNumber() {
    if (tokens.length === 0 || isOperator(tokens[tokens.length - 1])) {
      tokens.push(current);
    } else {
      tokens[tokens.length - 1] = current;
    }
  }

  function isOperator(t) {
    return ["+", "-", "×", "÷"].includes(t);
  }

  function handleOperator(op) {
    if (current === "Error") {
      current = "0";
    }

    if (
      tokens.length &&
      isOperator(tokens[tokens.length - 1]) &&
      waitingForNew
    ) {
      tokens[tokens.length - 1] = op;
    } else {
      pushNumber();
      tokens.push(op);
    }

    waitingForNew = true;
    updateDisplay();
  }

  function evaluateTokens(toks) {
    if (!toks.length) return current;
    const arr = toks.slice();

    let i = 0;
    while (i < arr.length) {
      const token = arr[i];
      if (token === "×" || token === "÷") {
        const a = parseFloat(arr[i - 1]);
        const b = parseFloat(arr[i + 1]);
        if (isNaN(a) || isNaN(b)) return "Error";
        if (token === "÷" && b === 0) return "Error";
        const res = token === "×" ? a * b : a / b;
        arr.splice(i - 1, 3, String(res));
        i = Math.max(0, i - 1);
      } else {
        i++;
      }
    }

    // 2. proses + dan -
    let result = parseFloat(arr[0]);
    for (let j = 1; j < arr.length; j += 2) {
      const op = arr[j];
      const num = parseFloat(arr[j + 1]);
      if (isNaN(num)) return "Error";
      if (op === "+") result = result + num;
      else if (op === "-") result = result - num;
      else return "Error";
    }

    if (!Number.isFinite(result)) return "Error";
    const rounded = parseFloat(result.toPrecision(12));
    return String(rounded);
  }
  function handleEquals() {
    if (!tokens.length) {
      updateDisplay();
      return;
    }
    pushNumber();

    const expr = tokens.join(" ");
    const res = evaluateTokens(tokens);

    if (res === "Error") {
      current = "Error";
      tokens = [];
    } else {
      current = res;
      history.unshift(expr + " = " + res);
      if (history.length > 5) history.length = 5;
      tokens = [];
      renderHistory();
    }
    waitingForNew = true;
    updateDisplay();
  }

  keys.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const action = btn.dataset.action;
    const value = btn.dataset.value;
    switch (action) {
      case "digit":
        inputDigit(value);
        break;
      case "decimal":
        inputDecimal();
        break;
      case "operator":
        handleOperator(value);
        break;
      case "equals":
        handleEquals();
        break;
      case "clearAll":
        clearAll();
        break;
      case "clearEntry":
        clearEntry();
        break;
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9") {
      inputDigit(e.key);
      return;
    }
    if (e.key === "." || e.key === ",") {
      inputDecimal();
      return;
    }
    if (e.key === "+" || e.key === "-") {
      handleOperator(e.key);
      return;
    }
    if (e.key === "*" || e.key === "x" || e.key === "X") {
      handleOperator("×");
      return;
    }
    if (e.key === "/") {
      handleOperator("÷");
      return;
    }
    if (e.key === "Enter" || e.key === "=") {
      e.preventDefault();
      handleEquals();
      return;
    }
    if (e.key === "Backspace") {
      clearEntry();
      return;
    }
    if (e.key.toLowerCase() === "c") {
      clearAll();
      return;
    }
  });

  renderHistory();
  updateDisplay();
})();
