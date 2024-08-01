import { useForm } from "react-hook-form";
import NavBar from "../components/NavBar";
import Alert from "../components/Alert";
import { useState } from "react";

function PostForm() {
    const { register, handleSubmit, reset } = useForm();
    const [alertVisible, setAlertVisible] = useState(false);

    const onSubmit = async (data) => {
        // Convertir userID a número
        data.userId = Number(data.userId);

        // Imprimir los datos antes de enviarlos
        console.log('Datos antes de enviar:', data);

        try {
            const response = await fetch('http://localhost:4000/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            console.log('Success:', result);
            
            // Limpiar el formulario y mostrar la alerta
            reset();
            setAlertVisible(true);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div>
            <NavBar />

            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 m-8">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Post Form</h2>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200">UserID</label>
                                <input 
                                    type="number" 
                                    {...register("userId")} 
                                    required 
                                    id="username" 
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Content:</label>
                                <input 
                                    type="text" 
                                    {...register("content")} 
                                    required 
                                    id="emailAddress" 
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div>
                                <input 
                                    type="submit" 
                                    value="Crear Post" 
                                    className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            {alertVisible && (
                <div className="fixed bottom-4 right-4">
                    <Alert 
                        message="Post creado exitosamente!" 
                        onClose={() => setAlertVisible(false)} 
                    />
                </div>
            )}
        </div>
    )
}

export default PostForm;