import { AppBar, Button, Collapse, styled } from '@mui/material';
import { Link } from 'gatsby';

export const Wrapper = styled(AppBar)`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 1000;
  }
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
  z-index: 1001;
  height: 60px;
  @media (max-width: 991px) {
    height: 50px;
  }
`;

export const MobileNavigation = styled('div')`
  position: fixed;
  left: 0;
  top: ${(props) => (props.active ? '0' : '-100%')};
  padding: 80px 15px 20px;
  background-color: #fff;
  width: 100%;
  height: 100vh;
  z-index: 999;
  transition: all 0.3s ease;
  overflow: auto;
`;

export const Buttons = styled('div')`
  position: relative;
  z-index: 1001;
`;

export const ContactBtn = styled(Button)`
  font-size: 20px;
`;

export const SubmitBtn = styled(Button)`
  margin-top: 1.5rem;
`;
