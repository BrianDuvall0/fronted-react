import Card from "../components/Card";
import NavBar from "../components/NavBar";

import { useState, useEffect } from "react";

function PostPage() {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch("http://localhost:4000/post")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Añade este log para inspeccionar los datos
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  

  if (loading) {
    return <p>Cargando posts...</p>;
  }

  if (error) {
    return <p>Error al cargar los posts: {error}</p>;
  }

  return (
    <div>

      <NavBar></NavBar>

      {data.length > 0 ? (
        data.map((post) => (
          <Card 
            key={post.id} 
            title={post.userId} // Mostrar el username en lugar de userId
            description={post.content} 
          />
        ))
      ) : (
        <p>No se encontraron posts</p> 
      )}
    </div>
  );
}

export default PostPage;