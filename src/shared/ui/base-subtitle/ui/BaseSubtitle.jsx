import { Typography } from '@mui/material';
import React from 'react';

export const BaseSubtitle = ({ text }) => {
  return (
    <Typography variant="h5" fontWeight={600} style={{ margin: '1.2rem 0' }}>
      {text}
    </Typography>
  );
};
