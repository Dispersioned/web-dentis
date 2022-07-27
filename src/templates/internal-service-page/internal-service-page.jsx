import { Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '../../components/Layout';
import romanize from '../../services/romanize';
import { BasePageTitle } from '../../shared/ui/base-page-title';
import { BaseParagraph } from '../../shared/ui/base-paragraph';
import { BaseSubtitle } from '../../shared/ui/base-subtitle';

export const InternalServicePageTemplate = ({ props }) => {
  const { title, subtitle, description, internalOrderList } = props;

  return (
    <Layout>
      <BasePageTitle text={title} />
      <BaseSubtitle text={subtitle} />
      {description.map((data, index) => (
        <BaseParagraph key={index}>
          <Typography>{data.text}</Typography>
        </BaseParagraph>
      ))}
      {internalOrderList.map((item, index) => (
        <BaseParagraph key={index}>
          <Typography fontWeight="bold" variant="h6" textTransform="uppercase">{`${romanize(index + 1)}. ${
            item.title
          }`}</Typography>
          {item.description &&
            item.description.map((data, innerIndex) => <Typography key={innerIndex}>{data.text}</Typography>)}
          {item.points &&
            item.points.map((point, innerIndex) => (
              <Typography key={innerIndex}>
                <strong>
                  {index + 1}.{innerIndex + 1}.
                </strong>{' '}
                {point.text}
              </Typography>
            ))}
        </BaseParagraph>
      ))}
    </Layout>
  );
};

const InternalServicePage = ({ data }) => {
  console.log(data);
  return <InternalServicePageTemplate props={data.markdownRemark.frontmatter} />;
};

export default InternalServicePage;

export const query = graphql`
  query InternalServicePageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "internal-service-page" } }) {
      frontmatter {
        title
        subtitle
        description {
          text
        }
        internalOrderList {
          title
          points {
            text
          }
          description {
            text
          }
        }
      }
    }
  }
`;
