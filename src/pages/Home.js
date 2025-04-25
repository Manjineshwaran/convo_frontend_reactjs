import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to the FastAPI + React App
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button component={Link} to="/login" variant="contained" sx={{ mr: 2 }}>
          Login
        </Button>
        <Button component={Link} to="/register" variant="outlined">
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Home;