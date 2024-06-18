import React, { useEffect, useState } from 'react';
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  Paper,
  TableContainer,
  Stack,
  Button,
  Grid,
} from '@mui/material';

import PageContainer from '../../components/container/PageContainer';
import { basicsTableData } from './tableData';

import ParentCard from '../../components/shared/ParentCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlankCard from 'src/components/shared/BlankCard';
import Skeleton from 'react-loading-skeleton';

const basics = basicsTableData;

const BasicTableBookingStatus = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const guestname = localStorage.getItem('guestname');

  useEffect(() => {
    axios
      .post('http://localhost:8080/guest/get-booking-status/', { guestname })
      .then((response) => {
        console.log(response.data.message);
        setData([...response.data.message]);
        setLoading(false);
      });
  }, []);

  return (
    <PageContainer title="Booking Status" description="this is Basic Table page">
      <ParentCard title="Booking Status">
        <Paper variant="outlined">
          <TableContainer>
            <Table
              aria-label="simple table"
              sx={{
                whiteSpace: 'nowrap',
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">Room ID</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Owner Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Booked from</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Booked To</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Status</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Booking</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
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
                    {data.map((dt) => (
                      <TableRow key={dt.id}>
                        <TableCell>
                          <Stack direction="row" spacing={2}>
                            <Box>
                              <Typography variant="h6" fontWeight="600">
                                {dt.roomid}
                              </Typography>
                            </Box>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Typography color="textSecondary" variant="h6" fontWeight="400">
                            {dt.ownername}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography color="textSecondary" variant="h6" fontWeight="400">
                            {dt.bookingdates.startdate.substring(0, 10)}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography color="textSecondary" variant="h6" fontWeight="400">
                            {dt.bookingdates.enddate.substring(0, 10)}
                          </Typography>
                        </TableCell>

                        <TableCell>
                          {/* <Chip chipcolor={basic.status == 'Active' ? 'success' : basic.status == 'Pending' ? 'warning' : basic.status == 'Completed' ? 'primary' : basic.status == 'Cancel' ? 'error' : 'secondary'} */}
                          <Chip
                            sx={{
                              bgcolor:
                                dt.status === 'Request Sent'
                                  ? (theme) => theme.palette.success.light
                                  : dt.status === 'Accepted',
                              color:
                                dt.status === 'Request Sent'
                                  ? (theme) => theme.palette.success.main
                                  : dt.status === 'Accepted',

                              borderRadius: '8px',
                            }}
                            size="small"
                            label={dt.status}
                          />
                        </TableCell>
                        <TableCell>
                          {dt.status == 'Request Sent' ? (
                            <Link to="/guest/booking/eco-checkout">
                              {' '}
                              <Button variant="contained" disabled>
                                Book Now
                              </Button>
                            </Link>
                          ) : (
                            <Link to="/guest/booking/eco-checkout">
                              {' '}
                              <Button variant="contained">Book Now</Button>
                            </Link>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </ParentCard>
    </PageContainer>
  );
};

export default BasicTableBookingStatus;
