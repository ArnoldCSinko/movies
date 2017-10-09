const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;
const methodOverride = require('method-override');

//Mongoose promise library
mongoose.Promise = global.Promise;

// Create Database URI
const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/movie_app';

// Connect to database using Mongoose's .connect() method
mongoose.connect(databaseUri, { useMongoClient: true })
.then(() => console.log("Connected to database"))
.catch(err => console.log("Error connecting to database: " + err.message));

// Setup method-override
app.use(methodOverride("_method"));

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get all movies
router.get('/movies', (req, res) => {
    connection((db) => {
        db.collection('movies')
            .find()
            .toArray()
            .then((movies) => {
                response.data = movies;
                // console.log(response);
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// Get a specific movie given id
router.get('/movies/:id', (req, res) => {
   
});


module.exports = router;