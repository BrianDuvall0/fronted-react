import { useState, useEffect } from "react"

function PostPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/post")
      .then((response) => response.json())
      .then((data) => setData(data))
  }, []);

  return(
    
      <div>
        <ul>
          <h3>GET Posts</h3>
          {data?.map((post) => (<li key={post.userId}>UserID: {post.userId}, Content: {post.content}</li>))}
        </ul>
      </div>

  )
}

export default PostPage;