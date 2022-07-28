import { Breadcrumbs as MUIBreadcrumbs, Link as MUILink, Typography } from '@mui/material';
import { Link } from 'gatsby';
import React from 'react';

import { PAGE_PREFIX } from '../../../config';
import createCrumbsLinks from '../../../services/createCrumbsLinks';

export const Breadcrumbs = ({ location }) => {
  const crumbs = location.pathname.split('/').filter((crumb) => crumb !== '' && crumb !== PAGE_PREFIX);
  const isProduction = location.port === '';
  const links = createCrumbsLinks(crumbs);

  return (
    <>
      {crumbs.length >= 2 && (
        <MUIBreadcrumbs aria-label="breadcrumb" style={{ marginTop: 15 }}>
          {links.map((link, index) => {
            if (index === links.length - 1) {
              return (
                <Typography key={index} color="text.primary">
                  {link.text}
                </Typography>
              );
            }
            return (
              <MUILink
                key={index}
                component={Link}
                underline="hover"
                color="inherit"
                to={isProduction ? `/${PAGE_PREFIX}/${link.to}` : `/${link.to}`}
              >
                {link.text}
              </MUILink>
            );
          })}
        </MUIBreadcrumbs>
      )}
    </>
  );
};
