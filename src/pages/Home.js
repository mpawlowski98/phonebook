import React from 'react';
import { Typography, Box } from '@mui/material';

export const HomePage = () => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h2" component="h2">
        Contacts manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          📖
        </span>
      </Typography>
    </Box>
  );
};
