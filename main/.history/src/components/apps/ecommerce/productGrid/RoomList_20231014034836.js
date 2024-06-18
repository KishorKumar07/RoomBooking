import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  Stack,
  CardContent,
  Typography,
  Fab,
  Tooltip,
  CardMedia,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { IconBasket } from '@tabler/icons';
import emptyCart from 'src/assets/images/products/empty-shopping-cart.svg';
import BlankCard from '../../../shared/BlankCard';
import axios from 'axios';

const RoomList = ({ onClick }) => {
  const [rooms,setRooms]=useState([])
 
  const username=localStorage.getItem('username')
  useEffect(()=>{
    axios.post('http://localhost:8080/owner/getrooms',{username
    }).then((response)=>{
      
      setRooms([...response.data.message])
    })
  })
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" pb={3}>  
          <Typography variant="h5">Rooms</Typography>   
      </Stack>
      
      <Grid container spacing={3}>
        {rooms.length > 0 ? (
          <>
            {rooms.map((room) => (
              <Grid
                item
                xs={12}
                lg={4}
                md={4}
                sm={6}
                display="flex"
                alignItems="stretch"
                key={room.roomid}
              >
                <BlankCard className="hoverCard">
                  <Typography component={Link} to={`/owner/${username}/room/detail/${room.roomid}`}>      
                      <CardMedia
                        component="img"
                        width="100%"
                        image={room.images[0]}
                        alt="products"
                      />
                  </Typography>
                  <Tooltip title="Add To Cart">
                    <Fab
                      size="small"
                      color="primary"
                      sx={{ bottom: '75px', right: '15px', position: 'absolute' }}
                    >
                      <IconBasket size="16" />
                    </Fab>
                  </Tooltip>
                  <CardContent sx={{ p: 3, pt: 2 }}>
                    <Typography variant="h6">{room.roomname}</Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      mt={1}
                    >
                      <Stack direction="row" alignItems="center">
                        <Typography variant="h6">₹ {room.rateperday}</Typography>
                      
                      </Stack>
                      {/* <Rating name="read-only" size="small" value={product.rating} readOnly /> */}
                    </Stack>
                  </CardContent>
                </BlankCard>
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
               
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default RoomList;
