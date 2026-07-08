# Server Informasi Kampus

Mini project HTTP Server sederhana menggunakan **Node.js** (hanya modul bawaan `http`,
tanpa framework tambahan) sesuai materi kuliah ke-12: *Node.js Dasar dan Pembuatan
HTTP Server Sederhana*.

## Deskripsi

Server ini menampilkan informasi seputar kampus (profil, mata kuliah, fasilitas, dan
kontak) dalam bentuk halaman HTML sederhana, lengkap dengan routing dan penanganan
status code yang sesuai.

## Ketentuan Proyek

- [x] Berjalan di **Port 3000**
- [x] Memiliki **5 routing** (lebih dari ketentuan minimal)
- [x] Menampilkan halaman **HTML sederhana** (dengan navigasi dan styling dasar)
- [x] Menggunakan **status code** yang sesuai (200 untuk halaman valid, 404 untuk
      halaman tidak ditemukan)
- [x] Memiliki file `package.json`
- [x] Didokumentasikan pada `README.md`

## Daftar Routing

| Route          | Deskripsi                          | Status Code |
|----------------|-------------------------------------|-------------|
| `/`            | Halaman beranda / selamat datang    | 200         |
| `/profil`      | Profil kampus                       | 200         |
| `/mata-kuliah` | Daftar mata kuliah                  | 200         |
| `/fasilitas`   | Daftar fasilitas kampus             | 200         |
| `/kontak`      | Informasi kontak kampus             | 200         |
| Selain di atas | Halaman tidak ditemukan             | 404         |

## Cara Menjalankan

1. Pastikan Node.js sudah terinstal (`node -v` dan `npm -v`).
2. Masuk ke folder project:
   ```bash
   cd mini-project-kampus
   ```
3. (Opsional) inisialisasi ulang dependensi:
   ```bash
   npm install
   ```
4. Jalankan server:
   ```bash
   npm start
   ```
   atau
   ```bash
   node mini_project.js
   ```
5. Buka browser dan akses:
   ```
   http://localhost:3000
   ```

## Pengujian

Server dapat diuji menggunakan:

- **Browser** — buka setiap URL routing secara langsung, contoh:
  `http://localhost:3000/profil`
- **Postman** — pilih metode `GET`, masukkan URL `http://localhost:3000/<route>`,
  lalu klik **Send** untuk melihat respons dan status code.

### Hasil Pengujian

```
GET /             -> 200 OK
GET /profil       -> 200 OK
GET /mata-kuliah  -> 200 OK
GET /fasilitas    -> 200 OK
GET /kontak       -> 200 OK
GET /halaman-lain -> 404 Not Found
```

## Struktur Folder

```
mini-project-kampus/
├── mini_project.js          # Entry point server (routing + logic)
├── package.json    # Metadata & script proyek
└── README.md        # Dokumentasi proyek
```

## Teknologi

- Node.js (modul bawaan `http`)
- JavaScript (ES6+)