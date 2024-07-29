import { useState, useEffect } from "react";
import axios from "axios";

function PageHome() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("jwt");

    useEffect(() => {
        console.log("userId from localStorage:", userId); // Verifica el userId
        console.log("Token from localStorage:", token); // Verifica el token

        if (!userId || !token) {
            console.error("userId or token not found in localStorage");
            setLoading(false);
            return;
        }

        axios.get(`http://localhost:4000/User/${userId}/Post`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log("Response status:", response.status);
            console.log("Response data:", response.data);
            if (response.data && Array.isArray(response.data.posts)) {
                console.log("Posts received:", response.data.posts); // Verifica los posts
                setData(response.data.posts);
            } else {
                console.error("Data format is incorrect:", response.data);
            }
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            setError(error);
            setLoading(false);
        });
    }, [userId, token]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h3>Bienvenido</h3>
            <ul>
                {data.length > 0 ? (
                    data.map((post) => (
                        <li key={post.id}>UserID: {post.userId}, Content: {post.content}</li>
                    ))
                ) : (
                    <li>No posts available</li>
                )}
            </ul>
        </div>
    );
}

export default PageHome;