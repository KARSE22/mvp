import React from 'react';
import axios from 'axios';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Login(props) {
  const google = () => {
    window.open('api/auth/google', '_self')
  };
  const gitHub = () => {
    window.open('api/auth/github', '_self')
  };

  const faceBook = () => {
    window.open('api/auth/facebook', '_self')
  };

  return (
    <div style={{height: "calc(100vh - 50px)", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{width: '60%', height: '75%', boxShadow: '0px 5px 33px -21px rgba(66, 68, 90, 1)', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '20px', alignContent: 'center', justifyContent: 'center'}}>
        <h1 >Login</h1>
        <div style={{width: '150px', padding: '15px 25px', borderRadius: '5px', color: 'white', backgroundColor: '#df4930', display: 'flex', alignItems: 'center', fontWeight: 'bold', marginBottom: '5px'}} onClick={google}>
          <GoogleIcon sx={{width: 20, heigh: 20, mr: 1}}/>Google

        </div>
        <div style={{width: '150px', padding: '15px 25px', borderRadius: '5px', color: 'white', backgroundColor: '#507cc0', display: 'flex', alignItems: 'center', fontWeight: 'bold', marginBottom: '5px'}} onClick={faceBook} >
          <FacebookIcon sx={{width: 20, heigh: 20, mr: 1}}/> Facebook
        </div >

        <div style={{width: '150px', padding: '15px 25px', borderRadius: '5px', color: 'white', backgroundColor: 'black', display: 'flex', alignItems: 'center', fontWeight: 'bold', marginBottom: '5px'}} onClick={gitHub}>
        <GitHubIcon sx={{width: 20, heigh: 20, mr: 1}} /> GitHub
        </div>
      </div>
    </div>
  )
}