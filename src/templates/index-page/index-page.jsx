import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '../../components/Layout';

export const IndexPageTemplate = () => {
  return <div>text</div>;
};

const IndexPage = ({ data, location }) => {
  // const { frontmatter } = data.markdownRemark;

  return (
    <Layout location={location}>
      <IndexPageTemplate />
    </Layout>
  );
};

export default IndexPage;

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       frontmatter {
//         title
//         image {
//           childImageSharp {
//             gatsbyImageData(quality: 100, layout: FULL_WIDTH)
//           }
//         }
//         heading
//         subheading
//         mainpitch {
//           title
//           description
//         }
//         description
//         intro {
//           blurbs {
//             image {
//               childImageSharp {
//                 gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
//               }
//             }
//             text
//           }
//           heading
//           description
//         }
//       }
//     }
//   }
// `;
