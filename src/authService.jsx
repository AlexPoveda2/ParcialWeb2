const authService = {
  async login(username, password) {
    const response = await fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error al iniciar sesión');
    }
  },

  async register(username, password, email, name) {
    const response = await fetch(`${apiUrl}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, email, name }),
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error al registrarse');
    }
  },
};

export default authService;