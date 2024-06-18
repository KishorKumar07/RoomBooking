import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Logo from 'src/layouts/full/shared/logo/Logo'
const CustomFormLabel = styled((props) => (
  <Typography
    variant="subtitle1"
    fontWeight={600}
    {...props}
    component="label"
    htmlFor={props.htmlFor}
  />
))(() => ({
  marginBottom: '5px',
  marginTop: '25px',
  display: 'block',
}));

export default CustomFormLabel;
