import React, { useEffect, useState } from 'react';
import {
  Typography,
  Box,
  Avatar,
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
import PageContainer from '../../components/container/PageContainer';
import ParentCard from '../../components/shared/ParentCard';
import { IconEdit, IconTrash } from '@tabler/icons';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlankCard from 'src/components/shared/BlankCard';
import Skeleton from 'react-loading-skeleton';

const FixedHeaderTable = () => {
 
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const ownername = localStorage.getItem('ownername');
  useEffect(() => {
    axios.post('http://localhost:8080/owner/getrooms', { ownername }).then((response) => {
      setRooms([...response.data.message]);
      setLoading(false);
      console.log(response)
    });
  });

  const handleDelete=(roomid)=>{
    axios.post('http://localhost:8080/owner/deleteroom/', { ownername,roomid }).then((response) => {
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
                            <Link to={`/owner/${ownername}/room-edit/edit/${row.roomid}`}>
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
