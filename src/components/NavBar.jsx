import {Link} from "react-router-dom"

function NavBar() {
    return (
        <nav class="bg-white shadow dark:bg-gray-800">

            <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            
                    <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                        <Link to="/pots">Home</Link>
                    </a>
                    <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                        <Link to="/new">Create Post</Link>
                    </a>
                    <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                        <Link to="/home">Perfil</Link>
                    </a>
                    <button class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        <Link to="/">Cerrar Sesión</Link>
                    </button>
    
            </div>

        </nav>
    )
}

export default NavBar;