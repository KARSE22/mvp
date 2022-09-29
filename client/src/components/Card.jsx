import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, Typography, Avatar, IconButton  } from '@mui/material';
// import exampleData from '../../../data/example.js';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from 'axios';

export default function StudyCard ({ study, title, investigatorName, officialName, facilityLocation, description, user}) {
  const [added, setAdded] = useState(null);
  const [selected, setSelected] = useState('');


  const handleAdd = async() => {
    setAdded(!added);
    if (added === null || added === false) {
      // setPersonalList([...personalList, study])
      //add to database
     const response =  await axios.post('/api/user/personalList', {
       user: user,
      study: study,
    }).catch((err) => console.log(err))
     console.log(response.data);
      console.log('added', study.NCTId);

      // axios
    }
    else if (added ) {
      //remove from database
      const currId = study.NCTId;
      console.log('remove', study.NCTId);
      // const newList = personalList.filter((study) => {
      //   return study.NCTId !== currId;
      // })
      // setPersonalList(newList);
      const response =  await axios.put('/api/user/personalList', {
        user: user,
       study: study,
     }).catch((err) => console.log(err))
      console.log(response.data);
      // console.log(personalList)
    }
  };
  const investigatorNameArray = investigatorName.split(' ');


  const initials = `${investigatorNameArray[0][0]}${investigatorNameArray[1][0]}`;


//TODO: when they click add, it is going to send a post request to add
  //which will call the database to find or create the study
  //then the database will also update the user array of studies which will return the updated data and iterate over the new array

  return (
    <Card sx={{maxWidth: 345, bgcolor: 'pink'}}>
      <CardHeader title={title}></CardHeader>
      <CardContent>
        <Typography>{description}</Typography>
      </CardContent>
      <CardHeader avatar={<Avatar>
        {initials}
      </Avatar>} title={officialName} subheader={facilityLocation} action={user && <IconButton aria-label='settings' size='large' onClick={handleAdd}> {added ? <RemoveIcon fontSize='large'/>:<AddIcon fontSize='large'/>  }
      </IconButton>}/>

    </Card>
  )
}

