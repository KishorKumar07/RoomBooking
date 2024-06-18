import React from 'react';
import { Box, useMediaQuery, Button } from '@mui/material';
import { useSelector } from 'react-redux';


export const Profile = () => {
  const customizer = useSelector((state) => state.customizer);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const hideMenu = lgUp ? customizer.isCollapse && !customizer.isSidebarHover : '';
  return (
    <Box
      display={'flex'}
      alignItems="center" 
    >
      {!hideMenu ? (
        <>
      <Button onClick={()=>localStorage.removeItem('ownername')} sx={{bgcolor:'#5D87FF',marginLeft:'20px',color:'white',width:'200px'}}>Logout</Button>       
        </>
      ) : (
        ''
      )}
    </Box>
  );
};
