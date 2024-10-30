import React from 'react';

const Dashboard = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem('token');

    navigate('/login');
  };
  return (
    <div className="container">
      <h1>Este es el panel principal</h1>
      {/* Mostrar información del usuario */}
      {/* ... */}
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