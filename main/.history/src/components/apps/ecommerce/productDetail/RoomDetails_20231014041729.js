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
import axios from 'axios';

const RoomDetails = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  // Get Product
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
        console.log(response.data.message)
      });
  }, []);

  return (
    <Box p={2}>
      {data ? (
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
                
                <Divider />
         
        </>
      ) : (
        'No Room Details'
      )}
    </Box>
  );
};

export default RoomDetails;
