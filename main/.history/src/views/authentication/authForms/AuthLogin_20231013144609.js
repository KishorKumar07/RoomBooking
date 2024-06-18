import React from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import axios from 'axios';
import { useFormik } from 'formik';


const AuthLogin = ({ title, subtitle, subtext }) => {
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',  
      password: '',
    },
    onSubmit: (values) => {
      const email=values.email
      const password=values.password
      
      axios
        .post('http://localhost:8080/owner/login/', {
          email,
          password,
        })
        .then((response)=>{    

            localStorage.setItem("username",response.data.username)
            const username=localStorage.getItem("username")
            navigate(`/owner/${username}/dashboard`)
          
        })
   
    },
  });

  return(
    <>
    {title ? (
      <Typography fontWeight="700" variant="h3" mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}
     <Stack>
     <Box>
        <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
        <CustomTextField id="email" type='email' variant="outlined" fullWidth value={formik.email}
            onChange={formik.handleChange}/>
      </Box>
     
      <Box>
        <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
        <CustomTextField id="password" type="password" variant="outlined" fullWidth value={formik.password}
            onChange={formik.handleChange} />
      </Box>
     
    </Stack>
    <Box>
      <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        sx={{marginTop:'40px'}}
        type="submit"
        onClick={formik.handleSubmit}
      >
        Sign In
      </Button>
    </Box>
    {subtitle}
  </>
  )
}

export default AuthLogin;
