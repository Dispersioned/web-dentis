import { Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '../../components/Layout';
import { Paragraph } from '../../components/info/parapgraph';
import { Subtitle } from '../../components/info/subtitle';
import { BasePageTitle } from '../../shared/ui/base-page-title';

export const PaymentConditionsPageTemplate = ({ props }) => {
  const { title, subtitle, points, payMethods } = props;

  return (
    <Layout>
      <BasePageTitle text={title} />
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

const PaymentConditionsPage = ({ data }) => {
  console.log(data);
  return <PaymentConditionsPageTemplate props={data.markdownRemark.frontmatter} />;
};

export default PaymentConditionsPage;

export const query = graphql`
  query PaymentConditionsPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "payment-conditions-page" } }) {
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
