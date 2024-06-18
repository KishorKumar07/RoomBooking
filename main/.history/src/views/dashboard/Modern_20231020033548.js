import React from 'react';
import { Box, Grid } from '@mui/material';
import TopCards from '../../components/dashboards/modern/TopCards';
import ProductTableList from 'src/components/apps/ecommerce/ProductTableList/ProductTableList';
import Logo from 'src/layouts/full/shared/logo/Logo';
s
const Modern = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        {/* column */}
        <Grid item sm={12} lg={12}>
          <TopCards />
        </Grid>
        {/* column */}
        <Grid  item sm={12} lg={12}>
              <ProductTableList/>
        </Grid>
     
      </Grid>
      {/* column */}
   
    </Box>
  );
};

export default Modern;
