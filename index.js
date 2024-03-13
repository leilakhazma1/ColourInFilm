const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Define routes for serving HTML files

app.get('/amelie', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'amelie.html'));
});

app.get('/american', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'american.html'));
});

app.get('/colour', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'colour.html'));
});

app.get('/colourinfilm', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'colourinfilm.html'));
});

app.get('/eternalsunshine', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'eternalsunshine.html'));
});

app.get('/fightclub', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'fightclub.html'));
});

app.get('/pan', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'pan.html'));
});

app.get('/paris', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'paris.html'));
});

app.get('/thegrandbudapest', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'thegrandbudapest.html'));
});

app.get('/truman', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'truman.html'));
});

// Define API route for fetching film colors
app.get('/api/film-colors/:filmId', (req, res) => {
    const filmId = req.params.filmId;
    fs.readFile('colourinfilm.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            const film = jsonData.films.find(film => film.id === filmId);
            if (!film) {
                res.status(404).json({ error: 'Film not found' });
                return;
            }
            res.json({ film });
        } catch (error) {
            console.error('Error parsing JSON data:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
