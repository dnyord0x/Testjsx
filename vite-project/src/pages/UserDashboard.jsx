// src/UserDashboard.js

import React from 'react';

const UserDashboard = () => {
  return (
    <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg ">
      <header className="flex flex-col md:flex-row justify-between items-center border-b pb-4 mb-4 mt-10">
        <h1 className="text-2xl font-semibold mb-4 md:mb-0">Manage Your Ads</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-blue-500 font-medium border-b-2 border-blue-500">Active</a></li>
            <li><a href="#" className="text-gray-700 font-medium">Inactive</a></li>
            <li><a href="#" className="text-gray-700 font-medium">Expired</a></li>
            <li><a href="#" className="text-gray-700 font-medium">Moderation</a></li>
          </ul>
        </nav>
      </header>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <button className="bg-blue-500 text-white py-1 px-3 rounded mb-4 md:mb-0 md:mr-2">Add Filter</button>
        <input type="text" placeholder="Search by title..." className="p-2 border rounded mb-4 md:mb-0 md:mr-2 w-full md:w-auto"/>
        <select className="p-2 border rounded mb-4 md:mb-0 md:mr-2 w-full md:w-auto">
          <option value="all-categories">All Categories</option>
        </select>
        <select className="p-2 border rounded w-full md:w-auto">
          <option value="sort">Sort</option>
        </select>
      </div>

      <div className="bg-white border rounded-lg shadow-lg p-6 mb-6 flex flex-col md:flex-row items-center">
        <img src="https://picsum.photos/150" alt="Random" className="w-32 h-32 rounded-lg mb-4 md:mb-0 md:mr-6"/>
        <div className="flex-grow">
          <h2 className="text-xl font-semibold mb-2">Turbo GT2052V from 2.5 TDI</h2>
          <p className="text-gray-600 mb-1">Category: Auto Parts, Accessories, Tires and Rims</p>
          <p className="text-gray-600 mb-1">Location: Lozarevo, Burgas</p>
          <p className="text-gray-600 mb-4">Posted: 06.05.2024 - 05.06.2024</p>
          <div className="flex flex-wrap space-x-2 mb-4">
            <button className="bg-blue-500 text-white py-1 px-3 rounded mb-2 md:mb-0">Edit</button>
            <button className="bg-blue-500 text-white py-1 px-3 rounded mb-2 md:mb-0">Renew for 1.59 BGN</button>
            <button className="bg-blue-500 text-white py-1 px-3 rounded mb-2 md:mb-0">Promote</button>
            <button className="bg-blue-500 text-white py-1 px-3 rounded mb-2 md:mb-0">Deactivate</button>
          </div>
          <div className="flex space-x-4 text-gray-600">
            <span className="flex items-center"><i className="fas fa-eye mr-2"></i> 170 views</span>
            <span className="flex items-center"><i className="fas fa-thumbs-up mr-2"></i> 7 likes</span>
            <span className="flex items-center"><i className="fas fa-comment mr-2"></i> 7 messages</span>
          </div>
        </div>
        <div className="text-2xl text-green-600 font-bold mt-4 md:mt-0">
          100 BGN
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
