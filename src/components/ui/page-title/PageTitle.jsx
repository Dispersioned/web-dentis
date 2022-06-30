import { Typography } from '@mui/material';
import React from 'react';

const PageTitle = ({ text }) => {
  return (
    <Typography component="h1" variant="h2" style={{ padding: '1rem 0' }}>
      {text}
    </Typography>
  );
};

export default PageTitle;
