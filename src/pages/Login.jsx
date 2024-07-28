import { useForm } from "react-hook-form";

function Login() {

    const { register, handleSubmit } = useForm();

    // Función para mandar al formulario
    const onSubmit = async (data) => {
        // Imprimir los datos antes de enviarlos
        console.log('Datos antes de enviar:', data);

        fetch('http://localhost:4000/login', {
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
            <h3>Login</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email:</label>
                    <input type="text" {...register("email")} required></input>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" {...register("password")} required></input>
                </div>
                <input type="submit" value="Ingresar"/>
            </form>
        </div>
    )
}

export default Login;