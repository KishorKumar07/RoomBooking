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
     
    </>
  );
};

export default ThirdStep;
