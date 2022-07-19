import { Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React, { useState } from 'react';

import { Layout } from '../../components/Layout';
import { Paragraph } from '../../components/info/parapgraph';
import { Subtitle } from '../../components/info/subtitle';
import { PageTitle } from '../../components/ui/page-title';

export const FreeHelpPageTemplate = ({ data }) => {
  console.log(data);
  const { title, subtitle, description, contentTitle, freeHelpClinics } = data;

  return (
    <Layout>
      <PageTitle text={title} />
      <Subtitle text={subtitle} />
      {description.map((data) => (
        <Paragraph>
          <Typography>{data.text}</Typography>
        </Paragraph>
      ))}
      <Subtitle text={contentTitle} />

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
  query FreeHelpPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "free-help-page" } }) {
      frontmatter {
        title
        subtitle
        description {
          text
        }
        contentTitle
        freeHelpClinics {
          title
          address
          phone
        }
      }
    }
  }
`;
