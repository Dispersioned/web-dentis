import { Link } from 'gatsby';
import React from 'react';

import { Layout } from '../../components/Layout';
import { BasePageTitle } from '../../shared/ui/base-page-title';
import { Block, Content } from '../../styles/info/style.js';

const InfoIndexPage = () => {
  const blocks = [
    { text: 'Органы контроля', link: './inspection' },
    { text: 'Условия оплаты', link: './payment-conditions' },
    { text: 'Правила оказания услуг', link: './code-of-service' },
    { text: 'Бесплатная помощь', link: './free-help' },
    { text: 'Гарантии', link: './warranty' },
    { text: 'Внутренний порядок', link: './in-order' },
    { text: 'Полис ДМС', link: './dms' },
    { text: 'Лицензии', link: './licenses' },
    { text: 'Вакансии', link: './career' },
  ];

  return (
    <Layout>
      <BasePageTitle text="Клиентам" />
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
