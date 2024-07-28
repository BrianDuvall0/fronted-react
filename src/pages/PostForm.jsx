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
        <div>
            <h3>Post Form</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>UserID</label>
                    <input type="number" {...register("userId")} required></input>
                </div>
                <div>
                    <label>Content:</label>
                    <input type="text" {...register("content")} required></input>
                </div>
                <input type="submit" value="Crear Post"/>
            </form>
        </div>
    )
}

export default PostForm;