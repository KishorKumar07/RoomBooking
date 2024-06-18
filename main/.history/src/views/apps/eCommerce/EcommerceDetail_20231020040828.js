import { Grid } from '@mui/material';
import PageContainer from '../../../components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import RoomDetails from 'src/components/apps/ecommerce/productDetail/RoomDetails';
import RoomCarousel from 'src/components/apps/ecommerce/productDetail/RoomCarousel';
import RoomDesc from 'src/components/apps/ecommerce/productDetail/RoomDesc';


const EcommerceDetail = () => {
  return (
    <PageContainer title="Room Details" description="this is Shop List page"> 
      <Grid container spacing={3} sx={{ maxWidth: { lg: '1055px', xl: '1200px' } ,marginTop:"0px"}}>
        <Grid item xs={12} sm={12} lg={12}>
          <ChildCard>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} lg={12}>
                <RoomCarousel />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <RoomDetails />
              </Grid>
            </Grid>
          </ChildCard>
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <RoomDesc />
        </Grid>
       
      </Grid>
    </PageContainer>
  );
};

export default EcommerceDetail;
