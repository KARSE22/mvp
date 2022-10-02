import React from 'react';
import Form from '../components/Form.jsx';
import { Typography } from '@mui/material';

export default function Dashboard({setSearchedStudies, user}) {
  if (user !== undefined) {
    return (
      <div>
        <Typography variant='h1'>Welcome!</Typography>
        <Form setSearchedStudies={setSearchedStudies} user={user}/>
      </div>

    )
  }
}