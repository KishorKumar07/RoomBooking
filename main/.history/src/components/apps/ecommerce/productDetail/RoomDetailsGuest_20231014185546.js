import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// MUI Elements
import { Grid, Button } from '@mui/material';
import Calendar from '@demark-pro/react-booking-calendar';
import axios from 'axios';

const RoomDetailsGuest = () => {
 

 
  const [data, setData] = useState({});
  const username = localStorage.getItem('username');
  const url = window.location.href;
  const parts = url.split('/');
  const roomid = parts[parts.length - 1];

  useEffect(() => {
    axios
      .post('http://localhost:8080/owner/roomdetails/', { username, roomid })
      .then((response) => {
        setData({ ...response.data.message });
        
      });
  }, []);

  const reserved = [
    {
      startDate: new Date(2023, 3, 22),
      endDate: new Date(2016, 4, 22),
    },
  ];
  const [selectedDates, setSelectedDates] = useState([]);
  const handleChange = (e) => {
    setSelectedDates(e);
  };

  const handleSubmit = () => {
    selectedDates.map((select) => {
      axios.post('http://localhost:8080/guest/request-booking',{
        
      })
      console.log(select.toISOString());
    });
  };

  return (
    <>
      <Calendar
        selected={selectedDates}
        onChange={handleChange}
        onOverbook={(e, err) => alert(err)}
        disabled={(date, state) => !state.isSameMonth}
        reserved={reserved}
        variant="events"
        dateFnsOptions={{ weekStartsOn: 1 }}
        range={true}
      />
      <Grid container >
        <Grid item xs={12} lg={5} md={12}>
          <Button
            color="primary"
            size="large"
            fullWidth
            component={Button}
            variant="contained"
            
            onClick={handleSubmit}
            sx={{marginTop:'-40px',marginLeft:'30px'}}
          >
            Request Booking
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default RoomDetailsGuest;
