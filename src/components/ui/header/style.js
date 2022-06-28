import { AppBar, Collapse, styled } from '@mui/material';
import { Link } from 'gatsby';

export const Wrapper = styled(AppBar)`
  background-color: #fff;
`;

export const Content = styled('div')`
  display: grid;
  grid-template-columns: fit-content(100%) 1fr fit-content(100%);
  grid-gap: 10px;
  align-items: center;
  padding: 10px 15px;
`;

export const Logo = styled('img')`
  position: relative;
  z-index: 1000;
  height: 60px;
  width: 180px;
`;

export const MobileNavigation = styled(Collapse)`
  position: fixed;
  left: 0;
  top: 0;
  background-color: #fff;
  width: 100%;
  height: 100%;
  z-index: 999;
`;
