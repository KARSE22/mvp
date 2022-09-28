import React from 'react';
import { TextField, Box } from '@mui/material';

export default function SearchBar() {
  return(
    <Box sx={{display: 'flex',
    justifyContent: 'flex-end', mr:1}}>
    <Box sx={{width:'75%',
    }}>

      <TextField fullWidth label="Search Projects or Health Topics" id="fullWidth" />
    </Box>

    </Box>
  )
}