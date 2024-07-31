import { useState, useEffect } from "react"

function PostPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/post")
      .then((response) => response.json())
      .then((data) => setData(data))
  }, []);

  return(
    
    <div className="max-w-md overflow-hidden bg-gray-100 rounded-xl shadow-md dark:bg-gray-900 m-8">
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">GET Posts</h3>
        {data?.map((post) => (
          <p key={post.userId} className="mt-3 text-gray-600 dark:text-gray-400">
            <span className="font-bold text-gray-800 dark:text-gray-100">UserID:</span> {post.userId}, 
            <span className="font-bold text-gray-800 dark:text-gray-100"> Content:</span> {post.content}
          </p>
        ))}
      </div>
    </div>
  

  )
}

export default PostPage;