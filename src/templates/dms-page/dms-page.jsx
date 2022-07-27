import { Link, Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '../../components/Layout';
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
      <BaseSubtitle text="Наши партнеры:" />
      {partners.map((partner, index) => (
        <BaseParagraph key={index}>
          <Typography>
            {partner.type}{' '}
            {partner.link ? (
              <Link href={partner.link} target="_blank" fontWeight="bold" color="inherit" underline="hover">
                {partner.title}
              </Link>
            ) : (
              <Typography>{partner.title}</Typography>
            )}
          </Typography>
        </BaseParagraph>
      ))}
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
