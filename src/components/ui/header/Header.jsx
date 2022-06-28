import { Button, Collapse, Typography } from '@mui/material';
import { Link } from 'gatsby';
import React, { useState } from 'react';

import { useWindowSize } from '../../../hooks/useWindowSize';
import logoIcon from '../../../img/dentis/logo.svg';
import HeaderBurger from '../header-burger/HeaderBurger';
import HeaderNavigation from '../header-navigation/HeaderNavigation';
import { Content, Logo, MobileNavigation, Wrapper } from './style';

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
  console.log(size);

  return (
    <Wrapper position="sticky" top={0}>
      <Content>
        <Link to="/">
          <Logo src={logoIcon} alt="logo" />
        </Link>
        {size.width >= 1400 ? (
          <>
            <HeaderNavigation items={navLinks} />
            <div>
              <Button variant="text" href="tel:+79385058423">
                <Typography fontSize={20}>+7 (938) 505 84 23</Typography>
              </Button>
              ]
              <Button variant="contained">
                <Typography fontSize={20} fontWeight="bold">
                  Записаться
                </Typography>
              </Button>
            </div>
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
