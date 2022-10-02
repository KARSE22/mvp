import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import SearchBar from '../components/Search.jsx';
import Display from '../components/Display.jsx';
import FormModal from '../components/Form.jsx';

//TODO: when a user is not logged in, they will get the healthy individuals query, but when they are logged in, they will get studies based on the interests they put in the database

export default function Home({studies, user, setStudies, setSearchedStudies, title, recentStudies, setPersonalList, personalList}) {
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
    <FormModal user={user}/>
    // <Box sx={{m: 10}}>
    //   <SearchBar setStudies={setStudies} setSearchedStudies={setSearchedStudies} setPersonalList={setPersonalList} personalList={personalList}/>
    //   <h1 style={{marginLeft: '11%', marginBottom: 0}}>{title}</h1>
    //   <Box sx={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
    //   { studies.length > 0 && <Display setSearchedStudies={setSearchedStudies}user={user} studies={studies} personalList={personalList} setPersonalList={setPersonalList}/>}
    //   </Box>
    //   <h1 style={{marginLeft: '11%', marginBottom: 0}}>Recent Studies</h1>
    //   <Box sx={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
    //   { recentStudies.length > 0 && <Display setSearchedStudies={setSearchedStudies} user={user} studies={recentStudies} personalList={personalList} setPersonalList={setPersonalList}/>}
    //   </Box>
    // </Box>
  )
}