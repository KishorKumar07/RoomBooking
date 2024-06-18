import React, { useEffect, useState } from 'react';
import { FormControlLabel, Button, Grid, RadioGroup, FormControl, MenuItem } from '@mui/material';
import CustomTextField from '../theme-elements/CustomTextField';

import CustomCheckbox from '../theme-elements/CustomCheckbox';
import CustomRadio from '../theme-elements/CustomRadio';
import CustomFormLabel from '../theme-elements/CustomFormLabel';
import ParentCard from '../../shared/ParentCard';
import { useFilePicker } from 'use-file-picker';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';

const numbers = [
  {
    value: 'one',
    label: 'One',
  },
  {
    value: 'two',
    label: 'Two',
  },
  {
    value: 'three',
    label: 'Three',
  },
  {
    value: 'four',
    label: 'Four',
  },
];

const FbRoomEditForm = () => {
  const [images, setImages] = useState([]);
  const username = localStorage.getItem('username');
  const url = window.location.href;
  const parts = url.split('/');
  const roomid = parts[parts.length - 1];
  const [data,setData]=useState({})
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
  
  useEffect(()=>{
    axios.post('http://localhost:8080/owner/roomdetails/',{
      username,
      roomid
    }).then((response)=>{
      console.log(response.data.message)
      setData({...response.data.message})
    })
  },[])

  const formik = useFormik({
    initialValues: {
      roomid:data.roomid,
      roomname:data.roomname,
      roomsize:data.roomsize,
      numberofbeds:data.numberofbeds,
      amenities: data.amenities,
      minimumbookingperiod:data.minimumbookingperiod,
      maximumbookingperiod:data.maximumbookingperiod,
      amountPerDay: data.amountperday,
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
    <ParentCard title="Edit Room">
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

export default FbRoomEditForm;
