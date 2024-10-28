import { Router } from 'express';
import Genre from '../model/genre.model.js'; // Adjust the path as necessary

const router = Router();

// Route to get all genres
router.get('/', async (req, res) => {
    try {
        const genres = await Genre.find();
        res.status(200).json(genres);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching genres' });
    }
});

// Export the router as default
export default router;
