import { Typography } from '@mui/material';
import { Link } from 'gatsby';
import React from 'react';

import { NavLinks } from './style';
import './style.css';

export const HeaderNavigation = ({ items }) => {
  return (
    <nav>
      <NavLinks>
        {items.map((data) => (
          <li key={data.text}>
            <Link
              to={data.to}
              getProps={({ isPartiallyCurrent }) =>
                isPartiallyCurrent ? { className: 'navlink active' } : { className: 'navlink' }
              }
            >
              <Typography>{data.text}</Typography>
            </Link>
          </li>
        ))}
      </NavLinks>
    </nav>
  );
};
