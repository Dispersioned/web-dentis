import { Typography } from '@mui/material';
import React from 'react';

export const BasePageTitle = ({ text }) => {
  return (
    <Typography component="h1" variant="h2" style={{ margin: '1.5rem 0' }}>
      {text}
    </Typography>
  );
};
