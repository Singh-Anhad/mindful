import express from "express";
import Post from "../model/community.model.js"; // Import your Post model

const router = express.Router();

// Create a new post
router.post("/", async (req, res) => {
    const { title, content, genre } = req.body;

    const newPost = new Post({
        title,
        content,
        genre,
    });

    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all posts
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find().populate("genre");
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add additional routes for updating and deleting posts as needed...

export default router;