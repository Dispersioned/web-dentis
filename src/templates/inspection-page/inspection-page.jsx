import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../../components/Layout';
import PageTitle from '../../components/ui/page-title/PageTitle';

const InspectionPageTemplate = ({ data }) => {
  return (
    <Layout>
      <PageTitle text="Органы контроля" />
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
