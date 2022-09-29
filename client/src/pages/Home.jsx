import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import SearchBar from '../components/Search.jsx';
import Display from '../components/Display.jsx';

//TODO: when a user is not logged in, they will get the healthy individuals query, but when they are logged in, they will get studies based on the interests they put in the database

export default function Home({studies, user, setStudies, setSearchedStudies}) {
  // const [initialStudies, setInitialStudies] = useState([]);

  // useEffect(() => {
  //   const getHealthyStudies = async() => {
  //     try {
  //       const response = await axios.get('/api/home/initialPage');
  //       // console.log(response.data);
  //       // setSearchExpression('');
  //       setInitialStudies(response.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   getHealthyStudies();
  // }, [])
  return (
    // <SearchBar/>
    // <Box sx={{display: 'flex',
    // justifyContent: 'center'}}>
    //   {initialStudies.length > 0 && <Display studies={initialStudies}/>}

    // {/* <Box sx={{width:'75%',
    // }}>

    //   <TextField value={searchExpression} fullWidth label="Search Projects or Health Topics" id="fullWidth" onChange={handleChange} />
    // </Box> */}
    // </Box>
    <Box sx={{m: 10}}>
      <SearchBar setStudies={setStudies} setSearchedStudies={setSearchedStudies}/>
      { studies.length > 0 && <Display user={user} studies={studies}/>}
    </Box>
  )
}