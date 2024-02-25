// routes.js
const express = require('express');
const router = express.Router();

// Contoh route untuk index.html
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Ekspor router
module.exports = router;
