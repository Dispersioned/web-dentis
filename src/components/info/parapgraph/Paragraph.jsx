import { styled } from '@mui/material';
import React from 'react';

const Body = styled('div')`
  margin-top: 1.2rem;
`;

export const Paragraph = ({ children }) => {
  return <Body>{children}</Body>;
};
