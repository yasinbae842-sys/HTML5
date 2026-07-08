const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (req.url === "/") {
    res.writeHead(200);
    res.end("<h1>Selamat Datang di Praktikum Pemrograman Dasar</h1>");
  } else if (req.url === "/profil") {
    res.writeHead(200);
    res.end("<h1>Halaman Profil</h1><p>Nama: Yasiin Fadlan Lubis, NIM: 2025806078</p>");
  } else if (req.url === "/mata-kuliah") {
    res.writeHead(200);
    res.end(
      "<h1>Mata Kuliah</h1><ul><li>Pemrograman Dasar</li><li>Basis Data</li><li>Jaringan Komputer</li></ul>"
    );
  } else if (req.url === "/kontak") {
    res.writeHead(200);
    res.end("<h1>Kontak</h1><p>Email: yasiin@gmail.com</p>");
  } else {
    res.writeHead(404);
    res.end("<h1>404 - Halaman Tidak Ditemukan</h1>");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});