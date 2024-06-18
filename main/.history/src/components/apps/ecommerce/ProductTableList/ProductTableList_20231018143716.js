import React,{useEffect, useState} from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from '@mui/material';

import { visuallyHidden } from '@mui/utils';
import axios from 'axios';

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Room No',
  },
  {
    id: 'pname',
    numeric: false,
    disablePadding: false,
    label: 'Guest name',
  },

  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Booking status',
  },
  {
    id: 'amount',
    numeric: false,
    disablePadding: false,
    label: 'Amount',
  },
 
];

function EnhancedTableHead(props) {

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
           
          >
            <TableSortLabel>
              {headCell.label}
                <Box component="span" sx={visuallyHidden}> 
                </Box>
             
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}



const ProductTableList = () => {
const [data,setData]=useState([])

  const ownername=localStorage.getItem('ownername')

  useEffect(()=>{
    axios.post('http://localhost:8080/owner/bookedroomdetails/',{
       ownername
    }).then((response)=>{
  
      setData([...response.data.message])
      console.log(response.data.message)
    })
  },[])

  return (
    <Box>
      <Box>
      
        <Paper variant="outlined" sx={{ mx: 2, mt: 1 }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
            >
              <EnhancedTableHead       
              />
              <TableBody>
                  {
                    data.map((row,index)=>{
                       return (
                        <TableRow
                        hover
                        role="checkbox"
                       
                        tabIndex={-1}
                        key={row.roomid}
                      
                      >
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <Box
                              sx={{
                                ml: 2,
                              }}
                            >
                              <Typography variant="h6" fontWeight="600">
                                {row.roomid}
                              </Typography>
                           
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography>{row.guestname}</Typography>
                        </TableCell>

                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <Box
                              sx={{
                                backgroundColor: row.stock
                                  ? (theme) => theme.palette.success.main
                                  : (theme) => theme.palette.error.main,
                                borderRadius: '100%',
                                height: '10px',
                                width: '10px',
                              }}
                            />
                            <Typography
                              color="textSecondary"
                              variant="subtitle2"
                              sx={{
                                ml: 1,
                              }}
                            >
                              {row.status}
                            </Typography>
                          </Box>
                        </TableCell>

                        <TableCell>
                          <Typography fontWeight="500" variant="h6">
                         
                          {
                             row.amount ?  "₹    "+ row.amount : "₹ "+ 0
                          }
                          </Typography>
                        </TableCell>
                       
                      </TableRow>
                       )
                    })
                  } 
              
              </TableBody>
            </Table>
          </TableContainer>
         
        </Paper>
        
      </Box>
    </Box>
  );
};

export default ProductTableList;
