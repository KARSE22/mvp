import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import StudyCard from './components/Card.jsx';
import NavBar from './components/Navbar.jsx';
import Login from './pages/Login.jsx';
import SearchBar from './components/Search.jsx';
import Display from './components/Display.jsx';
import axios from 'axios';
import Home from './pages/Home.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState(null);
  const [studies, setStudies] = useState([]);

  useEffect(() => {
    axios.get('/api/auth/login/success').then((res) => {
      if(res.status === 200 ) {
        console.log(res.data.user);
        setUser(res.data.user)
      } else {
        throw new Error('authentication failed');
      }
    })
    .catch((err) => console.log(err))
  }, [])
  return (
    <>
      <CssBaseline/>
      <BrowserRouter>
      <NavBar user={user} setUser={setUser}/>
        {/* <h1>Hello World</h1>
        <SearchBar setStudies={setStudies}/>
        <Home/>
        <h2>Browse By Category</h2>
        <Display studies={studies} /> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={user ? <Navigate to='/'/> : <Login/>}/>
          <Route path='/dashboard'></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;