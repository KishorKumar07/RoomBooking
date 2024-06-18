import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

// MUI Elements
import {
  Box,
  Grid,
  Typography,
  Chip,
  Button,
  Rating,
  Divider,
  Stack,
  useTheme,
  Fab,
  ButtonGroup,
} from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addToCart } from '../../../../store/apps/eCommerce/EcommerceSlice';
import { IconCheck, IconMinus, IconPlus } from '@tabler/icons';
import AlertCart from '../productCart/AlertCart';

const RoomDetails = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const Id = useParams();

  // Get Product
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Get Products
  const product = useSelector((state) => state.ecommerceReducer.products[Id.id - 1]);

  /// select colors on click
  const [scolor, setScolor] = useState(product ? product.colors[0] : '');
  const setColor = (e) => {
    setScolor(e);
  };

  //set qty
  const [count, setCount] = useState(1);

  // for alert when added something to cart
  const [cartalert, setCartalert] = React.useState(false);

  const handleClick = () => {
    setCartalert(true);
  };

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
          <Stack direction={'row'} alignItems="center" gap="10px" mt={2} pb={3}>
            <Rating name="simple-controlled" size="small" value={product.rating} readOnly />
            <Link to="/" color="inherit">
              (236 reviews)
            </Link>
          </Stack>
          <Divider />
          
          <Typography color="textSecondary" variant="body1" mt={4}>
            Dispatched in 2-3 weeks
          </Typography>
          <Link to="/" color="inherit">
            Why the longer time for delivery?
          </Link>
       
          <AlertCart handleClose={handleClose} openCartAlert={cartalert} />
        </>
      ) : (
        'No product'
      )}
    </Box>
  );
};

export default RoomDetails;
