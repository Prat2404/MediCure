import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <Fragment>
      <div className='lading'>
        <Link to='/'>
          <button>Patient</button>
        </Link>
        <Link to='/doctor'>
          <button>Doctor</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Landing;
