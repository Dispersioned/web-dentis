import { TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';

const Head = ({ items }) => {
  return (
    <TableHead>
      <TableRow>
        {items.map((item) => (
          <TableCell key={item}>
            <Typography variant="h6" fontWeight={600}>
              {item}
            </Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default Head;
