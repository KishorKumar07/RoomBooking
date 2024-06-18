import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import CustomTextField from '../theme-elements/CustomTextField';
import CustomFormLabel from '../theme-elements/CustomFormLabel';
import ParentCard from '../../shared/ParentCard';
import axios from 'axios';
import { useFormik } from 'formik';


const FbDefaultForm = () => {
  const [images, setImages] = useState([]);
  const username = localStorage.getItem('username');

  const handlechange = (e) => {
    const newImages = [];
    for (let i = 0; i < e.target.files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[i]);
      reader.onload = () => {
        newImages.push(reader.result);
        setImages([...newImages]);
      };
      reader.onerror = (err) => {
        console.log(err);
      };
    }
  };

  const formik = useFormik({
    initialValues: {
      roomid: '',
      roomname: '',
      roomsize: '',
      numberofbeds: '',
      amenities: '',
      minimumbookingperiod: '',
      maximumbookingperiod: '',
      amountPerDay: '',
    },

    onSubmit: (values) => {
      const roomid = values.roomid;
      const roomname = values.roomname;
      const roomsize = values.roomsize;
      const numberofbeds = values.numberofbeds;
      const amenities=values.amenities
      const minimumbookingperiod = values.minimumbookingperiod;
      const maximumbookingperiod = values.maximumbookingperiod;
      const amountperday = values.amountPerDay;

      axios
        .post('http://localhost:8080/owner/create-room/', {
          roomid,
          username,
          roomname,
          roomsize,
          numberofbeds,
          amenities,
          minimumbookingperiod,
          maximumbookingperiod,
          amountperday,
          images,
        })
        .then((response) => {
          console.log(response.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <ParentCard title="Create Room">
      <form>
        <CustomFormLabel
          sx={{
            mt: 0,
          }}
          htmlFor="default-value"
        >
          Room ID
        </CustomFormLabel>
        <CustomTextField
          name="roomid"
          variant="outlined"
          fullWidth
          value={formik.values.roomid}
          onChange={formik.handleChange}
        />

        <CustomFormLabel htmlFor="default-value">Room Size ( In Square Feet )</CustomFormLabel>

        <CustomTextField
          name="roomsize"
          variant="outlined"
          fullWidth
          value={formik.values.roomsize}
          onChange={formik.handleChange}
        />

        <CustomFormLabel htmlFor="default-value">Room Name</CustomFormLabel>

        <CustomTextField
          name="roomname"
          variant="outlined"
          fullWidth
          value={formik.values.roomname}
          onChange={formik.handleChange}
        />
        <CustomFormLabel htmlFor="default-value">Number of Beds</CustomFormLabel>

        <CustomTextField
          name="numberofbeds"
          variant="outlined"
          fullWidth
          value={formik.values.numberofbeds}
          onChange={formik.handleChange}
        />
        <CustomFormLabel htmlFor="default-value">Amenities</CustomFormLabel>

        <CustomTextField
          name="amenities"
          variant="outlined"
          fullWidth
          value={formik.values.amenities}
          onChange={formik.handleChange}
        />

        <CustomFormLabel htmlFor="default-value">Minimum Booking Period</CustomFormLabel>
        <CustomTextField
          name="minimumbookingperiod"
          variant="outlined"
          fullWidth
          value={formik.values.minimumbookingperiod}
          onChange={formik.handleChange}
        />

        <CustomFormLabel htmlFor="default-value">Maximum Booking Period</CustomFormLabel>
        <CustomTextField
          name="maximumbookingperiod"
          variant="outlined"
          fullWidth
          value={formik.values.maximumbookingperiod}
          onChange={formik.handleChange}
        />
        <CustomFormLabel htmlFor="default-value">Rate Per Day</CustomFormLabel>
        <CustomTextField
          name="amountPerDay"
          variant="outlined"
          fullWidth
          value={formik.values.amountPerDay}
          onChange={formik.handleChange}
        />
        <Grid sx={{ marginTop: '20px' }}>
          <div>
            <input type="file" multiple onChange={handlechange} />
          </div>
          <div></div>
          <br />
          <div>
            <Button color="primary" variant="contained" onClick={formik.handleSubmit}>
              Submit
            </Button>
          </div>
        </Grid>
      </form>
    </ParentCard>
  );
};

export default FbDefaultForm;
