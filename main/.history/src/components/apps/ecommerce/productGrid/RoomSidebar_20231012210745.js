import React from 'react';
import { Drawer, useMediaQuery } from '@mui/material';

import ProductFilter from './RoomFilter';

const drawerWidth = 250;


const RoomSidebar = ({ isMobileSidebarOpen, onSidebarClose }) => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return (
    <Drawer
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant={lgUp ? 'permanent' : 'temporary'}
      sx={{
        marginTop:'60px',
        width: drawerWidth,
        flexShrink: 0,
        zIndex: lgUp ? 0 : 1,
        [`& .MuiDrawer-paper`]: { position: 'relative' },
      }}
    >
      
      {/* ------------------------------------------- */}
      {/* Filter Sidebar */}
      {/* ------------------------------------------- */}
      <ProductFilter />
    </Drawer>
  );
};


export default RoomSidebar;
