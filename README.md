# 🧮 Simple Calculator

> Kalkulator web interaktif dengan antarmuka yang elegan dan fitur history perhitungan

[![HTML](https://img.shields.io/badge/HTML-51.1%25-e34c26?style=flat-square&logo=html5&logoColor=white)](https://github.com/bagaspng/Simple-Calculator)
[![JavaScript](https://img.shields.io/badge/JavaScript-48.9%25-f1e05a?style=flat-square&logo=javascript&logoColor=black)](https://github.com/bagaspng/Simple-Calculator)
[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=flat-square)](https://bagaspng.github.io/Simple-Calculator/)

<img width="1389" height="761" alt="image" src="https://github.com/user-attachments/assets/0b161053-6316-4cb5-96de-d1e6900f7d9f" />
</br>
## 📋 Deskripsi

Simple Calculator adalah aplikasi kalkulator web yang dibuat dengan HTML, CSS, dan JavaScript murni. Aplikasi ini menampilkan antarmuka yang modern dan intuitif dengan fitur history perhitungan, mendukung operasi matematika dasar, dan responsif untuk berbagai perangkat. 

## ✨ Fitur Utama

### 🎯 Operasi Matematika
- ➕ **Penjumlahan** - Menambahkan dua atau lebih angka
- ➖ **Pengurangan** - Mengurangi angka
- ✖️ **Perkalian** - Mengalikan angka (menggunakan simbol ×)
- ➗ **Pembagian** - Membagi angka (menggunakan simbol ÷)
- 🔢 **Desimal** - Mendukung bilangan desimal

### 🎨 Antarmuka & Pengalaman
- 📱 **Responsif** - Tampilan optimal di desktop dan mobile
- 🎨 **Desain Modern** - UI dengan gradient dan shadow yang elegan
- 📊 **History Perhitungan** - Menyimpan 5 perhitungan terakhir
- ⌨️ **Keyboard Support** - Dapat dioperasikan dengan keyboard
- 🎭 **Visual Feedback** - Animasi button saat diklik

### 🔧 Fungsionalitas Tambahan
- 🗑️ **Clear All (C)** - Menghapus semua input dan reset kalkulator
- 🔄 **Clear Entry (CE)** - Menghapus input saat ini dan history
- ⚠️ **Error Handling** - Menangani pembagian dengan nol dan input tidak valid
- 💾 **State Management** - Menyimpan state perhitungan saat ini

## 🚀 Demo

![Calculator Demo](https://github.com/user-attachments/assets/0b161053-6316-4cb5-96de-d1e6900f7d9f)

**[🔗 Coba Langsung di Browser](https://bagaspng.github. io/Simple-Calculator/)**

## 🛠️ Teknologi

| Teknologi | Versi | Persentase | Deskripsi |
|-----------|--------|------------|-----------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | HTML5 | 51.1% | Struktur dan layout aplikasi |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | ES6+ | 48.9% | Logika perhitungan dan interaktivitas |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | CSS3 | - | Styling dan animasi (embedded) |

## 📦 Instalasi & Penggunaan

### 1. Clone Repository
```bash
git clone https://github.com/bagaspng/Simple-Calculator.git
cd Simple-Calculator
```

### 2. Jalankan Aplikasi
```bash
# Opsi 1: Buka langsung di browser
open index.html

# Opsi 2: Menggunakan Live Server (VS Code)
# Install Live Server extension, lalu klik kanan index.html > Open with Live Server

# Opsi 3: Menggunakan Python HTTP Server
python -m http.server 8000
# Buka http://localhost:8000

# Opsi 4: Menggunakan Node.js
npx serve . 
# Buka http://localhost:3000
```

## 🎮 Cara Penggunaan

### 🖱️ Menggunakan Mouse
1. **Klik angka** untuk memasukkan digit
2. **Klik operator** (+, -, ×, ÷) untuk operasi
3. **Klik "="** atau **Enter** untuk menghitung
4. **Klik "C"** untuk reset semua
5. **Klik "CE"** untuk hapus entry dan history

### ⌨️ Menggunakan Keyboard
| Tombol | Fungsi |
|--------|--------|
| `0-9` | Input angka |
| `+` `-` | Operasi tambah/kurang |
| `*` `x` `X` | Operasi kali |
| `/` | Operasi bagi |
| `.` `,` | Titik desimal |
| `Enter` `=` | Hitung hasil |
| `Backspace` | Clear entry |
| `C` `c` | Clear all |

### 📊 Contoh Penggunaan
```
Input: 15 + 25 × 2
Proses: 15 + (25 × 2) = 15 + 50 = 65
Output:  65

Input: 100 ÷ 4 - 5
Proses:  (100 ÷ 4) - 5 = 25 - 5 = 20
Output: 20
```

## 📁 Struktur Project

```
Simple-Calculator/
│
├── 📄 index.html          # File HTML utama dengan CSS embedded
├── 📜 calculator.js       # Logika JavaScript untuk kalkulator
├── 📖 README.md          # Dokumentasi project
└── 📷 screenshots/       # Gambar demo (opsional)
```

## 🎯 Fitur Detail

### 🧠 Algoritma Perhitungan
- **Order of Operations**: Mengikuti aturan matematika (× ÷ sebelum + -)
- **Precision Handling**: Menggunakan `toPrecision(12)` untuk akurasi
- **Error Prevention**: Validasi input dan handling edge cases

### 🎨 Desain System
```css
Color Palette:
--base:  #fdf4e3      (Background utama)
--second: #ed3f27    (Operator buttons)
--third: #feb21a     (Equals button)
--additional: #134686 (Display background)
--dark: #222         (Text color)
```

### 📱 Responsive Design
- **Desktop**: Grid 2 kolom (kalkulator + history)
- **Mobile**: Grid 1 kolom (stacked layout)
- **Breakpoint**: 820px

## 🔧 Kustomisasi

### Mengubah Tema Warna
```css
: root {
  --base: #your-base-color;
  --second: #your-operator-color;
  --third: #your-equals-color;
  --additional:  #your-display-color;
  --dark: #your-text-color;
}
```

### Menambah Operator Baru
```javascript
// Tambahkan di function isOperator
function isOperator(t) {
  return ["+", "-", "×", "÷", "^"].includes(t); // Tambah "^" untuk pangkat
}
```

## 🐛 Troubleshooting

### Masalah Umum

**Q: Hasil perhitungan tidak akurat? **
A: JavaScript menggunakan floating point.  Aplikasi sudah menggunakan `toPrecision(12)` untuk akurasi optimal.

**Q:  History tidak muncul?**
A: Pastikan melakukan perhitungan dengan operator dan equals. History hanya menyimpan hasil yang valid.

**Q:  Keyboard tidak bekerja? **
A:  Pastikan focus berada di window aplikasi. Klik area kalkulator terlebih dahulu. 

### 🔍 Debug Mode
```javascript
// Tambahkan di console untuk debug
console.log('Current:', current);
console.log('Tokens:', tokens);
console.log('History:', history);
```

## 🤝 Kontribusi

Kontribusi sangat welcome! Berikut cara berkontribusi: 

### 🔄 Steps untuk Kontribusi
1. **Fork** repository ini
2. **Create branch** untuk fitur baru (`git checkout -b feature/amazing-feature`)
3. **Commit** perubahan (`git commit -m 'Add amazing feature'`)
4. **Push** ke branch (`git push origin feature/amazing-feature`)
5. **Buka Pull Request**

### 💡 Ideas untuk Kontribusi
- [ ] Menambah operasi matematika (pangkat, akar, persen)
- [ ] Dark/Light theme toggle
- [ ] Export history ke file
- [ ] Scientific calculator mode
- [ ] Unit converter
- [ ] Improve accessibility (ARIA labels)

## 📄 Lisensi

Project ini dilisensikan di bawah **MIT License** - lihat file [LICENSE](LICENSE) untuk detail.

## 👨‍💻 Author

**Bagas PNG** ([@bagaspng](https://github.com/bagaspng))

- 📧 Email:  [your-email@example.com]
- 🌐 Portfolio: [your-portfolio-link]
- 💼 LinkedIn: [your-linkedin-profile]

## 🙏 Acknowledgments

- Terima kasih kepada komunitas web development Indonesia
- Inspirasi desain dari calculator modern apps
- Font family menggunakan Inter, Roboto, dan Segoe UI

## 📊 Stats

![Repository Stats](https://github-readme-stats.vercel.app/api/pin/? username=bagaspng&repo=Simple-Calculator&theme=tokyonight)

---

<div align="center">

**⭐ Jika project ini membantu, jangan lupa beri star! **

[![GitHub stars](https://img.shields.io/github/stars/bagaspng/Simple-Calculator?style=social)](https://github.com/bagaspng/Simple-Calculator/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/bagaspng/Simple-Calculator?style=social)](https://github.com/bagaspng/Simple-Calculator/network/members)

</div>
