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

export const NavLinks = styled('ul')`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 15px;
`;

export const NavLink = styled(Link)`
  position: relative;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 10px;
  color: ${(props) => props.theme.palette.primary.dark};
  text-transform: uppercase;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 1px;
    background-color: ${(props) => props.theme.palette.primary.dark};
    transition: all 0.3s ease;
  }

  @media (min-width: 991px) {
    &:hover {
      &:not(.active)::before {
        width: 100%;
      }
    }
  }

  &.active {
    color: #fff;
    background-color: ${(props) => props.theme.palette.primary.main};
  }
`;
