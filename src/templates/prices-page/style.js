import { AccordionDetails, AccordionSummary, Typography, styled } from '@mui/material';

export const Summary = styled(AccordionSummary)`
  background-color: ${(props) => props.theme.palette.primary.main};
`;

export const Heading = styled(Typography)`
  font-weight: 600;
  color: #fff;
`;

export const Details = styled(AccordionDetails)`
  padding: 0;
`;
