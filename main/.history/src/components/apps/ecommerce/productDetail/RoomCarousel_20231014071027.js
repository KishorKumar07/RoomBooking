import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';

import Carousel from 'react-material-ui-carousel'


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

import axios from 'axios';
import BlankCard from 'src/components/shared/BlankCard';
import Skeleton from 'react-loading-skeleton';

const ProductCarousel = () => {
  const[images,setImages]=useState([])
  const [loading, setLoading] = useState(true);

  const username = localStorage.getItem('username');
  const url = window.location.href;
  const parts = url.split('/');
  const roomid = parts[parts.length - 1];

  useEffect(() => {
 
    axios.post('http://localhost:8080/owner/roomdetails/', { username ,roomid}).then((response) => {
      setImages([...response.data.message.images])
      setLoading(false);
    });
  },[]);

  return (
    <Box>
    <Grid>
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
      ): (
        <Carousel sx={{width:'100%'}}>
        {
            images.map( (item, i) => <img  style={{width:'100%',height:'500px'}} src={item} alt={item}></img> )
        }
    </Carousel>
      )}
    </Grid>

    </Box>
  );
};

export default ProductCarousel;
