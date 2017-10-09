const express       = require('express');
const bodyParser    = require('body-parser');
const path          = require('path');
const http          = require('http');
const app           = express();

// API for interacting with MongoDB
const api           = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output file
app.use(express.static(path.join(__dirname, 'dist')));

// API Location
app.use('/api', api);

// Send all other requests to Angular
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Set Port
const port = process.env.PORT || '4200';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`running on localhost: ${port}`));



