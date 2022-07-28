import { Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React, { useState } from 'react';

import { Layout } from '../../components/Layout';
import { BasePageTitle } from '../../shared/ui/base-page-title';
import { BaseParagraph } from '../../shared/ui/base-paragraph';
import { BaseSubtitle } from '../../shared/ui/base-subtitle';

export const FreeHelpPageTemplate = ({ data, location }) => {
  console.log(data);
  const { title, subtitle, description, contentTitle, freeHelpClinics } = data;

  return (
    <Layout location={location}>
      <BasePageTitle text={title} />
      <BaseSubtitle text={subtitle} />
      {description.map((data, index) => (
        <BaseParagraph key={index}>
          <Typography>{data.text}</Typography>
        </BaseParagraph>
      ))}
      <BaseSubtitle text={contentTitle} />

      {freeHelpClinics.map((clinic, index) => (
        <BaseParagraph key={index}>
          <Typography>
            <strong>{`${index + 1}. ${clinic.title}`}</strong>
          </Typography>
          <Typography>{clinic.address}</Typography>
          <Typography>{clinic.phone}</Typography>
        </BaseParagraph>
      ))}
    </Layout>
  );
};

const FreeHelpPage = ({ data, location }) => {
  console.log(data);
  return <FreeHelpPageTemplate data={data.markdownRemark.frontmatter} location={location} />;
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
