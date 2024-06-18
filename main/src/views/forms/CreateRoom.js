import React from 'react';
import { Grid } from '@mui/material';
import {
  FbDefaultForm,

} from '../../components/forms/form-layouts/index';
import PageContainer from '../../components/container/PageContainer';


const CreateRoom = () => (
  <PageContainer title="Create Room" description="this is innerpage">
  
    
    <Grid container spacing={3}>
    
      <Grid item lg={12} md={12} xs={12}>
        <FbDefaultForm />
      </Grid>
     
    </Grid>
  </PageContainer>
);

export default CreateRoom;