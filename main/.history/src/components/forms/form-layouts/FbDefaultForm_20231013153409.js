import React from 'react';
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

 
  const { openFilePicker, filesContent, loading } = useFilePicker({
    accept: '.png',
    multiple:true,
  });

  const uploadImage=()=>{
   filesContent.map((file,index)=>{
    alert("Successfully Uploaded "+file.name)
   })
   
  }

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      number: '',
      password: '',
    },
    onSubmit: (values) => {
      const username=values.username
      const email=values.email
      const number=values.number
      const password=values.password
      
       axios.post('http://localhost:8080/owner/register/', {
          username,
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
          Room Name
        </CustomFormLabel>
        <CustomTextField
          id="default-value"
          variant="outlined"
          fullWidth
        />
        <CustomFormLabel htmlFor="default-value">Email</CustomFormLabel>
        <CustomTextField
          id="email-text"
          type="email"
          variant="outlined"
          fullWidth
        />
        <CustomFormLabel htmlFor="default-value">Floor Size</CustomFormLabel>

        <CustomTextField
          id="default-outlined-password-input"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          fullWidth
        />
        <CustomFormLabel htmlFor="default-value">Number of Beds</CustomFormLabel>

        <CustomTextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
        />
        <CustomFormLabel htmlFor="default-value">Amenities</CustomFormLabel>

        <CustomTextField
          id="readonly-text"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          fullWidth
        />
        
        <CustomFormLabel htmlFor="default-value">Minimum Booking Period</CustomFormLabel>
        <CustomTextField
          id="readonly-text"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          fullWidth
       />
          
     
        <CustomFormLabel htmlFor="default-value">Maximum Booking Period</CustomFormLabel>
        <CustomTextField
          id="readonly-text"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          fullWidth
        />
        
        <Grid sx={{marginTop:'20px'}}>
        <div>
          <Button color="primary" variant="contained" onClick={() => openFilePicker()}>
            Open Images
          </Button>
          <Button sx={{marginLeft:'20px'}} color="primary" variant="contained" onClick={() => uploadImage()}>
            Upload Images
          </Button>
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
