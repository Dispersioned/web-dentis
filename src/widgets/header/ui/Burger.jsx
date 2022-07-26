import React from 'react';

import { Body } from '../styles/Burger';

export const Burger = ({ active, onClick }) => {
  return (
    <Body active={active} onClick={onClick}>
      <span />
    </Body>
  );
};
