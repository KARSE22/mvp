import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import StudyCard from './components/Card.jsx';
import NavBar from './components/Navbar.jsx';
import Login from './pages/Login.jsx';
import SearchBar from './components/Search.jsx';
import Display from './components/Display.jsx';
import axios from 'axios';

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios.get('/api/auth/login/success').then((res) => {
      if(res.status === 200 ) {
        console.log(res.data.user);
        setUser(res.data.user)
      } else {
        throw new Error('authentication has been failed');
      }
    })
    .catch((err) => console.log(err))
  }, [])
  return (
    <>
      <CssBaseline/>
      <NavBar user={user}/>
        <h1>Hello World</h1>
        <SearchBar/>
        <h2>Browse By Category</h2>
        <Display/>
        <Login/>
    </>
  )
}

export default App;