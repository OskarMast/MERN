import { Grid } from '@mui/material';
import { HtmlViewWrapper } from 'src/view/shared/view/HtmlView';
import { i18n } from 'src/i18n';
import Layout from 'src/view/layout/Layout';
import MDTypography from 'src/mui/components/MDTypography';
import PageContent from 'src/view/shared/view/PageContent';

function HomeViewPage(props) {
  return (
    <Layout title={i18n('entities.home.title')}>
      <PageContent>
        <Grid spacing={2} container>
          <Grid xs={12} item>
            <MDTypography variant="h1">
              {i18n('entities.home.title')}
            </MDTypography>
            <MDTypography variant="h2" my={2}>
              {i18n('entities.home.subtitle')}
            </MDTypography>
            <HtmlViewWrapper>
              <p>{i18n('entities.home.description')}</p>
            </HtmlViewWrapper>
          </Grid>
        </Grid>
      </PageContent>
    </Layout>
  );
}

export default HomeViewPage;
