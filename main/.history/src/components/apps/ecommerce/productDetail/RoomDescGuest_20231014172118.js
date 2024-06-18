import React, { useEffect, useState } from 'react';

import {
  Box,
  Typography,
  LinearProgress,
  Tabs,
  Tab,
  Grid,
  Stack,
  Rating,
  Button,
  Paper,
} from '@mui/material';
import { IconPencil } from '@tabler/icons';
import ChildCard from 'src/components/shared/ChildCard';
import axios from 'axios';
import BlankCard from 'src/components/shared/BlankCard';
import Skeleton from 'react-loading-skeleton';
import { useTheme } from '@emotion/react';

// progress
function ProgressBar({ like, star, value, ...others }) {
  return (
    <Box display={'flex'} alignItems="center" gap="20px">
      <Box sx={{ minWidth: 50 }}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(star)} Stars`}</Typography>
      </Box>
      <Box sx={{ width: '100%' }}>
        <LinearProgress value={value} variant="determinate" color="primary" {...others} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="subtitle2">{`(${Math.round(like)})`}</Typography>
      </Box>
    </Box>
  );
}

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const RoomDescGuest = () => {
  const [value, setValue] = React.useState(0);
  const [loading,setLoading]=useState(true)
  const [data, setData] = useState({});
  const username = localStorage.getItem('username');
  const url = window.location.href;
  const parts = url.split('/');
  const roomid = parts[parts.length - 1];
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    axios
      .post('http://localhost:8080/owner/roomdetails/', { username, roomid })
      .then((response) => {
        setData({ ...response.data.message });
        setLoading(false)
      });
  }, []);
  return data ? (
    <ChildCard>
        <Box>
        <>
        {
          loading ? (
            <Grid container spacing={3}>
            {[...Array(10).keys()].map((index) => (
              <Grid
                item
                xs={12}
                lg={4}
                md={4}
                sm={6}
                display="flex"
                alignItems="stretch"
                key={index}
              >
                <BlankCard className="hoverCard">
                  <Skeleton
                    width={300}
                    height={200}
                    animation="wave"
                    variant="rectangular"
                    style={{ backgroundColor: 'black' }}
                  />
                </BlankCard>
              </Grid>
            ))}
          </Grid>
          ) : (
            <>
             <Typography fontWeight="600" variant="h4" mt={1}>
                  {data.roomname}
                </Typography>
                <Typography variant="subtitle2" mt={1} color={theme.palette.text.secondary}>
                 Room Size :  {data.roomsize}
                </Typography>
                <Typography variant="subtitle2" mt={1} color={theme.palette.text.secondary}>
                  Number of beds : {data.numberofbeds}
                </Typography>
                <Typography variant="subtitle2" mt={1} color={theme.palette.text.secondary}>
                 Minimum Booking Period :  {data.minimumbookingperiod}
                </Typography>
                <Typography variant="subtitle2" mt={1} color={theme.palette.text.secondary}>
                 Maximum Booking Period : {data.maximumbookingperiod}
                </Typography>
                <Typography mt={2} variant="h4" fontWeight={400}>
                 
               Rate Per Day : ₹{data.rateperday}
                </Typography>
                
            </>
          )
        }
      </>
        </Box>
        <br></br>
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: 'grey.100' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="primary"
            allowScrollButtonsMobile
            scrollButtons
            indicatorColor="primary"
          >
            <Tab label="Description" {...a11yProps(0)} />
            <Tab label="Reviews" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {loading ? (
                     <Grid container spacing={3}>
                     {[...Array(10).keys()].map((index) => (
                       <Grid
                         item
                         xs={12}
                         lg={4}
                         md={4}
                         sm={6}
                         display="flex"
                         alignItems="stretch"
                         key={index}
                       >
                         <BlankCard className="hoverCard">
                           <Skeleton
                             width={300}
                             height={200}
                             animation="wave"
                             variant="rectangular"
                             style={{ backgroundColor: 'black' }}
                           />
                         </BlankCard>
                       </Grid>
                     ))}
                   </Grid>
          ):(
              <>
              <Typography variant="body1">
              Experience unparalleled comfort at {data.roomname}, where each room offers a generous{' '}
              {data.roomsize} sq.ft. of space and {data.numberofbeds} cozy beds, ensuring a restful
              stay. Our flexible booking options range from a minimum of {data.miniumbookingperiod}{' '}
              days to a maximum of {data.maximumbookingperiod} days, all at a reasonable rate of ₹
              {data.rateperday} per day. <br></br> <br></br>
              Enjoy modern conveniences :
              {data.amenities.split(',').map((amenity, index) => (
                <span key={index}>
                  {amenity.trim()}
                  {index < data.amenities.split(',').length - 1 ? ', ' : ''}
                </span>
              ))}
              <br></br> <br></br>
              {data.roomname} provides the perfect blend of comfort and affordability, promising a
              delightful stay in the heart of the city.
            </Typography>
              </>
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <Paper variant="outlined" sx={{ height: '100%', p: 3 }}>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                  sx={{ height: '100%' }}
                >
                  <Typography variant="subtitle1">Average Rating</Typography>
                  <Typography variant="h1" color="primary" fontWeight={600}>
                    4/5
                  </Typography>
                  <Rating name="rate" value={4} />
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Paper variant="outlined" sx={{ p: 3 }}>
                <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
                  <Grid item xs={12}>
                    <ProgressBar star={1} value={45} like={485} />
                  </Grid>
                  <Grid item xs={12}>
                    <ProgressBar star={2} value={25} like={215} />
                  </Grid>
                  <Grid item xs={12}>
                    <ProgressBar star={3} value={20} like={110} />
                  </Grid>
                  <Grid item xs={12}>
                    <ProgressBar star={4} value={80} like={620} />
                  </Grid>
                  <Grid item xs={12}>
                    <ProgressBar star={5} value={12} like={160} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Paper sx={{ height: '100%', p: 3 }} variant="outlined">
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                  sx={{ height: '100%' }}
                >
                  <Button variant="outlined" size="large" startIcon={<IconPencil />}>
                    Write an Review
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </ChildCard>
  ) : (
    'No Room Details'
  );
};

export default RoomDescGuest;
