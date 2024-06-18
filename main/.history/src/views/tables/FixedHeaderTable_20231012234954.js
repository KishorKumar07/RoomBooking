import React from 'react';
import {
  Typography,
  Box,
  Avatar,
  LinearProgress,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import Breadcrumb from '../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';

import img1 from '../../assets/images/products/s1.jpg';
import img2 from '../../assets/images/products/s2.jpg';
import img3 from '../../assets/images/products/s3.jpg';
import img4 from '../../assets/images/products/s4.jpg';
import ParentCard from '../../components/shared/ParentCard';
import { IconEdit, IconTrash } from '@tabler/icons';
import { Stack } from '@mui/system';

const columns = [
  { id: 'pname', label: 'Products', minWidth: 170 },
  { id: 'review', label: 'Review', minWidth: 100 },
  {
    id: 'earnings',
    label: 'Earnings',
    minWidth: 170,
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170,
  },
];

const rows = [
  {
    id: 1,
    imgsrc: img1,
    name: 'Is it good butterscotch ice-cream?',
    tags: 'Ice-Cream, Milk, Powder',
    review: 'good',
    percent: 65,
    earnings: '546,000',
  },
  {
    id: 2,
    imgsrc: img2,
    name: 'Supreme fresh tomato available',
    tags: 'Market, Mall',
    review: 'excellent',
    percent: 98,
    earnings: '780,000',
  },
  {
    id: 3,
    imgsrc: img3,
    name: 'Red color candy from Gucci',
    tags: 'Chocolate, Yummy',
    review: 'average',
    percent: 46,
    earnings: '457,000',
  },
  {
    id: 4,
    imgsrc: img4,
    name: 'Stylish night lamp for night',
    tags: 'Elecric, Wire, Current',
    review: 'poor',
    percent: 23,
    earnings: '125,000',
  },
];


const FixedHeaderTable = () => {
  const Capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <PageContainer title="Fixed Header Table" description="this is Fixed Header Table page">

      <ParentCard title="Edit and Delete">
        <Paper variant="outlined">
          <TableContainer sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' }, maxHeight: 440, }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>

                    <TableCell
                      key=''           
                    >
                      <Typography variant="h6" fontWeight="500">
                       Rooms
                      </Typography>
                    </TableCell>
                    <TableCell
                      key=''       
                    >
                      <Typography variant="h6" fontWeight="500">
                       Edit
                      </Typography>
                    </TableCell>
                    <TableCell
                      key=''
                    >
                      <Typography variant="h6" fontWeight="500">
                       Delete
                      </Typography>
                    </TableCell>
                 
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => {
                  return (
                    <TableRow hover key={row.id}>
                      <TableCell>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <Avatar
                            src={row.imgsrc}
                            alt={row.imgsrc}
                            sx={{
                              borderRadius: '10px',
                              height: '70px',
                              width: '90px',
                            }}
                          />
                          <Box>
                            <Typography variant="h5">{row.name}</Typography>
                           
                          </Box>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <IconButton>
                          <IconEdit width={18} />
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <IconButton>
                          <IconTrash width={18} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

      </ParentCard>
    </PageContainer>
  );
};

export default FixedHeaderTable;
