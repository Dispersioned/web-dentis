import { Typography } from '@mui/material';
import { Link } from 'gatsby';
import React from 'react';

import logoIcon from '../../../img/dentis/logo.svg';
import { Content, Logo, NavLink, NavLinks, Wrapper } from './style';

const Header = (props) => {
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
        <nav>
          <NavLinks>
            {navLinks.map((data) => (
              <li key={data.text}>
                <NavLink to={data.to} activeClassName="active">
                  <Typography>{data.text}</Typography>
                </NavLink>
              </li>
            ))}
          </NavLinks>
        </nav>
      </Content>
    </Wrapper>
  );
};

// <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
//   <div className="container">
//     <div className="navbar-brand">
//       {/* <Link to="/" className="navbar-item" title="Logo">
//         <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
//       </Link> */}
//       {/* Hamburger menu */}
//       <div
//         className={`navbar-burger burger ${this.state.navBarActiveClass}`}
//         data-target="navMenu"
//         role="menuitem"
//         tabIndex={0}
//         onKeyPress={() => this.toggleHamburger()}
//         onClick={() => this.toggleHamburger()}
//       >
//         <span />
//         <span />
//         <span />
//       </div>
//     </div>
//     <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
//       <div className="navbar-start has-text-centered">
//         <Link className="navbar-item" to="/about">
//           About
//         </Link>
//         <Link className="navbar-item" to="/products">
//           Products
//         </Link>
//         <Link className="navbar-item" to="/blog">
//           Blog
//         </Link>
//         <Link className="navbar-item" to="/contact">
//           Contact
//         </Link>
//         <Link className="navbar-item" to="/contact/examples">
//           Form Examples
//         </Link>
//       </div>
//       <div className="navbar-end has-text-centered">
//         <a
//           className="navbar-item"
//           href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {/* <span className="icon">
//             <img src={github} alt="Github" />
//           </span> */}
//         </a>
//       </div>
//     </div>
//   </div>
// </nav>

//   constructor(props) {
//     super(props);
//     this.state = {
//       active: false,
//       navBarActiveClass: '',
//     };
//   }

//   toggleHamburger() {
//     // toggle the active boolean in the state
//     this.setState(
//       {
//         active: !this.state.active,
//       },
//       // after state has been updated,
//       () => {
//         // set the class in state for the navbar accordingly
//         this.state.active
//           ? this.setState({
//               navBarActiveClass: 'is-active',
//             })
//           : this.setState({
//               navBarActiveClass: '',
//             });
//       },
//     );
//   }

export default Header;
