import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import { Stack } from '@mui/system';
import axios from 'axios';
import { useFormik } from 'formik';
const AuthRegisterGuest = ({ title, subtitle, subtext }) =>{
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      guestname: '',
      email: '',
      number: '',
      password: '',
    },
    onSubmit: (values) => {
      const guestname=values.guestname
      const email=values.email
      const number=values.number
      const password=values.password
      
      axios
        .post('http://localhost:8080/guest/register/', {
          guestname,
          email,
          number,
          password,
        })
        .then(() => {
          alert('Registration succesfull');
          navigate('/guest/login')
        })
        .catch((err) => {
          console.log(err);
        });
   
    },
  });
  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h3" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <Box>
        <Stack mb={3}>
          <CustomFormLabel htmlFor="name">Username</CustomFormLabel>
          <CustomTextField
            name="guestname"
            id="username"
            variant="outlined"
            fullWidth
            value={formik.values.guestname}
            onChange={formik.handleChange}
          />
          <CustomFormLabel htmlFor="email">Email Adddress</CustomFormLabel>
          <CustomTextField
           name="email"
            id="email"
            variant="outlined"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <CustomFormLabel htmlFor="number">Number</CustomFormLabel>
          <CustomTextField
          name="number"
            id="number"
            variant="outlined"
            fullWidth
            value={formik.values.number}
            onChange={formik.handleChange}
          />
          <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
          <CustomTextField
          name="password"
            id="password"
            variant="outlined"
            type="password"
            fullWidth
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </Stack>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          onClick={formik.handleSubmit}
          
        >
          Sign Up
        </Button>
      </Box>
      {subtitle}
    </>
  );
}

export default AuthRegisterGuest;
