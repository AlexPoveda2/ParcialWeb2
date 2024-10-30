import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(null); 

    try {
      const response = await authService.login(username, password);
         localStorage.setItem('token', response.token); 

       navigate('/dashboard');
    } catch (error) {
      setErrorMessage(error.message || 'Error al iniciar sesión');
    }
  };

  return (
    <div className="container">
      <h1>Iniciar sesión</h1>
      {errorMessage && <p className="error">{errorMessage}</p>} {/* Mostrar error */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      <p>¿No tiene cuenta? <a href="/register">Regístrese</a></p>
    </div>
  );
};

export default Login;