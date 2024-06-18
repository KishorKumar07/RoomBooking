import React, { useEffect, useState } from 'react';
import { Box, Grid, Stack, CardContent, Typography, Fab, Tooltip, CardMedia } from '@mui/material';
import {  useNavigate } from 'react-router-dom';
import { IconBasket } from '@tabler/icons';
import BlankCard from '../../../shared/BlankCard';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

const RoomListGuest = ({ onClick }) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate=useNavigate();
  const guestname = localStorage.getItem('guestname');
  useEffect(() => {
    axios.post('http://localhost:8080/guest/getrooms').then((response) => {
      setRooms([...response.data.message]);
      setLoading(false);
    });
    localStorage.removeItem('ownername')
  }, [guestname]);

  const handleRoute=(username,roomid)=>{
    localStorage.setItem('username',username)
    const usernameowner=localStorage.getItem('username')
    navigate(`/guest/${usernameguest}/room/detail/${usernameowner}/${roomid}`)
  }
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" pb={3}>
        <Typography variant="h5">Rooms</Typography>
      </Stack>

      <Grid container spacing={3}>
        {loading ? (
          <Grid container spacing={3}>
            {[...Array(10).keys()].map((index) => (
              <Grid
                item
                xs={12}
                lg={4}
                md={4}
                sm={6}
                display="flex"
                alignItems="stretch"
                key={index}
              >
                <BlankCard className="hoverCard">
                  <Skeleton
                    width={300}
                    height={200} 
                    animation="wave" 
                    variant="rectangular" 
                    style={{ backgroundColor: 'black' }} 
                  />
                
                </BlankCard>
              </Grid>
            ))}
          </Grid>
        ) : (
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
                  <Typography component={Typography} >
                    <CardMedia  onClick={()=>{handleRoute(room.username,room.roomid)}} component="img" width="100%" image={room.images[0]} alt="products" />
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
        )}
      </Grid>
    </Box>
  );
};

export default RoomListGuest;
