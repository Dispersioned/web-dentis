import { Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '../../components/Layout';
import romanize from '../../services/romanize';
import { BasePageTitle } from '../../shared/ui/base-page-title';
import { BaseParagraph } from '../../shared/ui/base-paragraph';
import { BaseSubtitle } from '../../shared/ui/base-subtitle';

export const DmsPageTemplate = ({ props }) => {
  const { title, subtitle, description, partners } = props;

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

const DmsPage = ({ data }) => {
  console.log(data);
  return <DmsPageTemplate props={data.markdownRemark.frontmatter} />;
};

export default DmsPage;

export const query = graphql`
  query DmsPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "dms-page" } }) {
      frontmatter {
        title
        subtitle
        description {
          text
        }
        partners {
          type
          title
          link
        }
      }
    }
  }
`;
