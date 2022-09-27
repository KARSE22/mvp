import React from 'react';
import axios from 'axios';

export default function Login(props) {
  const google = () => {
    window.open('api/auth/google', '_self')
  };
  return (
    <div>
      <h1>Choose a Login Method</h1>
      <button onClick={google}>Login</button>
    </div>
  )
}