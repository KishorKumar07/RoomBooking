import {
  
  IconEdit,
 
  IconAperture,
  IconShoppingCart,

  IconNewSection,
  IconList,
  IconGitPullRequest,
  IconQuote,
  IconGitPullRequestDraft,
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
 
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
    title: 'Booking Requests',
    icon: IconGitPullRequestDraft,
    href: '/owner/booking-requests/'
  },

  {
    id: uniqueId(),
    title: 'All Guests',
    icon: IconList,
    href: '/owner/Allguests/'
  },

  
];

export default Menuitems;
