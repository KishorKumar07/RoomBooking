import React from 'react';
import { Box } from '@mui/material';



import PageContainer from '../../../components/container/PageContainer';
import ProductList from 'src/components/apps/ecommerce/productGrid/ProductList';
import ProductSidebar from 'src/components/apps/ecommerce/productGrid/ProductSidebar';
import AppCard from 'src/components/shared/AppCard';


const Ecommerce = () => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = React.useState(true);
  return (
    <PageContainer title="Shop List" description="this is Shop List page">
      {/* breadcrumb */}
      
      <AppCard>
        {/* Left part */}
         <ProductSidebar
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setMobileSidebarOpen(false)}
        /> 
       <br></br>
        {/* Right part */}
        <Box p={3} flexGrow={1}>
          <ProductList onClick={() => setMobileSidebarOpen(!isMobileSidebarOpen)} />
        </Box>
      </AppCard>
    </PageContainer>
  );
};

export default Ecommerce;