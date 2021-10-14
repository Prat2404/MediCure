import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Auth from '../utils/Auth';
const Navbar = () => {
  if (Auth.loggedIn()) {
    // console.log(localStorage.token);
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/'>
          Medicure
        </Link>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/appointment'>
              Book Appointment
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/logout'>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='navbar-brand' to='/'>
        Medicure
      </Link>
      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/register'>
              Regsiter
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/login'>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
