const http = require("http");

const PORT = 3000;

function layout(title, content) {
  return `
  <!DOCTYPE html>
  <html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>${title} - Sistem Informasi Kampus</title>
    <style>
      body { font-family: Arial, sans-serif; background: #f4f6f8; margin: 0; padding: 0; }
      nav { background: #1e3a8a; padding: 15px 30px; }
      nav a { color: #fff; margin-right: 20px; text-decoration: none; font-weight: bold; }
      nav a:hover { text-decoration: underline; }
      .container { max-width: 700px; margin: 40px auto; background: #fff; padding: 30px 40px;
                   border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
      h1 { color: #1e3a8a; }
      footer { text-align: center; padding: 20px; color: #888; font-size: 14px; }
    </style>
  </head>
  <body>
    <nav>
      <a href="/">Beranda</a>
      <a href="/profil">Profil</a>
      <a href="/mata-kuliah">Mata Kuliah</a>
      <a href="/fasilitas">Fasilitas</a>
      <a href="/kontak">Kontak</a>
    </nav>
    <div class="container">
      ${content}
    </div>
    <footer>&copy; 2026 Sistem Informasi Kampus</footer>
  </body>
  </html>
  `;
}

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  switch (req.url) {
    case "/":
      res.writeHead(200);
      res.end(
        layout(
          "Beranda",
          `<h1>Selamat Datang</h1>
           <p>Selamat datang di Sistem Informasi Kampus. Website ini menyediakan
           informasi profil kampus, mata kuliah, fasilitas, dan kontak.</p>`
        )
      );
      break;

    case "/profil":
      res.writeHead(200);
      res.end(
        layout(
          "Profil Kampus",
          `<h1>Profil Kampus</h1>
           <p><strong>Nama Kampus:</strong> Universitas Insan Pembangunan Indonesia (UNIPI)</p>
           <p><strong>Berdiri:</strong> 1998</p>
           <p><strong>Alamat:</strong> Jl. Bitung</p>
           <p><strong>Visi:</strong> Menjadi kampus unggul di bidang teknologi informasi.</p>`
        )
      );
      break;

    case "/mata-kuliah":
      res.writeHead(200);
      res.end(
        layout(
          "Mata Kuliah",
          `<h1>Daftar Mata Kuliah</h1>
           <ul>
             <li>Pemrograman Dasar</li>
             <li>Basis Data</li>
             <li>Agama</li>
             <li>B.Inggris</li>
             <li>Jaringan Komputer</li>
           </ul>`
        )
      );
      break;

    case "/fasilitas":
      res.writeHead(200);
      res.end(
        layout(
          "Fasilitas",
          `<h1>Fasilitas Kampus</h1>
           <ul>
             <li>Laboratorium Komputer</li>
             <li>Perpustakaan</li>
             <li>Ruang Seminar</li>
             <li>Lahan Parkir</li>
           </ul>`
        )
      );
      break;

    case "/kontak":
      res.writeHead(200);
      res.end(
        layout(
          "Kontak",
          `<h1>Hubungi Kami</h1>
           <p><strong>Email:</strong> UNIPI@gmail.com</p>
           <p><strong>Telepon:</strong> 0888-7777-6666</p>
           <p><strong>Alamat:</strong> Jl. Bitung</p>`
        )
      );
      break;

    default:
      res.writeHead(404);
      res.end(
        layout(
          "404 Not Found",
          `<h1>404 - Halaman Tidak Ditemukan</h1>
           <p>Maaf, halaman <code>${req.url}</code> tidak tersedia.</p>
           <p><a href="/">Kembali ke Beranda</a></p>`
        )
      );
      break;
  }
});

server.listen(PORT, () => {
  console.log(`Server Informasi Kampus berjalan di http://localhost:${PORT}`);
});