import { Button, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'gatsby';
import React from 'react';

import Layout from '../../components/Layout';
import { Block, Content } from './style';

const InfoIndexPage = () => {
  const blocks = [
    { text: 'Органы контроля', link: './inspection' },
    { text: 'Условия оплаты', link: './payment-conditions' },
    { text: 'Правила оказания услуг', link: './code-of-service' },
    { text: 'Бесплатная помощь', link: './free-help' },
    { text: 'Гарантии', link: './guaranty' },
    { text: 'Внутренний порядок', link: './in-order' },
    { text: 'Полис ДМС', link: './dms' },
    { text: 'Лицензии', link: './licenses' },
    { text: 'Вакансии', link: './career' },
  ];

  return (
    <Layout>
      <Typography component="h1" variant="h2" style={{ padding: '1rem 0' }}>
        Клиентам
      </Typography>
      <Content>
        {blocks.map((block) => (
          <Block key={block.text} variant="contained" component={Link} to={block.link}>
            {block.text}
          </Block>
        ))}
      </Content>
    </Layout>
  );
};

export default InfoIndexPage;
