import React from 'react';
import { Box } from '@mui/material';
import PageContainer from '../../../components/container/PageContainer';
import ProductChecout from 'src/components/apps/ecommerce/productCheckout/ProductCheckout';
import ChildCard from 'src/components/shared/ChildCard';
const RoomCheckout = () => {
  return (
    <PageContainer title="Checkout" description="this is Shop List page">
    
      <ChildCard>

        <Box flexGrow={1}>
          <ProductChecout />
        </Box>
      </ChildCard>
    </PageContainer>
  );
};

export default RoomCheckout;
