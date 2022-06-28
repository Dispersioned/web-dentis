import { Button, Collapse, Typography } from '@mui/material';
import { Link } from 'gatsby';
import React, { useState } from 'react';

import { useWindowSize } from '../../../hooks/useWindowSize';
import logoIcon from '../../../img/dentis/logo.svg';
import HeaderBurger from '../header-burger/HeaderBurger';
import HeaderNavigation from '../header-navigation/HeaderNavigation';
import { Buttons, ContactBtn, Content, Logo, MobileNavigation, Wrapper } from './style';

const Header = () => {
  const navLinks = [
    { text: 'О нас', to: '/about-us' },
    { text: 'Наши врачи', to: '/specialists' },
    { text: 'Услуги и цены', to: '/prices' },
    { text: 'Акции', to: '/offers' },
    { text: 'Фотогалерея', to: '/photos' },
    { text: 'Документы', to: '/documents' },
  ];

  const [isActive, setIsActive] = useState(false);
  const size = useWindowSize();

  return (
    <Wrapper position="sticky" top={0}>
      <Content>
        <Link to="/">
          <Logo src={logoIcon} alt="logo" />
        </Link>
        {size.width >= 1400 ? (
          <>
            <HeaderNavigation items={navLinks} />
            <Buttons>
              <ContactBtn variant="text" href="tel:+79385058423">
                +7 (938) 505 84 23
              </ContactBtn>
              ]
              <ContactBtn onClick={() => setIsFormOpen(true)} variant="contained">
                Записаться
              </ContactBtn>
            </Buttons>
          </>
        ) : (
          <>
            <HeaderBurger active={isActive} onClick={() => setIsActive(!isActive)} />
            <MobileNavigation active={isActive}>
              <HeaderNavigation items={navLinks} />
            </MobileNavigation>
          </>
        )}
      </Content>
    </Wrapper>
  );
};

export default Header;
