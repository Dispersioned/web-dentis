import { Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '../../components/Layout';
import { BasePageTitle } from '../../shared/ui/base-page-title';
import { BaseParagraph } from '../../shared/ui/base-paragraph';
import { BaseSubtitle } from '../../shared/ui/base-subtitle';

export const PaymentConditionsPageTemplate = ({ data, location }) => {
  const { title, subtitle, points, payMethods } = data;

  return (
    <Layout location={location}>
      <BasePageTitle text={title} />
      <BaseSubtitle text={subtitle} />
      {points.map((point, index) => (
        <BaseParagraph key={index}>
          <Typography>
            <strong>{`${index + 1}. ${point.title}`}</strong>
          </Typography>
          <Typography>{point.text}</Typography>
        </BaseParagraph>
      ))}

      <BaseSubtitle text="Формы оплаты" />
      {payMethods.map((method, index) => (
        <BaseParagraph key={index}>
          <Typography>{`• ${method.text}`}</Typography>
        </BaseParagraph>
      ))}
    </Layout>
  );
};

const PaymentConditionsPage = ({ data, location }) => {
  console.log(data);
  return <PaymentConditionsPageTemplate data={data.markdownRemark.frontmatter} location={location} />;
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
