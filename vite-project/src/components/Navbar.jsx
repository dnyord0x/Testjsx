import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-[#00df9a]">
          <Link to="/">Car Marketplace</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/car-search-form" className="hover:text-gray-400">Sell</Link>
          <Link to="/search-results" className="hover:text-gray-400">Search Results</Link>
          <Link to="/login" className="hover:text-gray-400">Login</Link>
          <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
        </div>
        <div className="block md:hidden" onClick={handleNav}>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={`fixed top-0 left-0 w-[60%] h-full bg-[#000300] border-r border-gray-900 transform ${nav ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <div className="text-xl font-bold text-[#00df9a] m-4">
            <Link to="/" onClick={handleNav}>Car Marketplace</Link>
          </div>
          <li className="p-4 border-b border-gray-600">
            <Link to="/" onClick={handleNav}>Home</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/car-search-form" onClick={handleNav}>Sell</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/search-results" onClick={handleNav}>Search Results</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/login" onClick={handleNav}>Login</Link>
          </li>
          <li className="p-4">
            <Link to="/dashboard" onClick={handleNav}>Dashboard</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
