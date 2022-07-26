import { Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '../../components/Layout';
import { Subtitle } from '../../components/info/subtitle';
import { BasePageTitle } from '../../shared/ui/base-page-title';
import { BaseParagraph } from '../../shared/ui/base-paragraph';

export const PaymentConditionsPageTemplate = ({ props }) => {
  const { title, subtitle, points, payMethods } = props;

  return (
    <Layout>
      <BasePageTitle text={title} />
      <Subtitle text={subtitle} />
      {points.map((point, index) => (
        <BaseParagraph key={index}>
          <Typography>
            <strong>{`${index + 1}. ${point.title}`}</strong>
          </Typography>
          <Typography>{point.text}</Typography>
        </BaseParagraph>
      ))}

      <Subtitle text="Формы оплаты" />
      {payMethods.map((method, index) => (
        <BaseParagraph key={index}>
          <Typography>{`• ${method.text}`}</Typography>
        </BaseParagraph>
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
