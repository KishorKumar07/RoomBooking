import { Box, Button, Stack, Typography } from '@mui/material';
import { sum } from 'lodash';
import { useSelector } from 'react-redux';
import ParentCard from 'src/components/shared/ParentCard';
import ThirdStep from './ThirdStep';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ChildCard from 'src/components/shared/ChildCard';

const ProductChecout = () => {
  const checkout = useSelector((state) => state.ecommerceReducer.cart);
  const handleNext = () => {};
  const [data, setdata] = useState({});
  const [date, setDate] = useState();
  const ownername = sessionStorage.getItem('ownername');
  const roomid = sessionStorage.getItem('roomid');

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

  const total = sum(checkout.map((product) => product.price * product.qty));
  const Discount = Math.round(total * (5 / 100));

  return (
    <ParentCard title="Complete Payment">
      <ThirdStep />
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
