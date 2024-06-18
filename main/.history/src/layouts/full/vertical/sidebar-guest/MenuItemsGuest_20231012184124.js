import {
    IconEdit,
    IconAperture,
    IconShoppingCart,
    IconNewSection,
    IconList,
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
        title: 'Explore Rooms',
        icon: IconAperture,
        href: '/guest/booking-status/',
    
      }, 
  
    
  ];
  
  export default MenuitemsGuest;
  