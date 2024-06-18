import { Box, Button, Grid, Paper, Radio, Stack, Typography } from '@mui/material';
import { sum } from 'lodash';
import { useSelector } from 'react-redux';
import ParentCard from 'src/components/shared/ParentCard';
import ThirdStep from './ThirdStep';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChildCard from 'src/components/shared/ChildCard';
import Paypal from 'src/assets/images/svgs/paypal.svg';
import payment from 'src/assets/images/products/payment.svg';
import mastercard from 'src/assets/images/svgs/mastercard.svg';

const Payment = [
  {
    value: 'paypal',
    title: 'Pay with Paypal',
    description: 'You will be redirected to PayPal website to complete your purchase securely.',
    icons: Paypal,
  },
  {
    value: 'credit_card',
    title: 'Credit / Debit Card',
    description: 'We support Mastercard, Visa, Discover and Stripe.',
    icons: mastercard,
  },
  {
    value: 'upi',
    title: 'UPI ID',
    description: 'Request the Payment request and complete it',
    icons:payment ,
  },
];


const ProductChecout = () => {
 
  const [data, setdata] = useState({});
  const [date, setDate] = useState();
  const ownername = sessionStorage.getItem('ownername');
  const roomid = sessionStorage.getItem('roomid');
  const [selectedPyament, setSelectedPyament] = React.useState('paypal');

  const handlePChange = (event) => {
    setSelectedPyament(event.target.value);
  };

  const handleNext = () => {};
  
  useEffect(() => {
    const { startdate, enddate } = JSON.parse(sessionStorage.getItem('bookingdates'));
    const startdates = new Date(startdate).getDate();
    const enddates = new Date(enddate).getDate();
    const days = enddates - startdates;
    setDate(days);
  }, []);

  useEffect(() => {
    axios
      .post('http://localhost:8080/guest/roomdetails/', {
        ownername,
        roomid,
      })
      .then((response) => {
        setdata({ ...response.data.message });
      });
  }, []);

  return (
    <ParentCard title="Complete Payment">
      <Paper variant="outlined" >
        <Grid container spacing={3} alignItems="center">
          <Grid lg={8} xs={12} item>
            <Grid container spacing={3}>
              {Payment.map((option) => (
                <Grid item lg={12} xs={12} key={option.value}>
                  <Paper
                    variant="outlined"
                    sx={{
                      p: 2,
                      borderColor: selectedPyament === option.value ? 'primary.main' : '',
                      backgroundColor: selectedPyament === option.value ? 'primary.light' : '',
                    }}
                  >
                    <Stack direction={'row'} alignItems="center" gap={1}>
                      <Radio
                        checked={selectedPyament === option.value}
                        onChange={handlePChange}
                        value={option.value}
                        name="radio-buttons"
                        inputProps={{ 'aria-label': option.title }}
                      />
                      <Box>
                        <Typography variant="h6">{option.title}</Typography>
                        <Typography variant="subtitle2">{option.description}</Typography>
                      </Box>
                      <Box ml="auto">
                        {option.icons ? <img src={option.icons} alt="payment" /> : ''}
                      </Box>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid lg={4} xs={12} item>
            <Box sx={{ width: { xs: '200px', sm: 'auto' } }}>
              <img src={payment} alt="payment" />
            </Box>
          </Grid>
        </Grid>
      </Paper>
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
              <Typography variant="h6">{date}</Typography>
            </Stack>
            {/* Sub Total */}
            <Stack direction="row" justifyContent="space-between" mb={1}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h5" color="success">
                {date * data.rateperday}
              </Typography>
            </Stack>
          </Box>
        </ChildCard>
      </Box>

      <Stack direction={'row'} justifyContent="space-between">
        <Button onClick={handleNext} size="large" variant="contained">
          Complete Payment
        </Button>
      </Stack>
    </ParentCard>
  );
};

export default ProductChecout;
