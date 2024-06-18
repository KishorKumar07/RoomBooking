import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel'

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
    
    <Carousel>
            {
                images.map( (item, i) => <img src={item} alt='image'></img> )
            }
        </Carousel>
    </Box>
  );
};

export default ProductCarousel;
