import { Route, Routes } from "react-router-dom";

import PostPage from "./pages/PostPage.jsx";
import PageHome from "./pages/PageHome.jsx";
import PostForm from "./pages/PostForm.jsx";
import Login from "./pages/Login.jsx";
import Registro from "./pages/Registro.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {

  return(

      <>

        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/registro" element={<Registro/>}/>

          <Route path="/pots" element={<PostPage/>}/>
          <Route path="/home" element={<PageHome/>}/>
          <Route path="/new" element={<PostForm/>}/>
        
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      
      </>
  )
}

export default App;