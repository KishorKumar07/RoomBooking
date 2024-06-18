import React, { useEffect, useState } from 'react';
import { Grid, Button } from '@mui/material';
import Calendar from '@demark-pro/react-booking-calendar';
import axios from 'axios';
import { useNavigate } from 'react-router';

const RoomDetailsGuest = () => {
  const [reservedDates, setReservedDates] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);
  var [startDate, endDate] = selectedDates;

  const ownername = localStorage.getItem('ownername');
  const url = window.location.href;
  const parts = url.split('/');
  const roomid = parts[parts.length - 1];
  const guestname = localStorage.getItem('guestname');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post('http://localhost:8080/owner/get-calender-reserved/', {
        ownername,
        roomid,
      })
      .then((response) => {
        if (response.data.message) {
          const reservedDatesArray = response.data.message.map((booking) => {
            return {
              startDate: new Date(Date.parse(booking.bookingdates.startdate)),
              endDate: new Date(Date.parse(booking.bookingdates.enddate)),
            };
          });
          // console.log(reservedDatesArray);
          // console.log(new Date(2023, 3, 22))
          setReservedDates(reservedDatesArray);
        } else {
          setReservedDates([]); // Set reservedDates to an empty array if there are no reserved dates
        }
      });
  }, [ownername, roomid]);

  useEffect(() => {
    console.log(reservedDates);
  }, [reservedDates]);

  useEffect(() => {
    if (selectedDates.length === 2 && selectedDates[0] && selectedDates[1]) {
      const startdate = selectedDates[0].toISOString();
      const enddate = selectedDates[1].toISOString();
     
    }
  }, []);

  const handleChange = (e) => {
    setSelectedDates(e);
    startDate=selectedDates[0]
    endDate=selectedDates[1]
  };

  const handleSubmit = () => {
    // const status = 'Request Sent';
    // axios
    //   .post('http://localhost:8080/guest/request-booking', {
    //     guestname,
    //     ownername,
    //     roomid,
    //     status,
    //     date,
    //   })
    //   .then((response) => {
    //     if (response.data.message) {
    //       navigate(`/guest/${guestname}/booking-status`);
    //     }
    //   });
    console.log(startDate)
  };

  return (
    <>
      <Grid >
        <Calendar
         style={{ height: '400px' }}
          selectedStart={startDate}
          selectedEnd={endDate}
          reserved={reservedDates}
          onChangeRange={handleChange}
          onOverbook={(e, err) => alert(err)}
          rangeMode
        />
      </Grid>

      <Grid container>
        <Grid item xs={12} lg={5} md={12}>
          <Button
            color="primary"
            size="large"
            fullWidth
            component={Button}
            variant="contained"
            onClick={handleSubmit}
            sx={{ marginTop: '30px', marginLeft: '25px' }}
          >
            Request Booking
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default RoomDetailsGuest;
