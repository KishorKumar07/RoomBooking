import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

//Carousel slider for product
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

//Carousel slider data
import SliderData from './SliderData';

//fetch product
import { fetchProducts } from '../../../../store/apps/eCommerce/EcommerceSlice';
import axios from 'axios';

const ProductCarousel = () => {
  const [state, setState] = React.useState({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();
  const dispatch = useDispatch();
  const Id = useParams();

  const[images,setImages]=useState([])

  const username = localStorage.getItem('username');
  const url = window.location.href;
  const parts = url.split('/');
  const roomid = parts[parts.length - 1];

  useEffect(() => {
 
    axios.post('http://localhost:8080/owner/roomdetailsImages/', { username ,roomid}).then((response) => {
      setImages([...response.data.message])
      console.log(response.data.message)
    });
  },[]);

  // Get Product
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Get Products
  const product = useSelector((state) => state.ecommerceReducer.products[Id.id - 1]);
  const getProductImage = product ? product.photo : '';

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);

  const { nav1, nav2 } = state;
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 5,
    arrows: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    centerMode: true,
    className: 'centerThumb',
    speed: 500,
  };

  return (
    <Box>
    
      <Slider asNavFor={nav1} ref={(slider) => (slider2.current = slider)} {...settings}>
      
        {SliderData.map((step,index) => (
          <Box key={index} sx={{ p: 1, cursor: 'pointer' }}>
            <img
              src={step}
              alt={step}
              width="100%"
              style={{ borderRadius: '5px' }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductCarousel;
