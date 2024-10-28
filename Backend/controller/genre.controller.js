// controllers/genreController.js
const Genre = require('../model/genre.model.js');

// Get all genres
const getAllGenres = async (req, res) => {
    try {
        const genres = await Genre.find();
        res.json(genres);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new genre
const createGenre = async (req, res) => {
    const genre = new Genre({
        name: req.body.name,
        description: req.body.description,
    });

    try {
        const newGenre = await genre.save();
        res.status(201).json(newGenre);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getAllGenres, createGenre };
