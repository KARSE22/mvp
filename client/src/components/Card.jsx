import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, Typography, Avatar, IconButton  } from '@mui/material';
import exampleData from '../../../data/example.js';
import AddIcon from '@mui/icons-material/Add';

export default function StudyCard (props) {
  const investigatorNameArray = exampleData.FullStudiesResponse.FullStudies[0].Study.ProtocolSection
  .SponsorCollaboratorsModule.ResponsibleParty
  .ResponsiblePartyInvestigatorFullName.split(' ');


  const initials = `${investigatorNameArray[0][0]}${investigatorNameArray[1][0]}`;

  const nameCred = exampleData.FullStudiesResponse.FullStudies[0].Study.ProtocolSection.ContactsLocationsModule.OverallOfficialList.OverallOfficial[0].OverallOfficialName;
  console.log(nameCred);

  const location = exampleData.FullStudiesResponse.FullStudies[0].Study.ProtocolSection.ContactsLocationsModule.LocationList.Location[0].LocationFacility;

  const description = exampleData.FullStudiesResponse.FullStudies[0].Study.ProtocolSection.DescriptionModule.DetailedDescription;

  const title = exampleData.FullStudiesResponse.FullStudies[0].Study.ProtocolSection.IdentificationModule.OfficialTitle;

  return (
    <Card sx={{maxWidth: 345, bgcolor: 'pink'}}>
      <CardHeader title={title}></CardHeader>
      <CardContent>
        <Typography>{description}</Typography>
      </CardContent>
      <CardHeader avatar={<Avatar>
        {initials}
      </Avatar>} title={nameCred} subheader={location} action={<IconButton aria-label='settings' size='large'>
        <AddIcon fontSize='large'/>
      </IconButton>}/>

    </Card>
  )
}

