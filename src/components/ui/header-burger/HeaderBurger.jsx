import React from 'react';

import { Body } from './style';

const HeaderBurger = ({ active, ...rest }) => {
  return (
    <Body active={active} {...rest}>
      <span />
    </Body>
  );
};

export default HeaderBurger;
