import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ListItemText,
  ListItemButton,
  List,
  Divider,
  ListItemIcon,
  Typography,
  Box,
  Button
} from '@mui/material';
import {
  filterProducts,
  filterReset,
} from '../../../../store/apps/eCommerce/EcommerceSlice';

import {
  IconHanger,
  IconCircles,
  IconNotebook,

} from '@tabler/icons';

const ProductFilter = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ecommerceReducer.products);
  const active = useSelector((state) => state.ecommerceReducer.filters);
  const checkactive = useSelector((state) => state.ecommerceReducer.sortBy);
  const customizer = useSelector((state) => state.customizer);
  const br = `${customizer.borderRadius}px`;

  
  const filterCategory = [
    {
      id: 1,
      filterbyTitle: 'Filter by Category',
    },
    {
      id: 2,
      name: 'All Rooms',
      sort: 'All',
      icon: IconCircles,
    },
    {
      id: 3,
      name: 'Available Rooms',
      sort: 'fashion',
      icon: IconHanger,
    },
    {
      id: 9,
      name: 'Booked Rooms',
      sort: 'books',
      icon: IconNotebook,
    },
    
  ];


  return (
    <>
      <List >
        {/* ------------------------------------------- */}
        {/* Category filter */}
        {/* ------------------------------------------- */}
        {filterCategory.map((filter) => {
          if (filter.filterbyTitle) {
            return (
              <Typography variant="subtitle2" fontWeight={600} px={3} mt={2} pb={2} key={filter.id}>
                {filter.filterbyTitle}
              </Typography>
            );
          } else if (filter.devider) {
            return <Divider key={filter.id} />;
          }

          return (
            
            <ListItemButton
              sx={{ mb: 1, mx: 3, borderRadius: br }}
              selected={active.category === `${filter.sort}`}
              onClick={() => dispatch(filterProducts({ category: `${filter.sort}` }))}
              key={filter.id}
            >
              <ListItemIcon sx={{ minWidth: '30px' }}>
                <filter.icon stroke="1.5" size="19" />
              </ListItemIcon>
              <ListItemText>{filter.name}</ListItemText>
            </ListItemButton>
          
          );
        })}
        <Divider></Divider>     
        <Box  p={3}>
          <Button variant="contained" onClick={() => dispatch(filterReset())} fullWidth>
            Reset Filters
          </Button>
        </Box>
      </List>
    </>
  );
};

export default ProductFilter;
