import React, { Fragment } from 'react';

function Register() {
  
  return (
      
    <Fragment>
        <form>
        <input
            type='text'
            placeholder='Name'
            name='name' />
            
        <input
            type='text'
            placeholder='Email'
            name='email' />
            
        <input
            type='password'
            placeholder='Password'
            name='password' />
        </form>
    </Fragment>
  );
}

export default Register;
