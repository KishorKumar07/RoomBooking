import {
  
  IconEdit,
 
  IconAperture,
  IconShoppingCart,

  IconNewSection,
  IconList,
  IconGitPullRequestDraft,
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const username=localStorage.getItem("ownername")
const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconAperture,
    href: `/owner/${username}/dashboard`,

  },
 
  {
    navlabel: true,
    subheader: 'Rooms',
  },
  {
    id: uniqueId(),
    title: 'My Rooms',
    icon: IconShoppingCart,
    href: `/owner/${username}/myrooms`,
  },
  {
    id: uniqueId(),
    title: 'Create Rooms',
    icon: IconNewSection,
    href: `/owner/${username}/create-room/`,
  },
  {
    id: uniqueId(),
    title: 'Edit & Delete Rooms',
    icon: IconEdit,
    href: `/owner/${username}/room-edit/`,
  },

  {
    navlabel: true,
    subheader: 'Guests',
  },
  {
    id: uniqueId(),
    title: 'Booking Requests',
    icon: IconGitPullRequestDraft,
    href: `/owner/${username}/booking-requests/`
  },

  {
    id: uniqueId(),
    title: 'All Guests',
    icon: IconList,
    href: `/owner/${username}/Allguests/`
  },

  
];

export default Menuitems;
