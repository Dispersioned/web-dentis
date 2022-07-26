import { Container, ThemeProvider } from '@mui/material';
import { withPrefix } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import '../../../styles/reset.css';
import { theme } from '../../../styles/theme';
import { Footer } from '../../../widgets/footer';
import { Header } from '../../../widgets/header';
import useSiteMetadata from '../../SiteMetadata';

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix('/')}img/dentis/favicon/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${withPrefix('/')}img/dentis/favicon/favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${withPrefix('/')}img/dentis/favicon/favicon-16x16.png`}
          />
          <link rel="manifest" href={`${withPrefix('/')}img/dentis/favicon/site.webmanifest`} />
          <link rel="mask-icon" href={`${withPrefix('/')}img/dentis/favicon/safari-pinned-tab.svg`} color="#1c7d72" />
          <meta name="msapplication-TileColor" content="#ffc40d" />
          <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
          <meta name="theme-color" content="#ffffff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
        </Helmet>
        <Header />
        <Container maxWidth="lg">{children}</Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
