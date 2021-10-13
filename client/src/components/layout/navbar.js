import React from 'react';
import { Link } from 'react-router-dom';
const Nabar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className='navbar-brand' href='#'>
        Medicure
      </a>
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

export default Nabar;
