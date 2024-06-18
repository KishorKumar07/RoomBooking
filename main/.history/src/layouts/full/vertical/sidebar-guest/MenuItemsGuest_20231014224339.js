import {
    IconAperture,
    IconBook2,
  } from '@tabler/icons';
  
  import { uniqueId } from 'lodash';
  const guestname=localStorage.getItem("guestname")
  const MenuitemsGuest = [
    {
      navlabel: true,
      subheader: 'Home',
    },
    {
      id: uniqueId(),
      title: 'Explore Rooms',
      icon: IconAperture,
      href: `/guest/${guestname}/explore-rooms`,
  
    }, 
    {
        id: uniqueId(),
        title: 'Booking Status',
        icon: IconBook2,
        href: `/guest/${guestname}/booking-status/`,
    
      }, 
  
    
  ];
  
  export default MenuitemsGuest;
  