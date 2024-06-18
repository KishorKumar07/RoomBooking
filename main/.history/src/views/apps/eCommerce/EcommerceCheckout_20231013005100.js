import React from 'react';
import { Box } from '@mui/material';
import PageContainer from '../../../components/container/PageContainer';
import ProductChecout from 'src/components/apps/ecommerce/productCheckout/ProductCheckout';
import ChildCard from 'src/components/shared/ChildCard';

const EcommerceCheckout = () => {
  return (
    <PageContainer title="Checkout" description="this is Shop List page">
    
      <ChildCard>

        <Box sx={{
          p: {
            xs: '0', sm: '24px'
          }
        }} flexGrow={1}>
          <ProductChecout />
        </Box>
      </ChildCard>
    </PageContainer>
  );
};

export default EcommerceCheckout;
