import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  useTheme,
  Grid,
} from '@mui/material';
import axios from 'axios';
import BlankCard from 'src/components/shared/BlankCard';
import Skeleton from 'react-loading-skeleton';
import Logo from 'src/layouts/full/shared/logo/Logo';
const RoomDetails = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const ownername = localStorage.getItem('ownername');
  const url = window.location.href;
  const parts = url.split('/');
  const roomid = parts[parts.length - 1];

  useEffect(() => {
    axios
      .post('http://localhost:8080/owner/roomdetails/', { ownername, roomid })
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
                  <br></br>
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
                <Typography mt={2} variant="h6" fontWeight={600}>
                 
               Rate Per Day : ₹{data.rateperday}
                </Typography>
                
            </>
          )
        }
      </Grid>
     
    </Box>
  );
};

export default RoomDetails;
