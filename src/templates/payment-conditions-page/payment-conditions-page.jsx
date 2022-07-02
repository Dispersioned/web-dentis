import { Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../../components/Layout';
import Paragraph from '../../components/info/parapgraph/Paragraph';
import Subtitle from '../../components/info/subtitle/Subtitle';
import PageTitle from '../../components/ui/page-title/PageTitle';

export const PaymentConditionsPageTemplate = ({ props }) => {
  const { title, subtitle, points } = props;

  return (
    <Layout>
      <PageTitle text={title} />
      <Subtitle text={subtitle} />
      {points.map((point, index) => (
        <Paragraph key={index}>
          <Typography>{point.text}</Typography>
        </Paragraph>
      ))}
    </Layout>
  );
};

const PaymentConditionsPage = ({ data }) => {
  console.log(data);
  return <PaymentConditionsPageTemplate props={data.markdownRemark.frontmatter} />;
};

export default PaymentConditionsPage;

export const query = graphql`
  query Query {
    markdownRemark(frontmatter: { templateKey: { eq: "payment-conditions-page" } }) {
      frontmatter {
        title
        subtitle
        points {
          text
        }
      }
    }
  }
`;
