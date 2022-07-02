import { Typography } from '@mui/material';
import React from 'react';

const PageTitle = ({ text }) => {
  return (
    <Typography component="h1" variant="h2" style={{ margin: '1.5rem 0' }}>
      {text}
    </Typography>
  );
};

export default PageTitle;
