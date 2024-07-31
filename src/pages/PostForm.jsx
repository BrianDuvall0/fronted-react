import { useForm } from "react-hook-form";

function PostForm() {
    const { register, handleSubmit } = useForm();
    
    // Función para mandar al formulario
    const onSubmit = async (data) => {
        // Convertir userID a número
        data.userId = Number(data.userId);

        // Imprimir los datos antes de enviarlos
        console.log('Datos antes de enviar:', data);

        fetch('http://localhost:4000/post', {
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
        
        <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 m-8">

        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Post Form</h2>

            <div>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        
                        <div>
                            <label class="text-gray-700 dark:text-gray-200" >UserID</label>
                            <input type="number" {...register("userId")} required 
                            id="username" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            ></input>
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" >Content:</label>
                            <input type="text" {...register("content")} required 
                            id="emailAddress" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            ></input>
                        </div>

                        <div>
                            <input type="submit" value="Crear Post" 
                            class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            ></input> 
                        </div>
                    
                    </div>

                </form>

            </div>

        </section>
        
    )
}

export default PostForm;