// Require mongoose
const mongoose = require('mongoose');

// Create Movie MongoBD Schema
const movieSchema = new mongoose.Schema ({
    title: String,
    image: String,
    description: String
});

// Create Movie Model from Schema
const movieModel = mongoose.Model('Movie', movieSchema);

// Export Movie Model
module.exports = movieModel;