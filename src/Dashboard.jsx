import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Dashboard = () => {
  const navigate = useNavigate(); 
  const token = localStorage.getItem('token'); 

   const getUserInfo = async () => {
    try {
      const response = await fetch(`${apiUrl}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      if (response.ok) {
        const userData = await response.json();
         console.log('Usuario:', userData);
         } else {
            navigate('/login');
      }
    } catch (error) {
      console.error('Error al obtener información del usuario:', error);
      navigate('/login');
    }
  };

    React.useEffect(() => {
    if (token) {
      getUserInfo();
    }
  }, [token]); 

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="container">
      <h1>Este es el panel principal</h1>

      {/* Mostrar información del usuario */}
      {/* Aquí se mostraría la información del usuario obtenida */}

      <div className="sidebar">
        <button>Servicios</button>
        <button>Contacto</button>
      </div>
      <div className="content">
        <div>Panel 1</div>
        <div>Panel 2</div>
        <div>Panel 3</div>
      </div>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Dashboard;