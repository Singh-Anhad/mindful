import mongoose from 'mongoose';

// Define the Genre schema
const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create the Genre model and export it as default
const Genre = mongoose.model('Genre', genreSchema,'music_genres');
export default Genre; // Ensure you have a default export
