import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function SearchForm({ onSearch }) {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    yearMin: '',
    yearMax: '',
    priceMin: '',
    priceMax: '',
    region: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch && onSearch(formData); // Call onSearch prop if it's provided
    navigate('/search-results'); // Navigate to SearchResult page
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 mx-auto max-w-md shadow-lg mb-10">
      <div className="grid grid-cols-2 gap-4">
        {[
          { id: 'make', label: 'Make' },
          { id: 'model', label: 'Model' },
          { id: 'yearMin', label: 'Year Min', type: 'number' },
          { id: 'yearMax', label: 'Year Max', type: 'number' },
          { id: 'priceMin', label: 'Price Min ($)', type: 'number' },
          { id: 'priceMax', label: 'Price Max ($)', type: 'number' },
        ].map(({ id, label, type = 'text' }) => (
          <div key={id}>
            <label htmlFor={id} className="block text-gray-700 text-sm font-medium mb-2">
              {label}
            </label>
            <input
              type={type}
              id={id}
              name={id}
              value={formData[id]}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder={`Enter ${label}`}
            />
          </div>
        ))}

        {/* Region (full-width input) */}
        <div className="col-span-2">
          <label htmlFor="region" className="block text-gray-700 text-sm font-medium mb-2">
            Region:
          </label>
          <input
            type="text"
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter Region (e.g., US, EU, Asia)"
          />
        </div>

        {/* Button */}
        <div className="col-span-2 flex justify-center mt-6">
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
