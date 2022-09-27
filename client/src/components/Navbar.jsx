import React from 'react';

export default function NavBar(props) {
  const logout = () => {
    window.open('/api/auth/logout', "_self")
  }
  return (
    <div>
      <span>Research App</span>
      <ul>
        <li>Name</li>
        <li onClick={logout}>Logout</li>
      </ul>
    </div>
  )
}