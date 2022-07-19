import { Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '../../components/Layout';
import { Paragraph } from '../../components/info/parapgraph';
import { Subtitle } from '../../components/info/subtitle';
import { PageTitle } from '../../components/ui/page-title';

export const WarrantyPageTemplate = ({ props }) => {
  const { title, subtitle, points, payMethods } = props;

  return (
    <Layout>
      <PageTitle text={title} />
      <Subtitle text={subtitle} />
      {points.map((point, index) => (
        <Paragraph key={index}>
          <Typography>
            <strong>{`${index + 1}. ${point.title}`}</strong>
          </Typography>
          <Typography>{point.text}</Typography>
        </Paragraph>
      ))}

      <Subtitle text="Формы оплаты" />
      {payMethods.map((method, index) => (
        <Paragraph key={index}>
          <Typography>{`• ${method.text}`}</Typography>
        </Paragraph>
      ))}
    </Layout>
  );
};

const WarrantyPage = ({ data }) => {
  console.log(data);
  return <WarrantyPageTemplate props={data.markdownRemark.frontmatter} />;
};

export default WarrantyPage;

export const query = graphql`
  query WarrantyPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "warranty-page" } }) {
      frontmatter {
        title
        subtitle
        points {
          title
          text
        }
        payMethods {
          text
        }
      }
    }
  }
`;
