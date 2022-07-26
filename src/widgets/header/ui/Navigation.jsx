import { Typography } from '@mui/material';
import { Link } from 'gatsby';
import React from 'react';

import { NavLinks } from '../styles/Navigation';
import * as S from '../styles/Navigation.module.css';

export const Navigation = ({ items }) => {
  return (
    <nav>
      <NavLinks>
        {items.map((data) => (
          <li key={data.text}>
            <Link
              to={data.to}
              getProps={({ isPartiallyCurrent }) =>
                isPartiallyCurrent ? { className: `${S.navlink} ${S.active}` } : { className: `${S.navlink}` }
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
