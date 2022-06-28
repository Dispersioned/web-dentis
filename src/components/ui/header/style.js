import { AppBar, styled } from '@mui/material';
import { Link } from 'gatsby';

export const Wrapper = styled(AppBar)`
  background-color: #fff;
`;

export const Content = styled('div')`
  display: grid;
  grid-template-columns: fit-content(100%) fit-content(100%);
  align-items: center;
  padding: 10px 15px;
`;

export const Logo = styled('img')`
  height: 60px;
`;
