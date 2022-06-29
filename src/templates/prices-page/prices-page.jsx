import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../../components/Layout';
import Body from '../../components/prices-page/body/Body';
import Head from '../../components/prices-page/head/Head';
import { Details, Heading, Summary } from './style';

const NotFoundPage = ({ data }) => {
  const pricelist = data.markdownRemark.frontmatter.pricelist;

  return (
    <Layout>
      {pricelist.map((service) => (
        <Accordion key={service.title}>
          <Summary expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}>
            <Heading variant="h5">{service.title}</Heading>
          </Summary>
          <Details>
            <Table>
              <colgroup>
                <col width="25%" />
                <col width="55%" />
                <col width="auto" />
              </colgroup>
              <Head items={['Код услуги', 'Перечень услуг', 'Цена, руб.']} />
              <Body items={service.positions} />
            </Table>
          </Details>
        </Accordion>
      ))}
    </Layout>
  );
};

export default NotFoundPage;

export const query = graphql`
  query pricesPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "prices-page" } }) {
      frontmatter {
        pricelist {
          positions {
            price
            name
            code
          }
          title
        }
      }
    }
  }
`;
