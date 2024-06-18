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

const basics = basicsTableData;
const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Basic Table',
  },
];

const BasicTable = () => (
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
                  <Typography variant="h6">Accept</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Reject</Typography>
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
);

export default BasicTable;
