import { Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React, { useState } from 'react';

import { Layout } from '../../components/Layout';
import alphabetRussian from '../../services/alphabetRussian';
import romanize from '../../services/romanize';
import { BasePageTitle } from '../../shared/ui/base-page-title';
import { BaseParagraph } from '../../shared/ui/base-paragraph';
import { BaseSubtitle } from '../../shared/ui/base-subtitle';

const getPointIndex = () => {
  let index = 1;

  return function () {
    return index++;
  };
};

export const CodeOfServicePageTemplate = ({ data }) => {
  const { title, subtitle, terms } = data;

  const counter = getPointIndex();

  return (
    <Layout>
      <BasePageTitle text={title} />
      <BaseSubtitle text={subtitle} />
      {terms.map((term, index) => (
        <BaseParagraph key={index}>
          <Typography variant="h6">
            <strong>{`${romanize(index + 1)}. ${term.title}`}</strong>
          </Typography>
          {term.points.map((point, pointIndex) => (
            <div key={pointIndex}>
              <Typography>{`${counter()}. ${point.text}`}</Typography>
              <div style={{ paddingLeft: 15 }}>
                {point.subpoints &&
                  point.subpoints.map((subpoint, index) => (
                    <Typography key={index}>{`${alphabetRussian(index + 1)}) ${subpoint.text}`}</Typography>
                  ))}
              </div>
            </div>
          ))}
        </BaseParagraph>
      ))}
    </Layout>
  );
};

const CodeOfServicePage = ({ data }) => {
  console.log(data);
  return <CodeOfServicePageTemplate data={data.markdownRemark.frontmatter} />;
};

export default CodeOfServicePage;

export const query = graphql`
  query CodeOfServicePageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "code-of-service-page" } }) {
      frontmatter {
        title
        subtitle
        terms {
          title
          points {
            text
            subpoints {
              text
            }
          }
        }
      }
    }
  }
`;
