import React from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
          if(response.data.successMsg==="success"){
            localStorage.setItem("ownername",response.data.username)
            const ownername=localStorage.getItem("ownername")
            navigate(`/owner/${ownername}/dashboard`)
          }
          else if(response.data.failMsg=="fail")
          {
            alert("Wrong Credentials")
          }
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
        <CustomTextField name="email" id="email" type='email' variant="outlined" fullWidth value={formik.values.email}
            onChange={formik.handleChange}/>
      </Box>
     
      <Box>
        <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
        <CustomTextField name="password" id="password" type="password" variant="outlined" fullWidth value={formik.values.password}
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
