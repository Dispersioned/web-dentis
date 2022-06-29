import React from 'react';

import { Body } from './style';

const HeaderBurger = ({ active, onClick }) => {
  return (
    <Body active={active} onClick={onClick}>
      <span />
    </Body>
  );
};

export default HeaderBurger;
