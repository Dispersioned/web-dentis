import { Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '../../components/Layout';
import { BasePageTitle } from '../../shared/ui/base-page-title';
import { BaseParagraph } from '../../shared/ui/base-paragraph';
import { BaseSubtitle } from '../../shared/ui/base-subtitle';

export const LicensePageTemplate = ({ props }) => {
  const { title, subtitle, description } = props;

  return (
    <Layout>
      <BasePageTitle text={title} />
      <BaseSubtitle text={subtitle} />
      {description.map((data, index) => (
        <BaseParagraph key={index}>
          <Typography>{data.text}</Typography>
        </BaseParagraph>
      ))}
      text
    </Layout>
  );
};

const LicensePage = ({ data }) => {
  console.log(data);
  return <LicensePageTemplate props={data.markdownRemark.frontmatter} />;
};

export default LicensePage;

export const query = graphql`
  query LicensePageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "license-page" } }) {
      frontmatter {
        title
        subtitle
        description {
          text
        }
      }
    }
  }
`;
