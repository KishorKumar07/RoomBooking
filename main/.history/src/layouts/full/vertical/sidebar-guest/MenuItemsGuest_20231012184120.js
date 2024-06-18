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
    {
      navlabel: true,
      subheader: 'Rooms',
    },
    {
      id: uniqueId(),
      title: 'My Rooms',
      icon: IconShoppingCart,
      href: '/owner/myrooms',
    },
    {
      id: uniqueId(),
      title: 'Create Rooms',
      icon: IconNewSection,
      href: '/owner/create-room/',
    },
    {
      id: uniqueId(),
      title: 'Edit & Delete Rooms',
      icon: IconEdit,
      href: '/owner/room-edit/',
    },
  
    {
      navlabel: true,
      subheader: 'Guests',
    },
  
    {
      id: uniqueId(),
      title: 'All Guests',
      icon: IconList,
      href: '/owner/Allguests/'
    },
  
    
  ];
  
  export default MenuitemsGuest;
  