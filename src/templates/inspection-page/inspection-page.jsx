import { Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '../../components/Layout';
import { BasePageTitle } from '../../shared/ui/base-page-title';
import { BaseParagraph } from '../../shared/ui/base-paragraph';
import { BaseSubtitle } from '../../shared/ui/base-subtitle';

const InspectionPageTemplate = ({ data }) => {
  const { title, subtitle, controlAuthorities } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <BasePageTitle text={title} />
      <BaseSubtitle text={subtitle} />
      {controlAuthorities.map((item, index) => (
        <BaseParagraph key={index}>
          <Typography style={{ fontWeight: 600 }}>{item.name}</Typography>
          <Typography>{item.address}</Typography>
          <Typography>{item.phone}</Typography>
        </BaseParagraph>
      ))}
    </Layout>
  );
};

export default InspectionPageTemplate;

export const query = graphql`
  query InspectionPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "inspection-page" } }) {
      frontmatter {
        title
        subtitle
        controlAuthorities {
          name
          address
          phone
        }
      }
    }
  }
`;
