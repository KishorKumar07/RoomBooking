import React, { useState } from 'react';
import {
  FormControlLabel,
  Button,
  Grid,
  RadioGroup,
  FormControl,
  MenuItem,
  
} from '@mui/material';
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

const FbDefaultForm = () => {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });

  const [images,setImages]=useState([]);
 

  const handlechange=(e)=>{
    for(let i=0;i<e.target.files.length;i++)
    {
         const reader=new FileReader()
         reader.readAsDataURL(e.target.files[i])
        reader.onload=()=>{
          console.log(reader.result)
          setImages([reader.result])
        }
        reader.onerror=(err)=>{
          console.log(err)
        }
    }
  }

  
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      roomid: '',
      roomsize: '',
      numberofbeds: '',
      amenities: '',
      minimumbookingperiod:'',
      maximumbookingperiod:''
    },
    onSubmit: (values) => {
      const roomname=values.username
      const email=values.email
      const number=values.number
      const password=values.password
      
       axios.post('http://localhost:8080/owner/register/', {
          roomname,
          email,
          number,
          password,
        })
        .then(() => {
          alert('Registration succesfull');
          navigate('/owner/login')
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
          id="default-value"
          variant="outlined"
          fullWidth
          value={formik.roomid}
          onChange={formik.handleChange}
        />
      
        <CustomFormLabel htmlFor="default-value">Room Size ( In Square Feet )</CustomFormLabel>

        <CustomTextField
          variant="outlined"
          fullWidth
          value={formik.roomsize}
          onChange={formik.handleChange}
        />
        <CustomFormLabel htmlFor="default-value">Number of Beds</CustomFormLabel>

        <CustomTextField
          variant="outlined"
          fullWidth
          value={formik.numberofbeds}
          onChange={formik.handleChange}
        />
        <CustomFormLabel htmlFor="default-value">Amenities</CustomFormLabel>

        <CustomTextField
          variant="outlined"
          fullWidth
          value={formik.amenities}
          onChange={formik.handleChange}
        />
        
        <CustomFormLabel htmlFor="default-value">Minimum Booking Period</CustomFormLabel>
        <CustomTextField
          variant="outlined"
          fullWidth
          value={formik.minimumbookingperiod}
          onChange={formik.handleChange}
       />
          
     
        <CustomFormLabel htmlFor="default-value">Maximum Booking Period</CustomFormLabel>
        <CustomTextField
          variant="outlined"
          fullWidth
          value={formik.maximumbookingperiod}
          onChange={formik.handleChange}
        />
        
        <Grid sx={{marginTop:'20px'}}>
        <div>
         
          <input type='file' multiple onChange={handlechange}/>
          {/* <Button sx={{marginLeft:'20px'}} color="primary" variant="contained" onClick={() => uploadImage()}>
            Upload Images
          </Button> */}
        </div>

        <br/>
        <div>
          <Button color="primary" variant="contained">
            Submit
          </Button>
        </div>
        </Grid>
        
      </form>
    </ParentCard>
  );
};

export default FbDefaultForm;
