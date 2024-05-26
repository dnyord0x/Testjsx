import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const CarAd = () => {
  const { carId } = useParams();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const toggleFeatures = () => {
    setShowFeatures(!showFeatures);
  };

  const carSpecs = [
    { label: 'Manufacturing Date', value: 'October 2013' },
    { label: 'Engine Type', value: 'Diesel' },
    { label: 'Power', value: '143 hp' },
    { label: 'Mileage [km]', value: '214,000 km' },
    { label: 'Color', value: 'Black' },
    { label: 'Category', value: 'Estate' },
    { label: 'Location', value: 'Dimitrovgrad' },
    { label: 'Contact', value: '0886 376 006' },
  ];

  const carFeatures = [
    'Air Conditioning',
    'Alloy Wheels',
    'Bluetooth',
    'Cruise Control',
    'Parking Sensors',
    'Sunroof',
  ];

  return (
    <div className="container mx-auto p-4 sm:p-8 bg-white rounded-lg shadow-md">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <a href="#" className="text-blue-500 hover:underline mb-2 sm:mb-0">New Search</a>
        <a href="#" className="text-blue-500 hover:underline mb-2 sm:mb-0">Edit Search</a>
        <a href="#" className="text-blue-500 hover:underline mb-2 sm:mb-0">Back</a>
      </div>

      <div className="ad-container flex flex-col md:flex-row gap-4">
        <div className="img-container relative overflow-hidden w-full md:w-1/2">
          <img
            src="https://mobistatic3.focus.bg/mobile/photosmob/779/1/big/11656693441240779_PT.jpg"
            alt="Car Image"
            className="w-full h-auto"
          />

          {/* Small Images Carousel */}
          <div className="small-images flex gap-2 py-2 bg-opacity-80 bg-white absolute bottom-0 left-0 right-0 overflow-x-auto">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="small-image w-20 h-12 overflow-hidden rounded-md shadow-sm">
                <img src="https://via.placeholder.com/100x50" alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="car-info flex-1 bg-white rounded-md shadow-md overflow-hidden">
          <div className="car-details p-4 md:p-6 border-b">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">BMW 320 2.0D</h1>
            <p className="text-green-500 text-lg md:text-xl font-semibold mb-1">$1,000</p>
            <p className="text-gray-500 text-base md:text-lg">$335 per month</p>
          </div>

          <div className="car-specs p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">Technical Specifications</h2>
            <ul className="space-y-2">
              {carSpecs.map((spec, index) => (
                <li key={index} className="flex justify-between">
                  <span className="font-medium">{spec.label}:</span>
                  <span>{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Description (Collapsible) */}
      <div
        className={`description mt-4 sm:mt-8 bg-white rounded-md shadow-md p-4 sm:p-6 cursor-pointer ${showFullDescription ? '' : 'max-h-32 sm:max-h-32 overflow-hidden'}`}
        onClick={toggleDescription}
      >
        <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">Description</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, turpis eget ullamcorper consequat, 
          dolor odio fermentum massa, eget maximus tortor elit id ante. In condimentum feugiat sem, quis ullamcorper 
          ipsum pretium non. Proin nec tortor et arcu venenatis fermentum. In nec velit elit. Vivamus volutpat venenatis 
          eros, non feugiat metus pulvinar quis. Nullam viverra consequat leo vitae bibendum. Vivamus consectetur nisi 
          quis lorem dignissim laoreet. Nulla facilisi. Proin luctus pharetra turpis, vel vehicula sem ultricies nec.
          Fusce ultrices, risus ac dapibus vestibulum, leo purus commodo mi, non dignissim neque magna in justo. Vivamus 
          sed ultrices lorem. Aenean suscipit ante in nunc vehicula, vitae aliquam orci bibendum. Nullam a nibh sit amet erat eleifend sagittis.
        </p>
      </div>

      {/* Features (Collapsible) */}
      <div 
        className={`features mt-4 sm:mt-8 bg-white rounded-md shadow-md p-4 sm:p-6 cursor-pointer ${showFeatures ? '' : 'max-h-20 sm:max-h-20 overflow-hidden'}`} 
        onClick={toggleFeatures}
      >
        <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">Features</h2>
        {showFeatures && (
          <ul className="list-disc list-inside pl-4">
            {carFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
      </div>
    </div> 
  );
};

export default CarAd;
