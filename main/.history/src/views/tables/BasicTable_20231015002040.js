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
  AvatarGroup,
  Chip,
  Paper,
  TableContainer,
  Stack,
  Button,
} from '@mui/material';

import Breadcrumb from '../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';
import { basicsTableData } from './tableData';

import ParentCard from '../../components/shared/ParentCard';
import axios from 'axios';

const basics = basicsTableData;



const BasicTable = () =>{

  const ownername = localStorage.getItem('ownername');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  axios
    .post('http://localhost:8080/owner/get-booking-status/', { ownername })
    .then((response) => {
      console.log(response.data.message);
      setData([...response.data.message]);
      setLoading(false);
    });
}, []);

  return(
    
      <PageContainer title="Booking Requests" description="this is Basic Table page">
      
        <ParentCard title="Booking Requests">
          <Paper variant="outlined">
            <TableContainer >
              <Table
                aria-label="simple table"
                sx={{
                  whiteSpace: 'nowrap',
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">Users</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Room Name</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Booked from</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Booked till</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Accept</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Reject</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((dt,index) => (
                    <TableRow key={index}>
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
                          {dt.guestname}
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
                      <Button variant='contained'>Accept</Button>
                        
                      </TableCell>
                      <TableCell>
                      <Button variant='contained'>Reject</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </ParentCard>
      </PageContainer>
    
  )
}

export default BasicTable;
