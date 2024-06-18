import React,{useState} from 'react';
import {
  FormControlLabel,
  Button,
  Grid,
  RadioGroup,
  FormControl,
  MenuItem,
  InputLabel,
  TextField,
} from '@mui/material';
import CustomTextField from '../theme-elements/CustomTextField';
import CustomSelect from '../theme-elements/CustomSelect';
import CustomCheckbox from '../theme-elements/CustomCheckbox';
import CustomRadio from '../theme-elements/CustomRadio';
import CustomFormLabel from '../theme-elements/CustomFormLabel';
import ParentCard from '../../shared/ParentCard';
import FbFilePicker from './FbFilePicker';

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

  const handleUpload=(event)=>{
    
  }
  const [value, setValue] = React.useState('');

  const handleChange2 = (event) => {
    setValue(event.target.value);
  };

  const [number, setNumber] = React.useState('');

  const handleChange3 = (event) => {
    setNumber(event.target.value);
  };

  const [file, setFile] = useState(null);
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
        <CustomSelect
          id="readonly-text"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          fullWidth
        >
          
        </CustomSelect>
        <CustomFormLabel htmlFor="default-value">Maximum Booking Period</CustomFormLabel>
        <CustomSelect
          id="readonly-text"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          fullWidth
        >
        </CustomSelect>
        <InputLabel htmlFor="upload">
        <Button variant="outlined" component="span">
          Upload File
        </Button>
      </InputLabel>
       
      <TextField
        type="file"
        sx={{ display: "none" }}
        id="upload"
        onChange={handleUpload}
      />
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
