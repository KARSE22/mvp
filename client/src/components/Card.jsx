import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, Typography, Avatar, IconButton, Box, CardMedia  } from '@mui/material';
// import exampleData from '../../../data/example.js';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from 'axios';
import StudyModal from './Modal.jsx';
import ColorChips from './chip.jsx';


export default function StudyCard ({ study, title, investigatorName, officialName, facilityLocation, description, user, setPersonalList, personalList, keywords, setSearchedStudies}) {
  const [added, setAdded] = useState(null);
  const [selected, setSelected] = useState('');
  const [img, setImg] = useState('https://picsum.photos/200/300');

  const getRandomImg = async() => {
    let str = study.Keyword[0] || 'clinical research'
    let img = await axios.get('/api/search/randomImg', {params: {keyword: str}})
    return img.data;
  }

  useEffect(() => {
    (async() => {
      if (window.localStorage.getItem(`${study.NCTId}`)) {
        setAdded(true);
      }
      //TODO: uncomment if you want to see pictures
      // let image = await getRandomImg();
      // setImg(image);
      // console.log(image);
    })();
    // console.log(study.NCTId);
    // console.log(keywords);
  }, [])

  const handleAdd = async() => {
    setAdded(!added);
    if (added === null || added === false) {
      // setPersonalList([...personalList, study])
      //add to database
      const response =  await axios.post('/api/user/personalList', {
        user: user,
      study: study,
    }).catch((err) => console.log(err))
    //should call for personalList again
      //update personal list
      setPersonalList([...personalList, study]);
      window.localStorage.setItem(`${study.NCTId}`, 'true');
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
      }).catch((err) => console.log(err));
      if (personalList !== undefined) {
        // let index = personalList.indexOf(study.NCTId);
        let current = study;
        let newList = personalList.filter((item) => item.NCTId !== study.NCTId);
        // newList = newList.splice(index, 1);
        setPersonalList(newList);
      }
      window.localStorage.removeItem(`${study.NCTId}`)
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
    <Card sx={{maxWidth: 365, bgcolor: 'pink'}}>
      <CardMedia
        component="img"
        height="150"
        image={img}
        alt={study.Keyword[0]}
      />
      <CardHeader title={title}></CardHeader>
      <CardContent >
        <Box component="div" sx={{overflow: "hidden", textOverflow: "ellipsis", height: '10.5rem'}}>
        {description}
        </Box>
      <StudyModal study={study} title={title} investigatorName={investigatorName} officialName={officialName} facilityLocation={facilityLocation} description={description} user={user} />
      <ColorChips setSearchedStudies={setSearchedStudies} keywords={keywords}/>
      </CardContent>
      <CardHeader avatar={<Avatar>
        {initials}
      </Avatar>} title={officialName} subheader={facilityLocation} action={user && <IconButton aria-label='settings' size='large' onClick={handleAdd}> {added ? <RemoveIcon fontSize='large'/>:<AddIcon fontSize='large'/>  }
      </IconButton>}/>
    </Card >
  )
}

