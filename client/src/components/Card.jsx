import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, Typography, Avatar, IconButton  } from '@mui/material';
// import exampleData from '../../../data/example.js';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function StudyCard ({title, investigatorName, officialName, facilityLocation, description}) {
  const [added, setAdded] = useState(false);
  console.log(investigatorName);
  const investigatorNameArray = investigatorName.split(' ');


  const initials = `${investigatorNameArray[0][0]}${investigatorNameArray[1][0]}`;


  // const location = exampleData.FullStudiesResponse.FullStudies[0].Study.ProtocolSection.ContactsLocationsModule.LocationList.Location[0].LocationFacility;

  // const description = exampleData.FullStudiesResponse.FullStudies[0].Study.ProtocolSection.DescriptionModule.DetailedDescription;

  // const title = exampleData.FullStudiesResponse.FullStudies[0].Study.ProtocolSection.IdentificationModule.OfficialTitle;

  return (
    <Card sx={{maxWidth: 345, bgcolor: 'pink'}}>
      <CardHeader title={title}></CardHeader>
      <CardContent>
        <Typography>{description}</Typography>
      </CardContent>
      <CardHeader avatar={<Avatar>
        {initials}
      </Avatar>} title={officialName} subheader={facilityLocation} action={<IconButton aria-label='settings' size='large' onClick={() => setAdded(!added)}> {added ? <RemoveIcon fontSize='large'/>:<AddIcon fontSize='large'/>  }

      </IconButton>}/>

    </Card>
  )
}

