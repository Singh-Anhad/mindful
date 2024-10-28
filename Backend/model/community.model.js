import mongoose from "mongoose";
const communityPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre', // Ensure this references your Genre model correctly
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Post = mongoose.model('CommunityPost', communityPostSchema,'community_posts');

export default Post;