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
import CustomSelect from '../theme-elements/CustomSelect';
import CustomCheckbox from '../theme-elements/CustomCheckbox';
import CustomRadio from '../theme-elements/CustomRadio';
import CustomFormLabel from '../theme-elements/CustomFormLabel';
import ParentCard from '../../shared/ParentCard';

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

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [value, setValue] = React.useState('');

  const handleChange2 = (event) => {
    setValue(event.target.value);
  };

  const [number, setNumber] = React.useState('');

  const handleChange3 = (event) => {
    setNumber(event.target.value);
  };

  return (
    <ParentCard title="Create Your Room">
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
        <CustomFormLabel htmlFor="email-text">Email</CustomFormLabel>
        <CustomTextField
          id="email-text"
          type="email"
          variant="outlined"
          fullWidth
        />
        <CustomFormLabel htmlFor="default-outlined-password-input">Floor Size</CustomFormLabel>

        <CustomTextField
          id="default-outlined-password-input"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          fullWidth
        />
        <CustomFormLabel htmlFor="outlined-multiline-static">Number of Beds</CustomFormLabel>

        <CustomTextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
        />
        <CustomFormLabel htmlFor="readonly-text">Amenities</CustomFormLabel>

        <CustomTextField
          id="readonly-text"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          fullWidth
        />
        
        <CustomFormLabel htmlFor="standard-select-number">Minimum Booking Period</CustomFormLabel>
        <CustomSelect
          fullWidth
          id="standard-select-number"
          variant="outlined"
          value={number}
          onChange={handleChange3}
          sx={{
            mb: 2,
          }}
        >
          {numbers.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </CustomSelect>
        <CustomFormLabel htmlFor="standard-select-number">Maximum Booking Period</CustomFormLabel>
        <CustomSelect
          fullWidth
          id="standard-select-number"
          variant="outlined"
          value={number}
          onChange={handleChange3}
          sx={{
            mb: 2,
          }}
        >
         
        </CustomSelect>
        <div>
          <Button color="primary" variant="contained">
            Submit
          </Button>
        </div>
      </form>
    </ParentCard>
  );
};

export default FbDefaultForm;
