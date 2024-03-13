const express = require('express');
const app = express();
const path = require('path');


// Serve static files from the 'Public' folder
app.use(express.static(path.join(__dirname, 'Public')));

// Define routes for serving HTML files

app.get('/amelie', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'HTML', 'amelie.html'));
});

app.get('/american', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'HTML', 'american.html'));
});

app.get('/colour', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'HTML', 'colour.html'));
});

app.get('/colourinfilm', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'HTML', 'colourinfilm.html'));
});

app.get('/eternalsunshine', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'HTML', 'eternalsunshine.html'));
});

app.get('/fightclub', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'HTML', 'fightclub.html'));
});

app.get('/pan', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'HTML', 'pan.html'));
});

app.get('/paris', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'HTML', 'paris.html'));
});

app.get('/thegrandbudapest', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'HTML', 'thegrandbudapest.html'));
});

app.get('/truman', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'HTML', 'truman.html'));
});

// Define API route for fetching film colors
app.get('/api/film-colors/:filmId', (req, res) => {
    const filmId = req.params.filmId;
    fs.readFile(path.join(__dirname, 'Public', 'colourinfilm.json'), 'utf8', (err, data) => {
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
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
