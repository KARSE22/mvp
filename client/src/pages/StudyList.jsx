import React from 'react';

export default function StudyList(props) {
  //make a call to the server to get added studies
  return (
    <Box sx={{display: 'flex', flexFlow: 'row wrap', gap: 5, justifyContent: 'flex-start', alignContent: 'space-between', px: 2, py: 4, border: 5, margin: 'auto', width: '95%', maxWidth: 2000 }}>
    {studies.map((study) => {
      return <Card key={study.NCTId} title={study.BriefTitle} investigatorName={study.OverallOfficialName[0] || 'Unknown Unknown'} officialName={study.OverallOfficialName[0]} facilityLocation={study.LocationFacility[0]} description={study.BriefSummary[0]}/>
    })}
  </Box>
  )
}