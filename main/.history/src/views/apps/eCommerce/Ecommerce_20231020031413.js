import React from 'react';
import { Box } from '@mui/material';
import PageContainer from '../../../components/container/PageContainer';
import RoomList from 'src/components/apps/ecommerce/productGrid/RoomList';
import AppCard from 'src/components/shared/AppCard';
import Logo from 'src/layouts/full/shared/logo/Logo';

const Ecommerce = () => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = React.useState(true);
  return (
    <PageContainer title="All Rooms" description="this is Shop List page"> 
      <AppCard>  
        <Box p={3} flexGrow={1}>
          <RoomList onClick={() => setMobileSidebarOpen(!isMobileSidebarOpen)} />
        </Box>
      </AppCard>
    </PageContainer>
  );
};

export default Ecommerce;
