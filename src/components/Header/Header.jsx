import React from 'react';
import LogoAndIcon from './LogoAndIcon/LogoAndIcon.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';
import NavLinks from './NavLinks/NavLinks.jsx';

function Header() {
  return (
    <header className='bg-[#333333] flex flex-col md:flex-row items-center justify-around w-full md:w-auto space-y-4 md:space-y-0 md:space-x-6 p-4'>
      <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
        <LogoAndIcon />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-end w-full md:w-auto space-y-4 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-auto">
          <SearchBar />
        </div>
        <NavLinks />
      </div>
    </header>
  );
}

export default Header;