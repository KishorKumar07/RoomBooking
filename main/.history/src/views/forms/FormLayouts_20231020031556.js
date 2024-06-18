import React from 'react';
import { Grid } from '@mui/material';
import {
  FbDefaultForm,

} from '../../components/forms/form-layouts/index';
import PageContainer from '../../components/container/PageContainer';
import Logo from 'src/layouts/full/shared/logo/Logo';

const FormLayouts = () => (
  <PageContainer title="Create Room" description="this is innerpage">
  
    
    <Grid container spacing={3}>
    
      <Grid item lg={12} md={12} xs={12}>
        <FbDefaultForm />
      </Grid>
     
    </Grid>
  </PageContainer>
);

export default FormLayouts;
