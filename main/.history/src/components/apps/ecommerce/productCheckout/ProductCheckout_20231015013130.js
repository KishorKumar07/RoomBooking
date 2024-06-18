import React from 'react';
import { sum } from 'lodash';
import { Box, Stack, Button } from '@mui/material';
import AddToCart from '../productCart/AddToCart';

import { IconArrowBack } from '@tabler/icons';
import { useSelector } from 'react-redux';
import HorizontalStepper from './HorizontalStepper';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FinalStep from './FinalStep';
import ParentCard from 'src/components/shared/ParentCard';

const ProductChecout = () => {
  const checkout = useSelector((state) => state.ecommerceReducer.cart);
  const steps = ['Cart', 'Billing & address', 'Payment'];
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  const total = sum(checkout.map((product) => product.price * product.qty));
  const Discount = Math.round(total * (5 / 100));

  return (
    <ParentCard title='Complete Payment'>

            <ThirdStep />
            <FirstStep total={total} Discount={Discount} />
            <Stack direction={'row'} justifyContent="space-between">
              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack}>
                <IconArrowBack /> Back
              </Button>
              <Button onClick={handleNext} size="large" variant="contained">
                Complete an Order
              </Button>
            </Stack>
         
    </ParentCard>
  )
};


export default ProductChecout;
