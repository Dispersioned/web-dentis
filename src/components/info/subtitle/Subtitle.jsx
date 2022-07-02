import { Typography } from '@mui/material';
import React from 'react';

const Subtitle = ({ text }) => {
  return (
    <Typography variant="h5" fontWeight={600}>
      {text}
    </Typography>
  );
};

export default Subtitle;
