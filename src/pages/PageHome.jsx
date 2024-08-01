import { useState, useEffect } from "react";
import axios from "axios";

import NavBar from "../components/NavBar.jsx";
import Card from "../components/Card.jsx"

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
                console.error("Formato de data es incorrecto:", response.data);
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
                console.error("Username no se encuentras:", response.data);
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

            <NavBar></NavBar>

            <div class="w-full  max-w-xs mx-auto my-5 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img class="object-cover w-full h-56" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />

                <div class="py-5 text-center">
                    <h3 class="block text-xl font-bold text-gray-800 dark:text-white">Bienvenido</h3>
                    <span class="text-sm text-gray-700 dark:text-gray-200">{userName}</span>
                </div>
            </div>

            {posts.length > 0 ? (
            posts.map((post) => (
            <Card 
                key={post.id}
                title={userName}
                description={post.content} 
            />
        ))
        ) : (
        <p>No posts encontrados</p> // Mensaje opcional si no hay posts
        )}

        </div>
    );
}

export default PageHome;