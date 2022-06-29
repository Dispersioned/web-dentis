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

export const NavLink = styled(Link)`
  position: relative;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 10px;
  color: ${(props) => props.theme.palette.primary.dark};
  text-transform: uppercase;

  @media (max-width: 1400px) {
    p {
      font-size: 25px;
    }
  }

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
