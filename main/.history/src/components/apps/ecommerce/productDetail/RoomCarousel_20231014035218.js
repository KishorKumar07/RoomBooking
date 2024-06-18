import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import Carousel from 'react-material-ui-carousel'


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

import axios from 'axios';

const ProductCarousel = () => {
  const[images,setImages]=useState([])

  const username = localStorage.getItem('username');
  const url = window.location.href;
  const parts = url.split('/');
  const roomid = parts[parts.length - 1];

  useEffect(() => {
 
    axios.post('http://localhost:8080/owner/roomdetailsImages/', { username ,roomid}).then((response) => {
      setImages([...response.data.message.images])
     
    });
  },[]);

  return (
    <Box>
    
    <Carousel sx={{width:'100%'}}>
            {
                images.map( (item, i) => <img  style={{width:'100%',height:'500px'}} src={item} alt={item}></img> )
            }
        </Carousel>
    </Box>
  );
};

export default ProductCarousel;
