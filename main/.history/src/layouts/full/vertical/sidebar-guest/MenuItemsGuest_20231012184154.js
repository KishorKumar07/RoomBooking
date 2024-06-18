import {
    IconEdit,
    IconAperture,
    IconShoppingCart,
    IconNewSection,
    IconList,
    IconBook,
  } from '@tabler/icons';
  
  import { uniqueId } from 'lodash';
  
  const MenuitemsGuest = [
    {
      navlabel: true,
      subheader: 'Home',
    },
    {
      id: uniqueId(),
      title: 'Explore Rooms',
      icon: IconAperture,
      href: '/guest/explore-rooms',
  
    }, 
    {
        id: uniqueId(),
        title: 'Booking Status',
        icon: IconBook,
        href: '/guest/booking-status/',
    
      }, 
  
    
  ];
  
  export default MenuitemsGuest;
  