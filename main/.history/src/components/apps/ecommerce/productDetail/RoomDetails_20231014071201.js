import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Divider,
  useTheme,
  Grid,
} from '@mui/material';
import axios from 'axios';

const RoomDetails = () => {
  const theme = useTheme();
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

  return (
    <Box p={2}>
      <Grid>
        {
          loading ? (

          ) : (
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
          
          )
        }
      </Grid>
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
