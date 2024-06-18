import {
    IconAperture,
    IconBook2,
  } from '@tabler/icons';
  
  import { uniqueId } from 'lodash';
  const usernameguest=localStorage.getItem("usernameguest")
  const MenuitemsGuest = [
    {
      navlabel: true,
      subheader: 'Home',
    },
    {
      id: uniqueId(),
      title: 'Explore Rooms',
      icon: IconAperture,
      href: `/guest/${usernameguest}/explore-rooms`,
  
    }, 
    {
        id: uniqueId(),
        title: 'Booking Status',
        icon: IconBook2,
        href: `/guest/${usernameguest}/booking-status/`,
    
      }, 
  
    
  ];
  
  export default MenuitemsGuest;
  