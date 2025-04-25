import api from './index';

export const sendMessage = async (message) => {
  try {
    const response = await api.post('/conversation/', { query: message });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};