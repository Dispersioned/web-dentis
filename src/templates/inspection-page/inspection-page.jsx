import { Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../../components/Layout';
import Paragraph from '../../components/info/parapgraph/Paragraph';
import Subtitle from '../../components/info/subtitle/Subtitle';
import PageTitle from '../../components/ui/page-title/PageTitle';

const InspectionPageTemplate = ({ data }) => {
  const { title, subtitle, controlAuthorities } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <PageTitle text={title} />
      <Subtitle text={subtitle} />
      {controlAuthorities.map((item) => (
        <Paragraph>
          <Typography style={{ fontWeight: 600 }}>{item.title}</Typography>
          <Typography>{item.address}</Typography>
          <Typography>{item.phone}</Typography>
        </Paragraph>
      ))}
    </Layout>
  );
};

export default InspectionPageTemplate;

export const query = graphql`
  query inspectionPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "inspection-page" } }) {
      frontmatter {
        title
        subtitle
        controlAuthorities {
          title
          address
          phone
        }
      }
    }
  }
`;
