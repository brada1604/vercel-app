// index.js
const express = require('express'); // Pastikan tanda titik koma digunakan secara konsisten
const app = express(); // Inisialisasi aplikasi Express
const PORT = 4000; // Port untuk server

// Endpoint untuk route '/home'
app.get('/home', (req, res) => {
  // Mengembalikan response JSON dengan status 200
    res.status(200).json({ message: 'Welcome, your app is working well' });
});

// Memulai server pada port yang ditentukan
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// Ekspor aplikasi Express untuk digunakan di file lain
module.exports = app;
