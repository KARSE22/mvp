import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import StudyCard from '../components/Card.jsx';
import axios from 'axios';


export default function StudyList({user, personalList, setPersonalList, setSearchedStudies}) {

  // useEffect(() => {

  // }, [personalList])

  //make an array of queries and promise.all

    return ( <>
      <h1 style={{marginLeft: '4.5%', marginBottom: 0}}>Studies You're Interested In</h1>
      <Box sx={{display: 'flex', flexFlow: 'row wrap', gap: 5, justifyContent: 'center', alignContent: 'center', px: 2, py: 4,  mt: 1, width: '95%', maxWidth: 2000 }}>
      {personalList.length > 0 && personalList.map((study) => {
        return <StudyCard study={study} key={study.NCTId} user={user}title={study.BriefTitle} investigatorName={study.OverallOfficialName[0] || 'Unknown Unknown'} officialName={study.OverallOfficialName[0]} facilityLocation={study.LocationFacility[0]} description={study.BriefSummary[0]} setPersonalList={setPersonalList} personalList={personalList} keywords={study.Keyword} setSearchedStudies={setSearchedStudies} />
      })}
    </Box>
    </>
    )

}