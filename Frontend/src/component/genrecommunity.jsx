import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GenreCommunity = () => {
    const { genreId } = useParams();
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', content: '' });
    const [loading, setLoading] = useState(true);
    const [loadingPost, setLoadingPost] = useState(false);
    const [error, setError] = useState(null);

    // Fetch posts based on genreId when the component mounts or genreId changes
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`https://mindful-backend-lixt.onrender.com`); // Use genreId in the URL
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                console.log("Fetched Posts: ", data); // Log fetched data for debugging
                setPosts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, [genreId]);

    // Handle post submission
    const handlePostSubmit = async (e) => {
        e.preventDefault();
        setLoadingPost(true); // Set loading state for post submission

        try {
            const response = await fetch(`http://localhost:4001/api/community`, { // Fix syntax error here
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...newPost, genre: genreId }), // Make sure genre is sent with the post
            });
            if (!response.ok) {
                throw new Error('Failed to create post');
            }
            const createdPost = await response.json();
            console.log("Created Post: ", createdPost); // Log newly created post for debugging
            setPosts((prevPosts) => [...prevPosts, createdPost]); // Add new post to state
            setNewPost({ title: '', content: '' }); // Reset input fields
        } catch (error) {
            setError(error.message);
        } finally {
            setLoadingPost(false); // Reset loading state
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Community for Genre {genreId}</h1> {/* Optional: display genreId */}
            {error && <p className="text-red-500">{error}</p>}
            <form className="mb-6" onSubmit={handlePostSubmit}>
                <input
                    type="text"
                    className="border border-gray-300 p-3 rounded w-full mb-2 focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    required
                />
                <textarea
                    className="border border-gray-300 p-3 rounded w-full mb-2 focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Content"
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    required
                />
                <button
                    className={`bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition ${loadingPost ? 'opacity-50 cursor-not-allowed' : ''}`}
                    type="submit"
                    disabled={loadingPost}
                >
                    {loadingPost ? 'Posting...' : 'Post'}
                </button>
            </form>

            <h2 className="text-2xl font-semibold mb-4">Posts</h2>
            {loading ? (
                <p>Loading posts...</p>
            ) : (
                <ul className="space-y-4">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <li key={post._id} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold">{post.title}</h3>
                                <p className="mt-2">{post.content}</p>
                            </li>
                        ))
                    ) : (
                        <p>No posts available for this genre.</p>
                    )}
                </ul>
            )}
        </div>
    );
};

export default GenreCommunity;


