const Post = require('../model/community.model');

// Fetch posts by genre
const getPostsByGenre = async (req, res) => {
    try {
        const posts = await Post.find({ genre: req.params.genreId }).populate('genre');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching posts' });
    }
};

// Create a new post
const createPost = async (req, res) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Error creating post' });
    }
};

module.exports = {
    getPostsByGenre,
    createPost,
};
