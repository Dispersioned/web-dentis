import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  );
  return site.siteMetadata;
};
