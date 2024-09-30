import React from 'react';
import { Link } from 'react-router-dom';

function LogoAndIcon() {
  return (
    <div className='nav-logo-and-icon flex ml-5 mt-2'>
      <img
        src='https://www.nku.edu/content/dam/www/images/logo.png'
        alt='logo'
        className='nav-icon w-40' // Adjust the size here
      />
      <Link to='/' className='nav-logo text-[#fff] text-3xl ml-2.5 no-underline font-klavika mt-8 font-bold'></Link>
    </div>
  );
}

export default LogoAndIcon;
