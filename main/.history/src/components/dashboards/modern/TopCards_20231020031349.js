import React from 'react';
import { Box, CardContent, Grid, Typography } from '@mui/material';

import icon1 from '../../../assets/images/svgs/icon-connect.svg';
import icon2 from '../../../assets/images/svgs/icon-user-male.svg';
import icon3 from '../../../assets/images/svgs/icon-briefcase.svg';
import icon4 from '../../../assets/images/svgs/icon-mailbox.svg';
import icon5 from '../../../assets/images/svgs/icon-favorites.svg';
import icon6 from '../../../assets/images/svgs/icon-speech-bubble.svg';
import Logo from 'src/layouts/full/shared/logo/Logo';

const topcards = [
  {
    href: '/user-profile',
    icon: icon2,
    title: 'Profile',
    digits: '3,685',
    bgcolor: 'primary',
  },
  {
    href: '/apps/blog/posts',
    icon: icon3,
    title: 'Blog',
    digits: '256',
    bgcolor: 'warning',
  },
  {
    href: '/apps/calendar',
    icon: icon4,
    title: 'Calendar',
    digits: '932',
    bgcolor: 'secondary',
  },
  {
    href: '/apps/email',
    icon: icon5,
    title: 'Email',
    digits: '$348K',
    bgcolor: 'error',
  },
  {
    href: '/apps/chats',
    icon: icon6,
    title: 'Chats',
    digits: '96',
    bgcolor: 'success',
  },
  {
    href: '/apps/contacts',
    icon: icon1,
    title: 'Contacts',
    digits: '48',
    bgcolor: 'info',
  },
];

const TopCards = () => {
  return (
    <Grid container spacing={3} mt={3}>
      <Grid item xs={12} sm={4} lg={3}>
        <Box bgcolor={'primary.light'} textAlign="center">
          <CardContent>
            <img src={icon1} width="50" />
            <Typography color={'primary.main'} mt={1} variant="subtitle1" fontWeight={600}>
              Total Rooms
            </Typography>
            <Typography color={'primary.main'} variant="h4" fontWeight={600}>
              7
            </Typography>
          </CardContent>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} lg={3}>
        <Box bgcolor={'error.light'} textAlign="center">
          <CardContent>
            <img src={icon2} width="50" />
            <Typography color={'error.main'} mt={1} variant="subtitle1" fontWeight={600}>
              Available Room
            </Typography>
            <Typography color={'error.main'} variant="h4" fontWeight={600}>
              5
            </Typography>
          </CardContent>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} lg={3}>
        <Box bgcolor={'primary.light'} textAlign="center">
          <CardContent>
            <img src={icon2} width="50" />
            <Typography color={'primary.main'} mt={1} variant="subtitle1" fontWeight={600}>
            Total Earnings
            </Typography>
            <Typography color={'primary.main'} variant="h4" fontWeight={600}>
            ₹ 5000
            </Typography>
          </CardContent>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} lg={3}>
        <Box bgcolor={'error.light'} textAlign="center">
          <CardContent>
            <img src={icon2} width="50" />
            <Typography color={'error.main'} mt={1} variant="subtitle1" fontWeight={600}>
              Total Guests
            </Typography>
            <Typography color={'error.main'} variant="h4" fontWeight={600}>
              5
            </Typography>
          </CardContent>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TopCards;
