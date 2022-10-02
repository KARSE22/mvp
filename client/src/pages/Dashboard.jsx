import React from 'react';
import Form from '../components/Form.jsx';

export default function Dashboard({setSearchedStudies}) {
  return (
<div>
  <Form setSearchedStudies={setSearchedStudies}/>
</div>

  )
}