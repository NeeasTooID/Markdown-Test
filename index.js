// Import modul yang diperlukan
const express = require('express');
const markdownIt = require('markdown-it')();
const fs = require('fs');
const path = require('path');

// Inisialisasi aplikasi Express
const app = express();

// Fungsi untuk mengubah Markdown menjadi HTML
function markdownToHtml(markdown) {
    return markdownIt.render(markdown);
}

// Rute GET untuk mengubah Markdown menjadi HTML
app.get('/markdown', (req, res) => {
    const filePath = path.join(__dirname, 'index.md'); // Ganti 'index.md' dengan nama file Anda
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Terjadi kesalahan saat membaca file');
        } else {
            const html = markdownToHtml(data);
            res.send(html);
        }
    });
});

// Menjalankan server
const port = 3000;
app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}`));
