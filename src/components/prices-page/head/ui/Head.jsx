import { TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';

export const Head = ({ items }) => {
  return (
    <TableHead>
      <TableRow>
        {items.map((item, index) => (
          <TableCell key={index}>
            <Typography variant="h6" fontWeight={600}>
              {item}
            </Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
