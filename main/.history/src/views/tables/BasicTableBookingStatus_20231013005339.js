import React from 'react';
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
} from '@mui/material';

import PageContainer from '../../components/container/PageContainer';
import { basicsTableData } from './tableData';

import ParentCard from '../../components/shared/ParentCard';
import { Link } from 'react-router-dom';

const basics = basicsTableData;


const BasicTableBookingStatus = () => (
  <PageContainer title="Booking Status" description="this is Basic Table page">
  
    <ParentCard title="Booking Status">
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
                  <Typography variant="h6">Status</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Booking</Typography>
                </TableCell>
           
              </TableRow>
            </TableHead>
            <TableBody>
              {basics.map((basic) => (
                <TableRow key={basic.id}>
                  <TableCell>
                    <Stack direction="row" spacing={2}>
                      <Avatar src={basic.imgsrc} alt={basic.imgsrc} width="35" />
                      <Box>
                        <Typography variant="h6" fontWeight="600">
                          {basic.name}
                        </Typography>
                      
                      </Box>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                      {basic.pname}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    {/* <Chip chipcolor={basic.status == 'Active' ? 'success' : basic.status == 'Pending' ? 'warning' : basic.status == 'Completed' ? 'primary' : basic.status == 'Cancel' ? 'error' : 'secondary'} */}
                    <Chip
                      sx={{
                        bgcolor:
                          basic.status === 'Active'
                            ? (theme) => theme.palette.success.light
                            : basic.status === 'Pending'
                              ? (theme) => theme.palette.warning.light
                              : basic.status === 'Completed'
                                ? (theme) => theme.palette.primary.light
                                : basic.status === 'Cancel'
                                  ? (theme) => theme.palette.error.light
                                  : (theme) => theme.palette.secondary.light,
                        color:
                          basic.status === 'Active'
                            ? (theme) => theme.palette.success.main
                            : basic.status === 'Pending'
                              ? (theme) => theme.palette.warning.main
                              : basic.status === 'Completed'
                                ? (theme) => theme.palette.primary.main
                                : basic.status === 'Cancel'
                                  ? (theme) => theme.palette.error.main
                                  : (theme) => theme.palette.secondary.main,
                        borderRadius: "8px"
                      }}
                      size="small"
                      label={basic.status}
                    />
                  </TableCell>
                  <TableCell>
                    <Link to='/guest/booking/eco-checkout'>  <Button variant='contained'>Book Now</Button></Link>
                
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </ParentCard>
  </PageContainer>
);

export default BasicTableBookingStatus;
