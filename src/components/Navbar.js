// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ onSearch }) {
  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    onSearch(searchText);
  };

  return (
    <nav className="navbar">
      <div>
        <Link className='lin' to="/">Home</Link>
        <Link className='lin' to="/form">Form</Link>
      </div>
      
        <input
          type="text"
          placeholder="Filter here..."
          onChange={handleSearchChange}
        />
    </nav>
  );
}

export default Navbar;
