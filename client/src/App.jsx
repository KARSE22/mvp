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
import Dashboard from './pages/Dashboard.jsx';

const App = () => {
  const [user, setUser] = useState(null);
  const [studies, setStudies] = useState([]);
  const [searchedStudies, setSearchedStudies] = useState([]);
  const [recentStudies, setRecentStudies] = useState([]);
  const [studyIds, setStudyIds] = useState([]);
  const [personalList, setPersonalList] = useState([])

  const getStudiesList = async(user) => {
    try {
      if(window.localStorage.getItem('user')) {
        axios.get('/api/user/personalList', {params: {user: user.email}}).then((res) => {
          console.log(res.data)
          setPersonalList(res.data)
        })

      }
    } catch(err) {
      console.log(err);
    }
  };


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

  const getStudyIds = async(email) => {
    try {
      const ids = await axios.get('/api/user/personalListIds', {params: {user : email}});
      console.log(ids.data);
      ids.data.forEach((id => {
        window.localStorage.setItem(`${id}`, 'true');
      }))
      setStudyIds(ids.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getHealthyStudies();
    getRecentStudies();
    axios.get('/api/auth/login/success').then((res) => {
      if(res.status === 200) {
        console.log(res.data.user);
        setUser(res.data.user);
        getStudyIds(res.data.user.email);
        getStudiesList(res.data.user);

      } else {
        throw new Error('authentication failed');
      }
    })
    .catch((err) => console.log(err));

  }, []);

  useEffect(()=> {
    if (user) {
      if (!window.localStorage.getItem('user')) {
        window.localStorage.setItem('user', 'true')
      }
    }
  }, [user]);

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
          <Route path='/' element={<Home studies={studies} user={user} setStudies={setStudies} setSearchedStudies={setSearchedStudies} title={'Featured Studies'} recentStudies={recentStudies} setPersonalList={setPersonalList} personalList={personalList}/> }/>
          <Route path='/login' element={user ? <Navigate to='/'/> : <Login/>}/>
          <Route path='/mystudies' element={!user ? <Navigate to='/login'/> : <StudyList setSearchedStudies={setSearchedStudies}user={user} personalList={personalList} setPersonalList={setPersonalList}/>}></Route>
          <Route path='/search' element={<SearchDisplay studies={searchedStudies} user={user} setStudies={setStudies}  setSearchedStudies={setSearchedStudies} personalList={personalList} setPersonalList={setPersonalList} title={`Search Results`}/>}/>
          <Route path='/dashboard' element={!user ? <Navigate to='/login'/> :<Dashboard setSearchedStudies={setSearchedStudies}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;