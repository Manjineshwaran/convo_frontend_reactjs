import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import AuthForm from '../components/AuthForm';
import { register } from '../api/auth';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (userData) => {
    try {
      await register(userData);
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      alert(`Registration failed: ${error.detail || 'Unknown error'}`);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <AuthForm onSubmit={handleRegister} isRegister={true} />
    </Box>
  );
};

export default Register;