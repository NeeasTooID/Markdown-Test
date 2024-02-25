const express = require('express');
const app = express();

// Contoh route untuk index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Contoh route lainnya
app.get('/about', (req, res) => {
  res.send('Ini adalah halaman "About"');
});

// Port server
const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
