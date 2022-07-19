import { Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React, { useState } from 'react';

import Layout from '../../components/Layout';
import Paragraph from '../../components/info/parapgraph/Paragraph';
import Subtitle from '../../components/info/subtitle/Subtitle';
import PageTitle from '../../components/ui/page-title/PageTitle';

export const FreeHelpPageTemplate = ({ data }) => {
  console.log(data);
  const { title, subtitle, description, subsubtitle, freeHelpClinics } = data;

  return (
    <Layout>
      <PageTitle text={title} />
      <Subtitle text={subtitle} />
      <Paragraph>
        <Typography>{description}</Typography>
      </Paragraph>

      <Paragraph>
        <Typography variant="h5" fontWeight="bold">
          {subsubtitle}
        </Typography>
      </Paragraph>

      {freeHelpClinics.map((clinic, index) => (
        <Paragraph key={index}>
          <Typography>
            <strong>{`${index + 1}. ${clinic.title}`}</strong>
          </Typography>
          <Typography>{clinic.address}</Typography>
          <Typography>{clinic.phone}</Typography>
        </Paragraph>
      ))}
    </Layout>
  );
};

const FreeHelpPage = ({ data }) => {
  console.log(data);
  return <FreeHelpPageTemplate data={data.markdownRemark.frontmatter} />;
};

export default FreeHelpPage;

export const query = graphql`
  query freeHelpPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "free-help-page" } }) {
      frontmatter {
        title
        subtitle
        description
        subsubtitle
        freeHelpClinics {
          title
          address
          phone
        }
      }
    }
  }
`;
