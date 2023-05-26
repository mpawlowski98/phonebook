import React from 'react';
import { Typography, Box } from '@mui/material';

export const HomePage = () => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h1" component="h1">
        Contacts manager Welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          📖
        </span>
      </Typography>
    </Box>
  );
};
