import React, { useEffect, useState } from 'react';
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
  Grid,
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
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlankCard from 'src/components/shared/BlankCard';
import Skeleton from 'react-loading-skeleton';

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
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const username = localStorage.getItem('username');
  useEffect(() => {
    axios.post('http://localhost:8080/owner/getrooms', { username }).then((response) => {
      setRooms([...response.data.message]);
      setLoading(false);
    });
  });

  const handleDelete=(roomid)=>{
    axios.post('http://localhost:8080/owner/deleteroom/', { username,roomid }).then((response) => {
    alert("Successfully Deleted")
      
    });
  }

  return (
    <PageContainer title="Edit & Delete Rooms" description="this is Fixed Header Table page">
      <ParentCard title="Edit & Delete Rooms">
        <Paper variant="outlined">
          <TableContainer
            sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' }, maxHeight: 440 }}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell key="">
                    <Typography variant="h6" fontWeight="500">
                      Rooms
                    </Typography>
                  </TableCell>
                  <TableCell key="">
                    <Typography variant="h6" fontWeight="500">
                      Edit
                    </Typography>
                  </TableCell>
                  <TableCell key="">
                    <Typography variant="h6" fontWeight="500">
                      Delete
                    </Typography>
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
                  rooms.map((row) => {
                    return (
                      <TableRow hover key={row.roomid}>
                        <TableCell>
                          <Stack spacing={2} direction="row" alignItems="center">
                            <Avatar
                              src={row.images[0]}
                              alt={row.images[0]}
                              sx={{
                                borderRadius: '10px',
                                height: '70px',
                                width: '90px',
                              }}
                            />
                            <Box>
                              <Typography variant="h5">{row.roomname}</Typography>
                            </Box>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <IconButton>
                            <Link to={`/owner/${username}/room-edit/edit/${row.roomid}`}>
                              {' '}
                              <IconEdit width={18} />
                            </Link>
                          </IconButton>
                        </TableCell>
                        <TableCell>
                          <IconButton onClick={()=>{handleDelete(row.roomid)}}>
                            <IconTrash width={18} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </ParentCard>
    </PageContainer>
  );
};

export default FixedHeaderTable;
