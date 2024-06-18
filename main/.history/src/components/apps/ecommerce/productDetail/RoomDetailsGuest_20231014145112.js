import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

// MUI Elements
import { Box, Grid, Typography, Button, Rating, Divider, Stack, useTheme } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../../../store/apps/eCommerce/EcommerceSlice';
import AlertCart from '../productCart/AlertCart';
import Calendar from '@demark-pro/react-booking-calendar';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import BlankCard from 'src/components/shared/BlankCard';

const RoomDetailsGuest = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const Id = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const username = localStorage.getItem('username');
  const url = window.location.href;
  const parts = url.split('/');
  const roomid = parts[parts.length - 1];


  useEffect(() => {
    axios
      .post('http://localhost:8080/owner/roomdetails/', { username, roomid })
      .then((response) => {
        setData({...response.data.message});
        setLoading(false)
      });
  }, []);


  const reserved = [
    {
      startDate: new Date(2023, 3, 22),
      endDate: new Date(2016, 4, 22),
    },
  ];
  const [selectedDates, setSelectedDates] = useState([]);
  const handleChange =  (e) => {
    setSelectedDates(e);
  
  };

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
  const handleSubmit=()=>{
   
    selectedDates.map((select)=>{
      
      console.log(select.toISOString())
    })
  }

  return (
    <Box p={2}>
      <Grid>
        {
          loading ? (
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
             <Typography fontWeight="600" variant="h4" mt={1}>
                  {data.roomname}
                </Typography>
                <Typography variant="subtitle2" mt={1} color={theme.palette.text.secondary}>
                 Room Size :  {data.roomsize}
                </Typography>
                <Typography variant="subtitle2" mt={1} color={theme.palette.text.secondary}>
                  Number of beds : {data.numberofbeds}
                </Typography>
                <Typography variant="subtitle2" mt={1} color={theme.palette.text.secondary}>
                 Minimum Booking Period :  {data.minimumbookingperiod}
                </Typography>
                <Typography variant="subtitle2" mt={1} color={theme.palette.text.secondary}>
                 Maximum Booking Period : {data.maximumbookingperiod}
                </Typography>
                <Typography mt={2} variant="h4" fontWeight={600}>
                 
               Rate Per Day : ₹{data.rateperday}
                </Typography>
                
            </>
          )
        }
      </Grid>
     
    </Box>
  );
};

export default RoomDetailsGuest;
