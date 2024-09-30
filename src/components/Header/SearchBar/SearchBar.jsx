import React from 'react';

function SearchBar({ searchTerm, setSearchTerm, handleSearchSubmit }) {
  return (
    <div className="nav-search flex flex-grow justify-center ml-10 mt-2 min-w-0">
      <form onSubmit={handleSearchSubmit} className="search-form w-[75%] flex justify-center">
        <div className="search-container flex flex-row items-center">
          <input
            type="text"
            placeholder="Search..."
            className="search-input text-[#333] font-[Klavika-Medium] w-full max-w-[800px] p-2 rounded-full border-none text-[calc(.8em+0.5vw)] box-border transition-[width,font-size] duration-300 ease-in-out placeholder:text-[#4d4e4e6c] placeholder:opacity-100 focus:outline-none focus:border-2 focus:border-[#29ADB2]
            sm:w-[191px] md:w-auto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon transform -translate-x-[2.5em] w-[calc(1em+0.5vw)] text-yellow-500">
            <img 
              src="images/icons8-search.svg" 
              alt="Search Icon" 
              className="w-full h-full" 
            />
          </span>
        </div> 
      </form>
    </div>
  );
}

export default SearchBar;

