import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
  return (
    <div className='nav'>
      <NavLink exact to='/'>Home</NavLink>
      <NavLink exact to='/about'>About</NavLink>
      <NavLink exact to='/contact'>Contact</NavLink>
    </div>
  );
}

export default Nav;