import { Breadcrumbs } from '@mui/material';
import { Link } from 'gatsby';
import React from 'react';

import { Layout } from '../../components/Layout';
import { ROUTES } from '../../config';
import { BasePageTitle } from '../../shared/ui/base-page-title';
import { Block, Content } from '../../styles/info/style.js';

const InfoIndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <BasePageTitle text="Клиентам" />
      <Content>
        {ROUTES.find((route) => route.text === 'Клиентам').subroutes.map((subroute) => (
          <Block key={subroute.text} variant="contained" component={Link} to={`./${subroute.to}`}>
            {subroute.text}
          </Block>
        ))}
      </Content>
    </Layout>
  );
};

export default InfoIndexPage;
