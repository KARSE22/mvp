import React from 'react';
import { Box } from '@mui/material';
import Card from './Card.jsx';

export default function Display({studies, user, setSearchedStudies}) {
  return (
    // <Box sx={{margin: 'auto', width: '85%', borderColor: 'red',border: 5, display: 'flex', justifyContent: 'center'}}>
    <Box sx={{display: 'flex', flexFlow: 'row wrap', gap: 5, justifyContent: 'center', alignContent: 'center', px: 2, py: 4,  mt: 1, width: '95%', maxWidth: 1500 }}>
      {studies.map((study) => {
        return <Card key={study.NCTId} user={user} study={study} title={study.BriefTitle} investigatorName={study.OverallOfficialName[0] || 'Unknown Unknown'} officialName={study.OverallOfficialName[0]} facilityLocation={study.LocationFacility[0]} description={study.BriefSummary[0]} keywords={study.Keyword.slice(0,5)} setSearchedStudies={setSearchedStudies}/>
      })}
    </Box>

    // </Box>
  )
}