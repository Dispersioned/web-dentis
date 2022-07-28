import { ImageList, ImageListItem, Typography } from '@mui/material';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { Layout } from '../../components/Layout';
import { useWindowSize } from '../../hooks/useWindowSize';
import { BasePageTitle } from '../../shared/ui/base-page-title';
import { BaseParagraph } from '../../shared/ui/base-paragraph';
import { BaseSubtitle } from '../../shared/ui/base-subtitle';

export const LicensePageTemplate = ({ props }) => {
  const { title, subtitle, description, worksAndServices, license } = props;
  const size = useWindowSize();

  return (
    <Layout>
      <BasePageTitle text={title} />
      <BaseSubtitle text={subtitle} />
      {description.map((data, index) => (
        <BaseParagraph key={index}>
          <Typography>{data.text}</Typography>
        </BaseParagraph>
      ))}
      <BaseSubtitle text={worksAndServices.title} />
      {worksAndServices.list && (
        <BaseParagraph>
          {worksAndServices.list.map((item, index) => (
            <Typography key={index}>- {item.text}</Typography>
          ))}
        </BaseParagraph>
      )}

      {license && (
        <BaseParagraph>
          <ImageList cols={size.width >= 700 ? 3 : size.width >= 450 ? 2 : 1} gap={20}>
            {license.map(({ photo }) => {
              const image = getImage(photo.childImageSharp.gatsbyImageData);
              return (
                <ImageListItem key={photo.publicURL}>
                  <GatsbyImage image={image} alt="Лицензия" />
                </ImageListItem>
              );
            })}
          </ImageList>
        </BaseParagraph>
      )}
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
        worksAndServices {
          title
          list {
            text
          }
        }
        license {
          photo {
            publicURL
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
