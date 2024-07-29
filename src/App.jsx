import { Route, Routes } from "react-router-dom";

import PostPage from "./pages/PostPage.jsx";
import PageHome from "./pages/PageHome.jsx";
import PostForm from "./pages/PostForm.jsx";
import Login from "./pages/PageLogin.jsx";
import Registro from "./pages/Registro.jsx";
import NotFound from "./pages/NotFound.jsx";

import NavBar from "./components/NavBar.jsx";

function App() {

  return(

      <>

        <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<PostPage/>}/>
          <Route path="/home" element={<PageHome/>}/>
          <Route path="/new" element={<PostForm/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registro" element={<Registro/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </>

  )
}

export default App;