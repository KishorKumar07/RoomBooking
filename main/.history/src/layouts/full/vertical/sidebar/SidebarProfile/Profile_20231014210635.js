import React from 'react';
import { Box, Avatar, Typography, IconButton, Tooltip, useMediaQuery, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import img1 from 'src/assets/images/profile/user-1.jpg';
import { IconPower } from '@tabler/icons';
import {Link} from "react-router-dom";

export const Profile = () => {
  const customizer = useSelector((state) => state.customizer);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const hideMenu = lgUp ? customizer.isCollapse && !customizer.isSidebarHover : '';
  return (
    <Box
      display={'flex'}
      alignItems="center"
      gap={2}
    
    >
      {!hideMenu ? (
        <>
      <Button  sx={{bgcolor:'#5D87FF',m:2,p:2}}>Logout</Button>
          
        </>
      ) : (
        ''
      )}
    </Box>
  );
};
