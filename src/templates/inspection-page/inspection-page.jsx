import { Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '../../components/Layout';
import { Subtitle } from '../../components/info/subtitle';
import { BasePageTitle } from '../../shared/ui/base-page-title';
import { BaseParagraph } from '../../shared/ui/base-paragraph';

const InspectionPageTemplate = ({ data }) => {
  const { title, subtitle, controlAuthorities } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <BasePageTitle text={title} />
      <Subtitle text={subtitle} />
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
