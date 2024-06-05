import { useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import PageLayout from 'src/mui/shared/Layouts/PageLayout';
import PropTypes from 'prop-types';

function Layout({
  title,
  keywords,
  description,
  record,
  children,
  noIndex = false,
  noArticle = false,
}) {
  return (
    <PageLayout>
      <Container>
        <Grid spacing={2} container>
          <Grid xl={9} lg={8} md={12} xs={12} item>
            {children}
          </Grid>
          <Grid xl={3} lg={4} md={12} xs={12} item></Grid>
        </Grid>
      </Container>
    </PageLayout>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  record: PropTypes.any,
  children: PropTypes.any,
  noIndex: PropTypes.bool,
  noArticle: PropTypes.bool,
};

export default Layout;
