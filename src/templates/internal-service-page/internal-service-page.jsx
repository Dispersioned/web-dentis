import { Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '../../components/Layout';
import { BasePageTitle } from '../../shared/ui/base-page-title';
import { BaseParagraph } from '../../shared/ui/base-paragraph';
import { BaseSubtitle } from '../../shared/ui/base-subtitle';

export const InternalServicePageTemplate = ({ props }) => {
  const { title, subtitle, description, contentTitle, warrantyList } = props;

  return (
    <Layout>
      <BasePageTitle text={title} />
      <BaseSubtitle text={subtitle} />
      {description.map((data, index) => (
        <BaseParagraph key={index}>
          <Typography>{data.text}</Typography>
        </BaseParagraph>
      ))}
      <BaseSubtitle text={contentTitle} />
      text
    </Layout>
  );
};

const InternalServicePage = ({ data }) => {
  console.log(data);
  return <InternalServicePageTemplate props={data.markdownRemark.frontmatter} />;
};

export default InternalServicePage;

export const query = graphql`
  query InternalServicePageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "internal-service-page" } }) {
      frontmatter {
        title
        subtitle
        contentTitle
        description {
          text
        }
      }
    }
  }
`;
