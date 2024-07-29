import { useState, useEffect } from "react";

function PageHome() {
    const [data, setData] = useState(null);
    const userId = localStorage.getItem("userId"); // Obtén el userId del usuario que ha iniciado sesión

    useEffect(() => {
        fetch("http://localhost:4000/post")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            <ul>
                <h3>Bienvenido</h3>
                {data
                    ?.filter((post) => post.userId === userId) // Filtra los posts por userId
                    .map((post) => (
                        <li key={post.id}>UserID: {post.userId}, Content: {post.content}</li>
                    ))}
            </ul>
        </div>
    );
}

export default PageHome;