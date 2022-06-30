import { Button, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'gatsby';
import React from 'react';

import Layout from '../../components/Layout';

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
      <Typography variant="h1">Клиентам</Typography>
      <Grid container spacing={3}>
        {blocks.map((block) => (
          <Grid item xs={4}>
            <Button component={Link} to={block.link}>
              <Typography>{block.text}</Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default InfoIndexPage;
