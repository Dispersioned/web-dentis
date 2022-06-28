import { Link } from 'gatsby';
import React from 'react';

import logoIcon from '../../../img/dentis/logo.svg';
import Navigation from '../header-navigation/HeaderNavigation';
import { Content, Logo, Wrapper } from './style';

const Header = () => {
  const navLinks = [
    { text: 'О нас', to: '/about-us' },
    { text: 'Наши врачи', to: '/specialists' },
    { text: 'Услуги и цены', to: '/prices' },
    { text: 'Акции', to: '/offers' },
    { text: 'Фотогалерея', to: '/photos' },
    { text: 'Документы', to: '/documents' },
  ];

  return (
    <Wrapper position="sticky" top={0}>
      <Content>
        <Link to="/">
          <Logo src={logoIcon} alt="logo" />
        </Link>
        <Navigation items={navLinks} />
      </Content>
    </Wrapper>
  );
};

export default Header;
