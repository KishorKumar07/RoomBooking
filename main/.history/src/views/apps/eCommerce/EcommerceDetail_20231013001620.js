import { Grid } from '@mui/material';
import ProductCarousel from 'src/components/apps/ecommerce/productDetail/RoomCarousel';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ProductDetail from 'src/components/apps/ecommerce/productDetail/RoomDetails';
import ProductDesc from 'src/components/apps/ecommerce/productDetail/ProductDesc';
import ProductRelated from 'src/components/apps/ecommerce/productDetail/ProductRelated';
import ChildCard from 'src/components/shared/ChildCard';
import RoomDetails from 'src/components/apps/ecommerce/productDetail/RoomDetails';
import RoomCarousel from 'src/components/apps/ecommerce/productDetail/RoomCarousel';



const EcommerceDetail = () => {
  return (
    <PageContainer title="Shop List" description="this is Shop List page">
      {/* breadcrumb */}
     
      <Grid container spacing={3} sx={{ maxWidth: { lg: '1055px', xl: '1200px' } ,marginTop:"0px"}}>
        <Grid item xs={12} sm={12} lg={12}>
          <ChildCard>
            {/* ------------------------------------------- */}
            {/* Carousel */}
            {/* ------------------------------------------- */}
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
          <ProductDesc />
        </Grid>
       
      </Grid>
    </PageContainer>
  );
};

export default EcommerceDetail;
