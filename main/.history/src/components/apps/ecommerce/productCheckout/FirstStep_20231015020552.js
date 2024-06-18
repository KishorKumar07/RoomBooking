import { Box, Typography, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ChildCard from '../../../shared/ChildCard';
import axios from 'axios';



const FirstStep = ({ total, Discount }) => {

  const [data,setdata]=useState({})
  const ownername=sessionStorage.getItem('ownername')
  const roomid=sessionStorage.getItem('roomid')
 
  useEffect(()=>{
    axios.post('http://localhost:8080/guest/roomdetails/',{
      ownername,roomid
    }).then((response)=>{
      setdata({...response.data.message})
      console.log(data)
    })
  },[])
  return (
    <>
      <Box my={3}>
        <ChildCard>
          <Box p={2}>
            <Typography variant="h5" fontWeight={600} mb={3}>
              Payment Summary
            </Typography>
            {/* Sub Total */}
            <Stack direction="row" justifyContent="space-between" mb={3}>
              <Typography variant="h6" fontWeight={400}>
                Rate per day
              </Typography>
              <Typography variant="h6">₹ {data.rateperday}</Typography>
            </Stack>
            {/* Discount */}
            <Stack direction="row" justifyContent="space-between" mb={3}>
              <Typography variant="h6" fontWeight={400}>
                Days
              </Typography>
              <Typography variant="h6">${total}</Typography>
            </Stack>
            {/* Sub Total */}
            <Stack direction="row" justifyContent="space-between" mb={1}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h5" color="success">
                ${total}
              </Typography>
            </Stack>
          </Box>
        </ChildCard>
      </Box>
    </>
  );
};

export default FirstStep;
