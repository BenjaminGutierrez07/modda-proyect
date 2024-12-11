const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Mock database
const database = {
    "nike260": { date: "2024-12-10", model: "Nike sport", size: "40", price: "$150" },
    "adidas320": { date: "2024-12-10", model: "Adidas color", size: "42", price: "$170" },
    "puma100": { date: "2024-12-10", model: "Puma simple", size: "39", price: "$100" }
};

app.use(cors());
app.use(bodyParser.json());

// Endpoint to get data by QR code
app.post('/api/scan', (req, res) => {
    const { code } = req.body;
    if (database[code]) {
        res.json(database[code]);
    } else {
        res.status(404).json({ message: 'No data found for the scanned code.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});