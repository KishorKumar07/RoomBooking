import { Grid } from '@mui/material';
import ProductCarousel from 'src/components/apps/ecommerce/productDetail/ProductCarousel';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ProductDetail from 'src/components/apps/ecommerce/productDetail/RoomDetails';
import ProductDesc from 'src/components/apps/ecommerce/productDetail/ProductDesc';
import ProductRelated from 'src/components/apps/ecommerce/productDetail/ProductRelated';
import ChildCard from 'src/components/shared/ChildCard';
import RoomDetailsGuest from 'src/components/apps/ecommerce/productDetail/RoomDetailsGuest';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Shop',
    to: '/apps/ecommerce',
  },
  {
    title: 'detail',
  },
];

const EcommerceDetailGuest = () => {
  return (
    <PageContainer title="Shop List" description="this is Shop List page">
      {/* breadcrumb */}
      <Breadcrumb title="Product Detail" items={BCrumb} />
      <Grid container spacing={3} sx={{ maxWidth: { lg: '1055px', xl: '1200px' } }}>
        <Grid item xs={12} sm={12} lg={12}>
          <ChildCard>
            {/* ------------------------------------------- */}
            {/* Carousel */}
            {/* ------------------------------------------- */}
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} lg={6}>
                <ProductCarousel />
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
        <Grid item xs={12} sm={12} lg={12}>
          <ProductRelated />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default EcommerceDetailGuest;
