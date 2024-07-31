import {Link} from "react-router-dom"

function NavBar() {
    return (
        <nav class="bg-white shadow dark:bg-gray-800">

            <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            
                    <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                        <Link to="/">Home</Link>
                    </a>
                    <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                        <Link to="/new">Create Post</Link>
                    </a>
                    <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                        <Link to="/login">Login</Link>
                    </a>
                    <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                        <Link to="/registro">Registro</Link>
                    </a>
    
            </div>

        </nav>
    )
}

export default NavBar;