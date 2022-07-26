import { Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React, { useState } from 'react';

import { Layout } from '../../components/Layout';
import { Subtitle } from '../../components/info/subtitle';
import { BasePageTitle } from '../../shared/ui/base-page-title';
import { BaseParagraph } from '../../shared/ui/base-paragraph';

export const FreeHelpPageTemplate = ({ data }) => {
  console.log(data);
  const { title, subtitle, description, contentTitle, freeHelpClinics } = data;

  return (
    <Layout>
      <BasePageTitle text={title} />
      <Subtitle text={subtitle} />
      {description.map((data, index) => (
        <BaseParagraph key={index}>
          <Typography>{data.text}</Typography>
        </BaseParagraph>
      ))}
      <Subtitle text={contentTitle} />

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
