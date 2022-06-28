import { Typography } from '@mui/material';
import React from 'react';

import { NavLink, NavLinks } from './style';

const HeaderNavigation = ({ items }) => {
  return (
    <nav>
      <NavLinks>
        {items.map((data) => (
          <li key={data.text}>
            <NavLink to={data.to} activeClassName="active">
              <Typography>{data.text}</Typography>
            </NavLink>
          </li>
        ))}
      </NavLinks>
    </nav>
  );
};

export default HeaderNavigation;
