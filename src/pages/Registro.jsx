import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";

function Registro() {

    const { register, handleSubmit } = useForm();

    // Función para mandar al formulario
    const onSubmit = async (data) => {
        // Imprimir los datos antes de enviarlos
        console.log('Datos antes de enviar:', data);

        fetch('http://localhost:4000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <div class="w-full max-w-sm p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 m-8">

            <h3 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Registro</h3>

            <form onSubmit={handleSubmit(onSubmit)} class="mt-6">

                <div>
                    <label class="block text-sm text-gray-800 dark:text-gray-200">Usuario:</label>
                    <input type="text" {...register("username")} required 
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    ></input>
                </div>

                <div class="mt-4">
                    <div class="flex items-center justify-between">
                        <label class="block text-sm text-gray-800 dark:text-gray-200">Email:</label>
                    </div>

                    <input type="text" {...register("email")} required 
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    ></input>

                </div>

                <div class="mt-6">
                    <label class="block text-sm text-gray-800 dark:text-gray-200">Password:</label>
                    <input type="text" {...register("password")} required 
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    ></input>
                </div>

                <div class="m-6">
                    <input type="submit" value="Registrarse" class="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"/>
                </div>

                <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">

                    <span class="text-sm text-gray-600 dark:text-gray-200">¿Iniciar Sesión?</span>

                    <a href="#" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">
                        <Link to="/">Login</Link>
                    </a>

                </div>

            </form>

        </div>
    )
}

export default Registro;