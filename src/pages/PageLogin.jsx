import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import {Link} from "react-router-dom";

function Login() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate(); // Obtén la función navigate

    const onSubmit = async (data) => {
        console.log('Datos antes de enviar:', data);

        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log('Success:', result); // Verifica la respuesta del backend

            if (response.ok) {
                // Guarda el token y userId en localStorage
                localStorage.setItem('jwt', result.token);
                localStorage.setItem('userId', result.userId); // Guarda el userId

                console.log('Token:', localStorage.getItem('jwt')); // Verifica el token
                console.log('UserId:', localStorage.getItem('userId')); // Verifica el userId

                // Redirige al usuario a la página de inicio
                navigate('/home');
            } else {
                // Maneja los errores aquí
                console.error('Error:', result.message || 'Error al iniciar sesión');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (

        <div class="w-full max-w-sm p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 m-8">

            <h3 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Login</h3>

            <form onSubmit={handleSubmit(onSubmit)} class="mt-6">

                <div>
                    <label class="block text-sm text-gray-800 dark:text-gray-200">Email:</label>
                    <input type="email" {...register("email")} required 
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>

                <div>
                    <label class="block text-sm text-gray-800 dark:text-gray-200 mt-4">Password:</label>
                    <input type="text" {...register("password")} required 
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>

                <div class="m-6">
                    <input type="submit" value="Iniciar Sesión" class="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"/>
                </div>

                <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">

                    <span class="text-sm text-gray-600 dark:text-gray-200">¿No tienes una cuenta?</span>

                    <a href="#" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">
                        <Link to="/registro">Registrate</Link>
                    </a>

                </div>

            </form>

        </div>
    );
}

export default Login;