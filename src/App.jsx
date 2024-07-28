import { Route, Routes } from "react-router-dom";

import PostPage from "./pages/PostPage.jsx";
import PostForm from "./pages/PostForm.jsx";
import NotFound from "./pages/NotFound.jsx";

import NavBar from "./components/NavBar.jsx";

function App() {

  return(

      <>

        <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<PostPage/>}/>
          <Route path="/new" element={<PostForm/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </>

  )
}

export default App;