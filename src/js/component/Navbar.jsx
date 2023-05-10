import React from 'react';
import Favorites from './Favorites.jsx';

const Navbar = () => {
  return (
    <nav className='navbar bg-light'>
      <div className='container justify-content-between'>
        {/* logo */}
        <a className='navbar-brand' href='#'>
          <img
            src='https://www.pngmart.com/files/3/Star-Wars-Logo-PNG-Photos.png'
            alt='Logo'
            width='140px'
            className='d-inline-block align-text-top'
          />
        </a>
        <Favorites />
      </div>
    </nav>
  );
};

export default Navbar;
