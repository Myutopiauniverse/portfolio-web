require("dotenv").config();
const express = require("express");
const sql = require("mssql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database configuration (No username/password for Windows Authentication)
const dbConfig = {
    server: process.env.DB_SERVER, 
    database: process.env.DB_NAME,
    options: { encrypt: true, trustServerCertificate: true },
    authentication: { type: "default" } // Use Windows Authentication
};

// Test database connection
sql.connect(dbConfig)
    .then(() => console.log("Connected to SQL Server"))
    .catch(err => console.error("Database connection failed:", err));

app.post("/submit-form", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        await sql.connect(dbConfig);
        await sql.query`INSERT INTO contacts (name, email, message) VALUES (${name}, ${email}, ${message})`;
        res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error saving message", error });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
