import React, { useState } from 'react';
import './styles/Login.css';
import './styles/CreatePostForm.css';
import CreatePostForm from './CreatePostForm'; // Importa el componente CreatePostForm

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar el inicio de sesión
  const [welcomeMessage, setWelcomeMessage] = useState(''); // Estado para el mensaje de bienvenida

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'equipo@gmail.com' && password === '123') {
      setIsLoggedIn(true); // Establece el estado de inicio de sesión a true si las credenciales son correctas
      setWelcomeMessage(`Bienvenido, ${username}!`); // Establece el mensaje de bienvenida
      onLogin(); // Llama a la función de callback para indicar que el usuario ha iniciado sesión
      setError(''); // Limpia cualquier mensaje de error previo
    } else {
      setError('Acceso denegado. Usuario o contraseña incorrectos.');
    }
  };

  // Renderiza el componente CreatePostForm si el usuario ha iniciado sesión
  return (
    <div className="login-container">
      {isLoggedIn ? (
        <>
          <p className="welcome-message">{welcomeMessage}</p> {/* Muestra el mensaje de bienvenida */}
          <CreatePostForm />
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      )}
    </div>
  );
}

export default Login;
