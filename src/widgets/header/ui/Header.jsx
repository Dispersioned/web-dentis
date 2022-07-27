import { Button, Typography } from '@mui/material';
import { Link } from 'gatsby';
import { useEffect, useState } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';

import { useWindowSize } from '../../../hooks/useWindowSize';
import logoIcon from '../../../img/dentis/logo.svg';
import { Buttons, ContactBtn, Content, Logo, MobileNavigation, Wrapper } from '../styles/Header';
import { Burger } from './Burger';
import { ContactForm } from './ContactForm';
import { Navigation } from './Navigation';

export const Header = () => {
  const navLinks = [
    { text: 'О нас', to: '/about-us' },
    { text: 'Врачи', to: '/specialists' },
    { text: 'Услуги', to: '/services' },
    { text: 'Цены', to: '/prices' },
    { text: 'Клиентам', to: '/info' },
    { text: 'Акции', to: '/offers' },
    { text: 'Фотогалерея', to: '/photos' },
  ];

  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isActive ? 'hidden' : 'auto';
  }, [isActive]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const size = useWindowSize();

  return (
    <Wrapper position="sticky" top={0}>
      <header>
        <Content>
          <Link to="/">
            <Logo src={logoIcon} alt="logo" />
          </Link>
          {size.width > 1400 ? (
            <>
              <Navigation items={navLinks} />
              <Buttons>
                <ContactBtn variant="text" href="tel:+79385058423">
                  +7 (938) 505 84 23
                </ContactBtn>
                <ContactBtn onClick={() => setIsFormOpen(true)} variant="contained">
                  Записаться
                </ContactBtn>
              </Buttons>
            </>
          ) : (
            <>
              <Burger active={isActive} onClick={() => setIsActive(!isActive)} />
              <MobileNavigation active={isActive}>
                <Navigation items={navLinks} />
                <Buttons>
                  <ContactBtn onClick={() => setIsFormOpen(true)} variant="contained">
                    Записаться
                  </ContactBtn>
                  <ContactBtn variant="text" href="tel:+79385058423">
                    +7 (938) 505 84 23
                  </ContactBtn>
                </Buttons>
              </MobileNavigation>
            </>
          )}
          <ContactForm open={isFormOpen} handleClose={() => setIsFormOpen(false)} />
        </Content>
      </header>
    </Wrapper>
  );
};
