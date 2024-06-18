import { Grid } from '@mui/material';
import PageContainer from '../../../components/container/PageContainer';
import ProductDesc from 'src/components/apps/ecommerce/productDetail/ProductDesc';
import ChildCard from 'src/components/shared/ChildCard';
import RoomDetailsGuest from 'src/components/apps/ecommerce/productDetail/RoomDetailsGuest';
import RoomCarouselGuest from 'src/components/apps/ecommerce/productDetail/RoomCarousalGuest';



const EcommerceDetailGuest = () => {
  return (
    <PageContainer title="Shop List" description="this is Shop List page">
    
      <Grid container spacing={3} sx={{ maxWidth: { lg: '1055px', xl: '1200px' } }}>
        <Grid item xs={12} sm={12} lg={12}>
          <ChildCard>
  
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} lg={6}>
                <RoomCarouselGuest />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <RoomDetailsGuest />
              </Grid>
            </Grid>
          </ChildCard>
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <ProductDesc />
        </Grid>
       
      </Grid>
    </PageContainer>
  );
};

export default EcommerceDetailGuest;
