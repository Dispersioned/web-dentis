import { TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';

const Body = ({ items }) => {
  console.log(items);
  return (
    <TableBody>
      {items.map((item) => (
        <TableRow key={item.code} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell>
            <Typography>{item.code}</Typography>
          </TableCell>
          <TableCell>
            <Typography>{item.name}</Typography>
          </TableCell>
          <TableCell>
            <Typography>{item.price}</Typography>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default Body;
