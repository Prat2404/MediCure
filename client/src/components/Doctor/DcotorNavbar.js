import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Auth from '../../utils/Auth';
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <Link className='nav-link' to='/logout'>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
