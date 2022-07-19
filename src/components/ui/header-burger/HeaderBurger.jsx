import React from 'react';

import { Body } from './style';

export const HeaderBurger = ({ active, onClick }) => {
  return (
    <Body active={active} onClick={onClick}>
      <span />
    </Body>
  );
};
