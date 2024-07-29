import { useState, useEffect } from "react";
import axios from "axios";

function PageHome() {
    const [posts, setPosts] = useState([]);
    const [userName, setUserName] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("jwt");

    useEffect(() => {
        if (!userId || !token) {
            console.error("userId or token not found in localStorage");
            setLoading(false);
            return;
        }

        // Obtener los posts del usuario
        axios.get(`http://localhost:4000/User/${userId}/Post`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            if (response.data && Array.isArray(response.data.posts)) {
                setPosts(response.data.posts);
            } else {
                console.error("Data format is incorrect:", response.data);
            }
        })
        .catch((error) => {
            console.error("Error fetching posts:", error);
            setError(error);
        });

        // Obtener la información del usuario
        axios.get(`http://localhost:4000/User/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log("User data response:", response.data); // Verifica la respuesta del usuario
            if (response.data && response.data.username) {
                setUserName(response.data.username);
            } else {
                console.error("Username field is missing in response:", response.data);
            }
        })
        .catch((error) => {
            console.error("Error fetching user data:", error);
            setError(error);
        })
        .finally(() => {
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
            <h3>Bienvenido, {userName}</h3>
            <ul>
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <li key={post.id}>Content: {post.content}</li>
                    ))
                ) : (
                    <li>No posts available</li>
                )}
            </ul>
        </div>
    );
}

export default PageHome;