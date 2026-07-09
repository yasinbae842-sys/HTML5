const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

let mahasiswa = [
    {
        id: 1,
        nama: "Andi",
        nim: "230001",
        prodi: "Informatika"
    }
];

app.get("/api/mahasiswa", (req, res) => {
    res.json(mahasiswa);
});

app.get("/api/mahasiswa/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const data = mahasiswa.find(m => m.id === id);

    if (data) {
        res.json(data);
    } else {
        res.status(404).json({
            message: "Data tidak ditemukan"
        });
    }
});

app.post("/api/mahasiswa", (req, res) => {

    const data = {
        id: Date.now(),
        nama: req.body.nama,
        nim: req.body.nim,
        prodi: req.body.prodi
    };

    mahasiswa.push(data);

    res.status(201).json(data);

});

app.put("/api/mahasiswa/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = mahasiswa.findIndex(m => m.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Data tidak ditemukan"
        });
    }

    mahasiswa[index] = {
        id: id,
        nama: req.body.nama,
        nim: req.body.nim,
        prodi: req.body.prodi
    };

    res.json(mahasiswa[index]);

});

app.delete("/api/mahasiswa/:id", (req, res) => {

    const id = parseInt(req.params.id);

    mahasiswa = mahasiswa.filter(m => m.id !== id);

    res.json({
        message: "Data berhasil dihapus"
    });

});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
