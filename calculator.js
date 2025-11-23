(() => {
  const displayEl = document.getElementById("mainValue");
  const subEl = document.getElementById("subdisplay");
  const keys = document.getElementById("keys");

  let current = "0";
  let tokens = [];
  let waitingForNew = false;

  function updateDisplay() {
    displayEl.textContent = current;
    subEl.textContent = tokens.length ? tokens.join(" ") : "";
  }

  function inputDigit(d) {
    if (waitingForNew) {
      current = d;
      waitingForNew = false;
    } else {
      current = current === "0" ? d : current + d;
    }
    updateDisplay();
  }

  function inputDecimal() {
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
    updateDisplay();
  }

  function pushNumber() {
    if (
      tokens.length === 0 ||
      (typeof tokens[tokens.length - 1] === "string" &&
        isNaN(tokens[tokens.length - 1]))
    ) {
      tokens.push(current);
    } else {
      tokens[tokens.length - 1] = current;
    }
  }

  function handleOperator(op) {
    if (tokens.length && isOperator(tokens[tokens.length - 1])) {
      tokens[tokens.length - 1] = op;
    } else {
      pushNumber();
      tokens.push(op);
    }
    waitingForNew = true;
    updateDisplay();
  }

  function isOperator(t) {
    return ["+", "-", "×", "÷"].includes(t);
  }

  function evaluateTokens(toks) {
    if (!toks.length) return current;
    let arr = toks.slice();
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
    if (tokens.length && !isOperator(tokens[tokens.length - 1])) {
    } else if (tokens.length && isOperator(tokens[tokens.length - 1])) {
      tokens.pop();
    } else {
      updateDisplay();
      return;
    }

    pushNumber();
    const res = evaluateTokens(tokens);
    if (res === "Error") {
      current = "Error";
      tokens = [];
    } else {
      current = res;
      tokens = [];
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

  updateDisplay();
})();
