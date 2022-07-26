import { styled } from '@mui/material';
import { Link } from 'gatsby';

export const NavLinks = styled('ul')`
  position: relative;
  z-index: 1001;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  justify-content: flex-start;

  @media (max-width: 1400px) {
    justify-content: center;
    grid-gap: 10px;
    grid-auto-flow: row;
  }
`;
