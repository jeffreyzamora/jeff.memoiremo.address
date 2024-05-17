import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

// Define the path to the JSON file
const jsonFilePath = path.join(process.cwd(), 'address.json');

router.get('/', (req, res) => {
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (parseErr) {
            console.error('Error parsing JSON data:', parseErr);
            res.status(500).send('Internal Server Error');
        }
    });
});

export default router;
