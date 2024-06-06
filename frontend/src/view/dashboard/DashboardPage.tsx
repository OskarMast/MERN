import { Card, Grid } from '@mui/material'; // Import Grid component
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import companyEnumerators from 'src/modules/dashboard/companyEnumerators';
import leadEnumerators from 'src/modules/dashboard/leadEnumerators';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import UploadToolbar from 'src/view/dashboard/UploadToolbar';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';

export default function DashboardPage(props) {
  const emptyValues = {
    lead_linkedinUrl: null,
    lead_firstName: null,
    lead_lastName: null,
    lead_email: null,
    company_linkedinUrl: null,
    company_name: null,
    company_website: null,
    company_phone: null,
  };
  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
    };
  });
  const form = useForm({
    defaultValues: initialValues,
  });
  return (
    <Grid container spacing={2}>
      {' '}
      <Grid item xs={12}>
        {' '}
        <Card>
          <MDBox pt={3} px={3}>
            <MDBox
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
              pb={3}
            >
              <MDTypography variant="h3">
                {i18n('dashboard.title')}
              </MDTypography>
              <UploadToolbar />
            </MDBox>
          </MDBox>
        </Card>
      </Grid>
      <Grid item xs={6}>
        {' '}
        <Card>
          <FormProvider {...form}>
            <MDBox pt={3} px={3} pb={3}>
              <MDBox
                display="flex"
                justifyContent="space-between"
                alignItems="flex-start"
                pb={3}
              >
                <MDTypography variant="h3">
                  {i18n('dashboard.lead')}
                </MDTypography>
              </MDBox>
              <SelectFormItem
                name={'lead_linkedinUrl'}
                label={i18n('dashboard.linkedinUrl')}
                options={leadEnumerators.linkedinUrl.map(
                  (item) => ({
                    key: item.id,
                    value: item.id,
                    label: item.value,
                  }),
                )}
                variant="standard"
              />
              <SelectFormItem
                name={'lead_firstName'}
                label={i18n('dashboard.firstName')}
                options={leadEnumerators.firstName.map(
                  (item) => ({
                    key: item.id,
                    value: item.id,
                    label: item.value,
                  }),
                )}
                variant="standard"
              />
              <SelectFormItem
                name={'lead_lastName'}
                label={i18n('dashboard.lastName')}
                options={leadEnumerators.lastName.map(
                  (item) => ({
                    key: item.id,
                    value: item.id,
                    label: item.value,
                  }),
                )}
                variant="standard"
              />
              <SelectFormItem
                name={'lead_email'}
                label={i18n('dashboard.email')}
                options={leadEnumerators.email.map(
                  (item) => ({
                    key: item.id,
                    value: item.id,
                    label: item.value,
                  }),
                )}
                variant="standard"
              />
            </MDBox>
          </FormProvider>
        </Card>
      </Grid>
      <Grid item xs={6}>
        {' '}
        <Card>
          <FormProvider {...form}>
            <MDBox pt={3} px={3} pb={3}>
              <MDBox
                display="flex"
                justifyContent="space-between"
                alignItems="flex-start"
                pb={3}
              >
                <MDTypography variant="h3">
                  {i18n('dashboard.company')}
                </MDTypography>
              </MDBox>
              <SelectFormItem
                name={'company_linkedinUrl'}
                label={i18n('dashboard.linkedinUrl')}
                options={companyEnumerators.linkedinUrl.map(
                  (item) => ({
                    key: item.id,
                    value: item.id,
                    label: item.value,
                  }),
                )}
                variant="standard"
              />
              <SelectFormItem
                name={'company_name'}
                label={i18n('dashboard.companyName')}
                options={companyEnumerators.name.map(
                  (item) => ({
                    key: item.id,
                    value: item.id,
                    label: item.value,
                  }),
                )}
                variant="standard"
              />
              <SelectFormItem
                name={'company_website'}
                label={i18n('dashboard.website')}
                options={companyEnumerators.website.map(
                  (item) => ({
                    key: item.id,
                    value: item.id,
                    label: item.value,
                  }),
                )}
                variant="standard"
              />
              <SelectFormItem
                name={'company_phone'}
                label={i18n('dashboard.phone')}
                options={companyEnumerators.phone.map(
                  (item) => ({
                    key: item.id,
                    value: item.id,
                    label: item.value,
                  }),
                )}
                variant="standard"
              />
            </MDBox>
          </FormProvider>
        </Card>
      </Grid>
    </Grid>
  );
}
