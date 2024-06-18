import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

// MUI Elements
import {
  Box,
  Grid,
  Typography,
  Button,
  Rating,
  Divider,
  Stack,
  useTheme,
} from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../../../store/apps/eCommerce/EcommerceSlice';
import AlertCart from '../productCart/AlertCart';

const RoomDetailsGuest = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const Id = useParams();

  // Get Product
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Get Products
  const product = useSelector((state) => state.ecommerceReducer.products[Id.id - 1]);



  // for alert when added something to cart
  const [cartalert, setCartalert] = React.useState(false);


  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setCartalert(false);
  };

  return (
    <Box p={2}>
      {product ? (
        <>
       
          <Typography fontWeight="600" variant="h4" mt={1}>
            {product.title}
          </Typography>
          <Typography variant="subtitle2" mt={1} color={theme.palette.text.secondary}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex arcu, tincidunt bibendum
            felis.
          </Typography>
      
          <Typography mt={2} variant="h4" fontWeight={600}>
            <Box
              component={'small'}
              color={theme.palette.text.secondary}
              sx={{ textDecoration: 'line-through' }}
            >
              ${product.salesPrice}
            </Box>{' '}
            ${product.price}
          </Typography>
          {/* ------------------------------------------- */}
          {/* Ratings */}
          {/* ------------------------------------------- */}
          <Stack direction={'row'} alignItems="center" gap="10px" mt={2} pb={3}>
            <Rating name="simple-controlled" size="small" value={product.rating} readOnly />
            <Link to="/" color="inherit">
              (236 reviews)
            </Link>
          </Stack>
          <Divider />
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12} lg={5} md={12}>
              <Button
                color="primary"
                size="large"
                fullWidth
                component={Link}
                variant="contained"
                
                onClick={()=>{alert('Booking Requested')}}
              >
                Request Booking
              </Button>
            </Grid>
            
          </Grid>
          <AlertCart handleClose={handleClose} openCartAlert={cartalert} />
        </>
      ) : (
        'No product'
      )}
    </Box>
  );
};

export default RoomDetailsGuest;
