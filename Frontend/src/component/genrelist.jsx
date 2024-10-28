import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GenreList = () => {
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await fetch('http://localhost:4001/api/genre');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setGenres(data);
            } catch (error) {
                console.error("Error fetching genres:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchGenres();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (genres.length === 0) return <div>No genres available.</div>;

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Music Genres</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {genres.map((genre) => (
                    <li key={genre._id} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
                        <Link to={`/community/${genre._id}`} className="text-lg font-semibold text-blue-600">
                            {genre.name}
                        </Link>
                        <p className="text-gray-600 mt-2">{genre.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GenreList;
