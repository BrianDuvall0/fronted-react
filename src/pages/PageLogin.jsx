import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

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
        <div>
            <h3>Login</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email:</label>
                    <input type="email" {...register("email")} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" {...register("password")} required />
                </div>
                <input type="submit" value="Iniciar Sesión" />
            </form>
        </div>
    );
}

export default Login;