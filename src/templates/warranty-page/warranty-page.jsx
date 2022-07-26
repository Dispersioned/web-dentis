import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '../../components/Layout';
import { Subtitle } from '../../components/info/subtitle';
import { BasePageTitle } from '../../shared/ui/base-page-title';
import { BaseParagraph } from '../../shared/ui/base-paragraph';

export const WarrantyPageTemplate = ({ props }) => {
  const { title, subtitle, description, contentTitle, warrantyList } = props;

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

      {warrantyList.map(({ title, description, notes, table }, index) => (
        <BaseParagraph key={index}>
          <Typography>
            <strong>{`${index + 1}. ${title}`}</strong>
          </Typography>

          {description && description.map((data, index) => <Typography key={index}>{data.text}</Typography>)}

          {table && (
            <TableContainer style={{ margin: '1rem 0' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: 600 }}>№ п/п</TableCell>
                    <TableCell style={{ fontWeight: 600 }}>Наименование</TableCell>
                    <TableCell style={{ fontWeight: 600 }}>Срок гарантии</TableCell>
                    <TableCell style={{ fontWeight: 600 }}>Срок службы</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {table.map((cellData, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{cellData.title}</TableCell>
                      <TableCell>{cellData.warrantyTime}</TableCell>
                      <TableCell>{cellData.lifeTime}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {notes && (
            <BaseParagraph>
              <Typography fontWeight={600}>Примечания:</Typography>
              {notes.map((note, index) => (
                <React.Fragment key={index}>
                  <Typography>
                    <strong>{index + 1}.</strong> {note.text}
                  </Typography>
                  {note.sublist &&
                    note.sublist.map((item, noteIndex) => <Typography key={noteIndex}>- {item.text}</Typography>)}
                </React.Fragment>
              ))}
            </BaseParagraph>
          )}
        </BaseParagraph>
      ))}
    </Layout>
  );
};

const WarrantyPage = ({ data }) => {
  console.log(data);
  return <WarrantyPageTemplate props={data.markdownRemark.frontmatter} />;
};

export default WarrantyPage;

export const query = graphql`
  query WarrantyPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "warranty-page" } }) {
      frontmatter {
        title
        subtitle
        contentTitle
        description {
          text
        }
        warrantyList {
          title
          notes {
            text
            sublist {
              text
            }
          }
          table {
            title
            warrantyTime
            lifeTime
          }
          description {
            text
          }
        }
      }
    }
  }
`;
