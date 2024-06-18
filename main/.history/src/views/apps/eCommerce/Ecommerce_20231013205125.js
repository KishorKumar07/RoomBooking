import React from 'react';
import { Box } from '@mui/material';



import PageContainer from '../../../components/container/PageContainer';
import RoomList from 'src/components/apps/ecommerce/productGrid/RoomList';
import RoomSidebar from 'src/components/apps/ecommerce/productGrid/RoomSidebar';
import AppCard from 'src/components/shared/AppCard';


const Ecommerce = () => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = React.useState(true);
  return (
    <PageContainer title="Shop List" description="this is Shop List page"> 
      <AppCard>  
        <Box p={3} flexGrow={1}>
          <RoomList onClick={() => setMobileSidebarOpen(!isMobileSidebarOpen)} />
        </Box>
       
      </AppCard>
    </PageContainer>
  );
};

export default Ecommerce;
