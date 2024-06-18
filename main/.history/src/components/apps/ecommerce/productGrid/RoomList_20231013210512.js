import React, { useEffect, useState } from 'react';
import { filter, orderBy } from 'lodash';
import {
  Box,
  Grid,
  Stack,
  CardContent,
  useMediaQuery,
  Typography,
  Rating,
  Fab,
  Tooltip,
  Button,
  Skeleton,
  CardMedia,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProducts,
  addToCart,
  filterReset,
} from '../../../../store/apps/eCommerce/EcommerceSlice';
import ProductSearch from './ProductSearch';
import { IconBasket, IconMenu2 } from '@tabler/icons';
import AlertCart from '../productCart/AlertCart';
import emptyCart from 'src/assets/images/products/empty-shopping-cart.svg';
import BlankCard from '../../../shared/BlankCard';
import axios from 'axios';

const RoomList = ({ onClick }) => {
  const [rooms,setRooms]=useState([])
  // for alert when added something to cart
  const [cartalert, setCartalert] = React.useState(false);

  const handleClick = () => {
    setCartalert(true);
  };


  const username=localStorage.getItem('username')
  useEffect(()=>{
    axios.post('http://localhost:8080/owner/getrooms',{username
    }).then((response)=>{
      console.log(response.data.message)
    })
  })
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" pb={3}>  
          <Typography variant="h5">Rooms</Typography>   
      </Stack>
      
      <Grid container spacing={3}>
        {getProducts.length > 0 ? (
          <>
            {getProducts.map((product) => (
              <Grid
                item
                xs={12}
                lg={4}
                md={4}
                sm={6}
                display="flex"
                alignItems="stretch"
                key={product.id}
              >
                {/* ------------------------------------------- */}
                {/* Product Card */}
                {/* ------------------------------------------- */}

                <BlankCard className="hoverCard">
                  <Typography component={Link} to={`/owner/room/detail/${product.id}`}>
                    {isLoading || !product.photo ? (
                      <>
                        <Skeleton variant="square" width={270} height={300}></Skeleton>
                      </>
                    ) : (
                      <CardMedia
                        component="img"
                        width="100%"
                        image={product.photo}
                        alt="products"
                      />
                    )}
                  </Typography>
                  <Tooltip title="Add To Cart">
                    <Fab
                      size="small"
                      color="primary"
                      onClick={() => dispatch(addToCart(product)) && handleClick()}
                      sx={{ bottom: '75px', right: '15px', position: 'absolute' }}
                    >
                      <IconBasket size="16" />
                    </Fab>
                  </Tooltip>
                  <CardContent sx={{ p: 3, pt: 2 }}>
                    <Typography variant="h6">{product.title}</Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      mt={1}
                    >
                      <Stack direction="row" alignItems="center">
                        <Typography variant="h6">${product.price}</Typography>
                        <Typography
                          color="textSecondary"
                          ml={1}
                          sx={{ textDecoration: 'line-through' }}
                        >
                          ${product.salesPrice}
                        </Typography>
                      </Stack>
                      <Rating name="read-only" size="small" value={product.rating} readOnly />
                    </Stack>
                  </CardContent>
                </BlankCard>

                <AlertCart handleClose={handleClose} openCartAlert={cartalert} />
                {/* ------------------------------------------- */}
                {/* Product Card */}
                {/* ------------------------------------------- */}
              </Grid>
            ))}
          </>
        ) : (
          <>
            <Grid item xs={12} lg={12} md={12} sm={12}>
              <Box textAlign="center" mt={6}>
                <img src={emptyCart} alt="cart" width="200px" />
                <Typography variant="h2">There is no Product</Typography>
                <Typography variant="h6" mb={3}>
                  The Product you are searching is no longer available.
                </Typography>
                <Button variant="contained" onClick={() => dispatch(filterReset())}>
                  Try Again
                </Button>
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default RoomList;
