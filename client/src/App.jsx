import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import StudyCard from './components/Card.jsx';
import NavBar from './components/Navbar.jsx';
import Login from './pages/Login.jsx';
import SearchBar from './components/Search.jsx';
import Display from './components/Display.jsx';
import axios from 'axios';
import Home from './pages/Home.jsx';
import SearchDisplay from './pages/SearchDisplay.jsx'
import StudyList from './pages/StudyList.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState(null);
  const [studies, setStudies] = useState([]);
  const [searchedStudies, setSearchedStudies] = useState([]);
  const [recentStudies, setRecentStudies] = useState([]);


  const getHealthyStudies = async() => {
    try {
      const response = await axios.get('/api/home/initialPage');
      console.log(response.data);
      // setSearchExpression('');
      setStudies(response.data.slice(0, 3));
    } catch (err) {
      console.log(err);
    }
  };
  const getRecentStudies = async() => {
    try {
      const response = await axios.get('/api/home/recent');
      console.log(response.data);
      // setSearchExpression('');
      setRecentStudies(response.data.slice(0, 3));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getHealthyStudies();
    getRecentStudies();
    axios.get('/api/auth/login/success').then((res) => {
      if(res.status === 200 ) {
        console.log(res.data.user);
        setUser(res.data.user);
        // if (!window.localStorage.getItem('user')) {
        //   window.localStorage.setItem('user', 'true')
        //   setUser(res.data.user);
        // }
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
          <Route path='/' element={<Home studies={studies} user={user} setStudies={setStudies} setSearchedStudies={setSearchedStudies} title={'Featured Studies'}recentStudies={recentStudies}/> }/>
          <Route path='/login' element={user ? <Navigate to='/'/> : <Login/>}/>
          <Route path='/mystudies' element={!user ? <Navigate to='/login'/> : <StudyList user={user}/>}></Route>
          <Route path='/search' element={<SearchDisplay studies={searchedStudies} user={user} setStudies={setStudies}  setSearchedStudies={setSearchedStudies} title={`Search Results`}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;