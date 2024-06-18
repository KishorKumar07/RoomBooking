import {
    IconAward,
    IconBoxMultiple,
    IconPoint,
    IconAlertCircle,
    IconNotes,
    IconCalendar,
    IconMail,
    IconTicket,
    IconEdit,
    IconGitMerge,
    IconCurrencyDollar,
    IconApps,
    IconFileDescription,
    IconFileDots,
    IconFiles,
    IconBan,
    IconStar,
    IconMoodSmile,
    IconBorderAll,
    IconBorderHorizontal,
    IconBorderInner,
    IconBorderVertical,
    IconBorderTop,
    IconUserCircle,
    IconPackage,
    IconMessage2,
    IconBasket,
    IconChartLine,
    IconChartArcs,
    IconChartCandle,
    IconChartArea,
    IconChartDots,
    IconChartDonut3,
    IconChartRadar,
    IconLogin,
    IconUserPlus,
    IconRotate,
    IconBox,
    IconAperture,
    IconShoppingCart,
    IconHelp,
    IconBoxAlignBottom,
    IconBoxAlignLeft,
    IconLayout,
    IconZoomCode,
    IconSettings,
    IconBorderStyle2,
    IconAppWindow,
    IconLockAccess,
    IconNewSection,
    IconList,
  } from '@tabler/icons';
  
  import { uniqueId } from 'lodash';
  
  const Menuitems = [
    {
      navlabel: true,
      subheader: 'Home',
    },
  
    {
      id: uniqueId(),
      title: 'Dashboard',
      icon: IconAperture,
      href: '/owner/dashboard',
  
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
  
  export default Menuitems;
  