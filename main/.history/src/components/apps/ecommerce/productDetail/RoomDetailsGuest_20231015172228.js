import React, { useEffect, useState } from 'react';
import { Grid, Button } from '@mui/material';
import Calendar from '@demark-pro/react-booking-calendar';
import axios from 'axios';
import { useNavigate } from 'react-router';

const RoomDetailsGuest = () => {
  const [data, setData] = useState({});
  const [reservedDates, setReservedDates] = useState([]); 
  const [selectedDates, setSelectedDates] = useState([]);
  const [date, setDate] = useState({});
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
              startdate: new Date(booking.bookingdates.startdate),
              enddate: new Date(booking.bookingdates.enddate),
            };
          });
          console.log(reservedDatesArray);
          console.log(new Date(2023, 3, 22))
          // setReservedDates(reservedDatesArray);
        } else {
          setReservedDates([]); // Set reservedDates to an empty array if there are no reserved dates
        }
      });
  }, [ownername, roomid]);

  useEffect(() => {
    if (selectedDates.length === 2 && selectedDates[0] && selectedDates[1]) {
      const startdate = selectedDates[0].toISOString();
      const enddate = selectedDates[1].toISOString();
      setDate({ startdate, enddate });
    }
  }, []);

  const handleChange = (e) => {
    setSelectedDates(e);
  };

  const handleSubmit = () => {
    const status = 'Request Sent';
    axios
      .post('http://localhost:8080/guest/request-booking', {
        guestname,
        ownername,
        roomid,
        status,
        date,
      })
      .then((response) => {
        if (response.data.message) {
          navigate(`/guest/${guestname}/booking-status`);
        }
      });
  };

  return (
    <>
      <Calendar
        selected={selectedDates}
        onChange={handleChange}
        onOverbook={(e, err) => alert(err)}
        disabled={(date, state) => !state.isSameMonth}
        reserved={reservedDates} // Use reservedDates state to dynamically set reserved dates
        // components={{
        //   DayCellFooter: ({ innerProps }) => (
        //     <div   {...innerProps}>Booked</div>
        //   ),
        // }}
        variant="events"
        dateFnsOptions={{ weekStartsOn: 1 }}
        range={true}
      />
      <Grid container>
        <Grid item xs={12} lg={5} md={12}>
          <Button
            color="primary"
            size="large"
            fullWidth
            component={Button}
            variant="contained"
            onClick={handleSubmit}
            sx={{ marginTop: '-40px', marginLeft: '30px' }}
          >
            Request Booking
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default RoomDetailsGuest;
