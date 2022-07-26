import { Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '../../components/Layout';
import { Paragraph } from '../../components/info/parapgraph';
import { Subtitle } from '../../components/info/subtitle';
import { PageTitle } from '../../components/ui/page-title';

const InspectionPageTemplate = ({ data }) => {
  const { title, subtitle, controlAuthorities } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <PageTitle text={title} />
      <Subtitle text={subtitle} />
      {controlAuthorities.map((item, index) => (
        <Paragraph key={index}>
          <Typography style={{ fontWeight: 600 }}>{item.name}</Typography>
          <Typography>{item.address}</Typography>
          <Typography>{item.phone}</Typography>
        </Paragraph>
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
