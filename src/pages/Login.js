import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import AuthForm from '../components/AuthForm';
import { login } from '../api/auth';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      await login(credentials);
      navigate('/conversation');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <AuthForm onSubmit={handleLogin} />
    </Box>
  );
};

export default Login;