import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography } from '@mui/material';

const AuthForm = ({ onSubmit, isRegister = false }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
      {isRegister && (
        <>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            {...register('email', { required: 'Email is required' })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Age"
            type="number"
            {...register('age')}
          />
        </>
      )}
      <TextField
        fullWidth
        margin="normal"
        label="Username"
        {...register('username', { required: 'Username is required' })}
        error={!!errors.username}
        helperText={errors.username?.message}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        {...register('password', { required: 'Password is required' })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        {isRegister ? 'Register' : 'Login'}
      </Button>
    </Box>
  );
};

export default AuthForm;