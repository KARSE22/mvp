import React, {useState} from 'react';
import { TextField, Box } from '@mui/material';
import axios from 'axios';

export default function SearchBar({setStudies}) {
  const [searchExpression, setSearchExpression] = useState('');


  const handleChange = (e) => {
    setSearchExpression(e.target.value);
  };

  const handleClick = async() => {
    try {
      const response = await axios.get('/api/search/expression',{ params: {exp: searchExpression}});
      console.log(response.data);
      setSearchExpression('');
      setStudies(response.data);
    } catch (err) {
      console.log(err);
    }

  }
  return(
    <Box sx={{display: 'flex',
    justifyContent: 'center'}}>
    <Box sx={{width:'75%',
    }}>

      <TextField value={searchExpression} fullWidth label="Search Projects or Health Topics" id="fullWidth" onChange={handleChange} />
    </Box>
    <button onClick={handleClick}>Search</button>
    </Box>
  )
}