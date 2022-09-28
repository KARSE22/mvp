import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import StudyCard from './components/Card.jsx';
import NavBar from './components/Navbar.jsx';
import Login from './pages/Login.jsx';
import SearchBar from './components/Search.jsx';
import Display from './components/Display.jsx';
import axios from 'axios';
import Home from './pages/Home.jsx';
import StudyList from './pages/StudyList.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState(null);
  const [studies, setStudies] = useState([]);

  const getHealthyStudies = async() => {
    try {
      const response = await axios.get('/api/home/initialPage');
      console.log(response.data);
      // setSearchExpression('');
      setStudies(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getHealthyStudies();
    axios.get('/api/auth/login/success').then((res) => {
      if(res.status === 200 ) {
        console.log(res.data.user);
        setUser(res.data.user);

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
          <Route path='/' element={<Home studies={studies}/>}/>
          <Route path='/login' element={user ? <Navigate to='/'/> : <Login/>}/>
          <Route path='/mystudies' element={<StudyList/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;