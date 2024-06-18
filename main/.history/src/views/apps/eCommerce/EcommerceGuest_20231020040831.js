import React from 'react';
import { Box } from '@mui/material';
import PageContainer from '../../../components/container/PageContainer';
import AppCard from 'src/components/shared/AppCard';
import RoomListGuest from 'src/components/apps/ecommerce/productGrid/RoomListGuest';
import Logo from 'src/layouts/full/shared/logo/Logo'
const EcommerceGuest = () => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = React.useState(true);
  return (
    <PageContainer title="Explore Rooms">
      <AppCard>
        <Box p={3} flexGrow={1}>
          <RoomListGuest onClick={() => setMobileSidebarOpen(!isMobileSidebarOpen)} />
        </Box>
      </AppCard>
    </PageContainer>
  );
};

export default EcommerceGuest;
