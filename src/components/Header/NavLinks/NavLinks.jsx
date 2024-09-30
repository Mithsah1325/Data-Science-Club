import React from 'react';
import { Link } from 'react-router-dom';

function NavLinks() {
  return (
    <ul className="nav-links flex gap-3 mt-4 ml-4 mr-4">
      <li>
        <Link
          to="/about"
          className="box-border text-white text-[calc(1.1em+0.5vw)] p-2 no-underline transition-all duration-300 ease-in-out hover:bg-[#ffc72c] rounded-full"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/events"
          className="box-border text-white text-[calc(1.1em+0.5vw)] p-2 no-underline transition-all duration-300 ease-in-out hover:bg-[#ffc72c] rounded-full"
        >
          Events
        </Link>
      </li>
      <li>
        <Link
          to="/contacts"
          className="box-border text-white text-[calc(1.1em+0.5vw)] p-2 no-underline transition-all duration-300 ease-in-out hover:bg-[#ffc72c] rounded-full"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavLinks;
