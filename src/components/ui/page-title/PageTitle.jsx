import { Typography } from '@mui/material';
import React from 'react';

const PageTitle = ({ title }) => {
  return (
    <Typography component="h1" variant="h2" style={{ padding: '1rem 0' }}>
      {title}
    </Typography>
  );
};

export default PageTitle;
