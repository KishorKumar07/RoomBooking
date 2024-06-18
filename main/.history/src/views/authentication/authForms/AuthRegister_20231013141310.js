import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link, useNavigate, useRoutes } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import { Stack } from '@mui/system';
import { useFormik } from 'formik';
import axios from 'axios';

const AuthRegister = ({ title, subtitle, subtext }) => {
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
      
      axios
        .post('http://localhost:8080/owner/register/', {
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
            id="username"
            variant="outlined"
            fullWidth
            value={formik.username}
            onChange={formik.handleChange}
          />
          <CustomFormLabel htmlFor="email">Email Adddress</CustomFormLabel>
          <CustomTextField
            id="email"
            variant="outlined"
            fullWidth
            value={formik.email}
            onChange={formik.handleChange}
          />
          <CustomFormLabel htmlFor="number">Number</CustomFormLabel>
          <CustomTextField
            id="number"
            variant="outlined"
            fullWidth
            value={formik.number}
            onChange={formik.handleChange}
          />
          <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
          <CustomTextField
            id="password"
            variant="outlined"
            fullWidth
            value={formik.password}
            onChange={formik.handleChange}
          />
        </Stack>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          onClick={formik.handleSubmit}
          component={Link}
          to="/owner/login"
        >
          Sign Up
        </Button>
      </Box>
      {subtitle}
    </>
  );
};
export default AuthRegister;
