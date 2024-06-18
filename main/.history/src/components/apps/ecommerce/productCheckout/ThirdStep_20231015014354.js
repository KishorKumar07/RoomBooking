import React from 'react';
import { Box, Grid, Paper, Radio, Stack, Typography } from '@mui/material';
import Paypal from 'src/assets/images/svgs/paypal.svg';
import payment from 'src/assets/images/products/payment.svg';
import mastercard from 'src/assets/images/svgs/mastercard.svg';
import upiicon from 'src/assets/images/svgs/upi-icon.svg'


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

const ThirdStep = () => {

  const [selectedPyament, setSelectedPyament] = React.useState('paypal');

  const handlePChange = (event) => {
    setSelectedPyament(event.target.value);
  };

  return (
    <>
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
    </>
  );
};

export default ThirdStep;
