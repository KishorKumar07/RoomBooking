import React,{useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  IconButton,
  Tooltip,
  FormControlLabel,
  Typography,
  Avatar,
  Paper,
} from '@mui/material';

import { visuallyHidden } from '@mui/utils';

import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from 'src/store/apps/eCommerce/EcommerceSlice';

import CustomSwitch from '../../../forms/theme-elements/CustomSwitch';
import { IconDotsVertical } from '@tabler/icons';
import axios from 'axios';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

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
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const ProductTableList = () => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
 

  const dispatch = useDispatch();
  //Fetch Products
  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const getProducts = useSelector((state) => state.ecommerceReducer.products);

  const [rows, setRows] = React.useState(getProducts);
const [data,setData]=useState([])

  React.useEffect(() => {
    setRows(getProducts);
  }, [getProducts]);

 
  // This is for the sorting
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // This is for select all the row
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.title);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  // This is for the single row sleect
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const ownername=localStorage.getItem('ownername')

  useEffect(()=>{
    axios.post('http://localhost:8080/owner/bookedroomdetails/',{
       ownername
    }).then((response)=>{
  
      setData([...response.data.message])
      
    })
  })

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
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                  {
                    data.map((row,index)=>{
                       return (
                        <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.title)}
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
                          ₹500
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
