import api from './index';

export const register = async (userData) => {
  try {
    const response = await api.post('/register/', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (credentials) => {
  try {
    const formData = new FormData();
    formData.append('username', credentials.username);
    formData.append('password', credentials.password);
    
    const response = await api.post('/token', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    // Store the token in localStorage
    localStorage.setItem('access_token', response.data.access_token);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = () => {
  localStorage.removeItem('access_token');
};