import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(null); 
    setFormErrors({}); 

    const newErrors = validateForm();
    setFormErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await authService.register(
          username,
          password,
          email,
          name
        );
        console.log('Registro exitoso:', response);
         navigate('/login'); 
      } catch (error) {
        setErrorMessage(error.message || 'Error al registrarse');
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (username.trim() === '') {
      newErrors.username = 'El usuario es requerido';
    }
    if (password.trim() === '') {
      newErrors.password = 'La contraseña es requerida';
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Correo electrónico inválido';
    }
    if (name.trim() === '') {
      newErrors.name = 'El nombre es requerido';
    }

    return newErrors;
  };

  return (
    <div className="container">
      <h1>Registrarse</h1>
      {errorMessage && <p className="error">{errorMessage}</p>} 
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {formErrors.username && <p className="error">{formErrors.username}</p>}
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {formErrors.password && <p className="error">{formErrors.password}</p>}
        </div>
        <div>
          <label htmlFor="email">Correo:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {formErrors.email && <p className="error">{formErrors.email}</p>}
        </div>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {formErrors.name && <p className="error">{formErrors.name}</p>}
        </div>
        <button type="submit">Crear Cuenta</button>
      </form>
      <p>¿Ya tiene cuenta? <a href="/login">Iniciar sesión</a></p>
    </div>
  );
};

export default Register;