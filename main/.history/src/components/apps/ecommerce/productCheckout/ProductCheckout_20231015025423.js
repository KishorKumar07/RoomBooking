import React from 'react';
import { sum } from 'lodash';
import { useSelector } from 'react-redux';
import FirstStep from './FirstStep';
import ThirdStep from './ThirdStep';
import ParentCard from 'src/components/shared/ParentCard';
import { Button, Stack } from '@mui/material';

const ProductChecout = () => {
  const checkout = useSelector((state) => state.ecommerceReducer.cart);
  const handleNext = () => {
    
  };



  const total = sum(checkout.map((product) => product.price * product.qty));
  const Discount = Math.round(total * (5 / 100));

  return (
    <ParentCard title='Complete Payment'>

            <ThirdStep />

            <FirstStep total={total} Discount={Discount} />



            <Stack direction={'row'} justifyContent="space-between">
              <Button onClick={handleNext} size="large" variant="contained">
                Complete Payment
              </Button>
            </Stack>
         
    </ParentCard>
  )
};


export default ProductChecout;
