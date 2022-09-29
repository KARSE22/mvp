import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import StudyCard from '../components/Card.jsx';
import axios from 'axios';


export default function StudyList({user}) {
  const [personalList, setPersonalList] = useState([])
  //make a call to the server to get added studies
  useEffect(() => {
    axios.get('/api/user/personalList', {params: {user: user.email}}).then((res) => {
      console.log(res.data)
      setPersonalList(res.data)
    })
  }, [])
  //make an array of queries and promise.all
  return (
    <Box sx={{display: 'flex', flexFlow: 'row wrap', gap: 5, justifyContent: 'flex-start', alignContent: 'space-between', px: 2, py: 4, border: 5, margin: 'auto', width: '95%', maxWidth: 2000 }}>
    {personalList.map((study) => {
      return <StudyCard key={study.NCTId} user={user}title={study.BriefTitle} investigatorName={study.OverallOfficialName[0] || 'Unknown Unknown'} officialName={study.OverallOfficialName[0]} facilityLocation={study.LocationFacility[0]} description={study.BriefSummary[0]} />
    })}
  </Box>
  )
}