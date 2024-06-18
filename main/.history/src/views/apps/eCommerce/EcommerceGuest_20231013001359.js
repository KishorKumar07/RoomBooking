import React from 'react';
import { Box } from '@mui/material';

import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';

import PageContainer from '../../../components/container/PageContainer';
import ProductList from 'src/components/apps/ecommerce/productGrid/RoomList';
import ProductSidebar from 'src/components/apps/ecommerce/productGrid/RoomSidebar';
import AppCard from 'src/components/shared/AppCard';
import ProductListGuest from 'src/components/apps/ecommerce/productGrid/RoomListGuest';
import RoomListGuest from 'src/components/apps/ecommerce/productGrid/RoomListGuest';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Shop',
  },
];
const EcommerceGuest = () => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = React.useState(true);
  return (
    <PageContainer title="Shop List" description="this is Shop List page">
      <AppCard>
      
        <Box p={3} flexGrow={1}>
          <RoomListGuest onClick={() => setMobileSidebarOpen(!isMobileSidebarOpen)} />
        </Box>
      </AppCard>
    </PageContainer>
  );
};

export default EcommerceGuest;
