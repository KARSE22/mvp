import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import SearchBar from '../components/Search.jsx';
import Display from '../components/Display.jsx';

export default function Home(props) {
  const [initialStudies, setInitialStudies] = useState([]);

  useEffect(() => {

  }, [])
  return (
    <Box sx={{m: 10}}>
      <SearchBar/>
      { initialStudies.length > 0 && <Display/>}
    </Box>
  )
}