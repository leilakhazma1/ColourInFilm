const express = require('express');
const app = express();



// Serve static files from the 'Public' folder
app.use(express.static('Public'));


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);});
