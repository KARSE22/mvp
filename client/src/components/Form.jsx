import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Grid, TextField, Paper} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled, useTheme } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function FormModal({setSearchedStudies, user}) {
  const navigate = useNavigate();
  let initialValues ={};
  if (window.localStorage.getItem('user')) {
    initialValues = {
      email: window.localStorage.getItem('email'),
      age: null,
      med1:'',
      med2: '',
      med3: '',
      diagnosis1: '',
      diagnosis2: '',
      diagnosis3: '',
      location: '',
    }
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = React.useState('');
  const [info, setInfo] = React.useState(initialValues);

  const handleChange = (e) => {
    // setName(event.target.value);
    setInfo({...info, [e.target.name] : e.target.value})
    console.log(e.target.name);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.post('api/user/infoForm', info)
      console.log(response.data);
      setSearchedStudies(response.data);
      navigate('/search');
    } catch(err) {
      console.log(err)
    }

    console.log('submitted');

  };





  return (
    <div>
      <Paper sx={{m: 5, p: 5}} >
        <form onSubmit={handleSubmit} >
          <Grid container>
            <Grid item xs={6}>
              <TextField required
              variant="outlined"
              label="Age"
              // value={info.email}
              onChange={handleChange}
              name='age'
              type='number'
              sx={{width: '80%', m: 1}}/>
              <Typography variant='h6' sx={{pl: 1}}>Enter Current Medications:</Typography>
              <TextField
              variant="outlined"
              label="Medication 1"
              // value={info.email}
              onChange={handleChange}
              name='med1'
              sx={{width: '80%', m: 1}}/>
              <TextField
              variant="outlined"
              label="Medication 2"
              // value={info.email}
              onChange={handleChange}
              name='med2'
              sx={{width: '80%', m: 1}}/>
              <TextField
              variant="outlined"
              label="Medication 3"
              // value={info.email}
              onChange={handleChange}
              name='med3'
              sx={{width: '80%', m: 1}}/>
            </Grid>
            <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="Location"
              // value={info.email}
              onChange={handleChange}
              name='location'
              sx={{width: '80%', m: 1}}/>
              <Typography variant='h6' sx={{pl: 1}}>Enter Current Diagnosis:</Typography>
              <TextField
              variant="outlined"
              label="Diagnosis 1"
              // value={info.email}
              onChange={handleChange}
              name='diagnosis1'
              sx={{width: '80%', m: 1}}/>
              <TextField
              variant="outlined"
              label="Diagnosis 2"
              // value={info.email}
              onChange={handleChange}
              name='diagnosis2'
              sx={{width: '80%', m: 1}}/>
              <TextField
              variant="outlined"
              label="Diagnosis 3"
              // value={info.email}
              onChange={handleChange}
              name='diagnosis3'
              sx={{width: '80%', m: 1}}/>
            </Grid>
          </Grid>
          <Button sx={{ml: '41.5%', backgroundColor: 'pink', width: '15%', }} type="submit" variant="contained" >Submit</Button>
        </form>
      </Paper>
    </div>

    // <div>
    //   <Button onClick={handleOpen}>FORM</Button>
    //   <Modal
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description"
    //   >
    //     <Box sx={style}>
    //       <Typography id="modal-modal-title" variant="h6" component="h2">
    //         Please enter following details
    //       </Typography>
    //       <FormControl>
    //     <InputLabel htmlFor="component-outlined">Name</InputLabel>
    //     <OutlinedInput
    //       id="component-outlined"
    //       value={name}
    //       onChange={handleChange}
    //       label="Name"
    //     />
    //   </FormControl>
    //     <Button onClick={handleClose}>SUBMIT</Button>
    //     </Box>
    //   </Modal>
    // </div>
  );
}