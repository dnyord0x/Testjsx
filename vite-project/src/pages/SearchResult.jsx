import React from 'react';


const cars = [
  {
    imgSrc: 'https://cdn2.focus.bg/mobile/photosmob/864/1/big/11687205206204864_bp.jpg',
    title: 'Audi S8',
    price: '$30,000',
    year: 2018,
    power: '250 HP',
    transmission: 'Automatic',
    mileage: '30,000 miles'
  },
  {
    imgSrc: 'https://cdn2.focus.bg/mobile/photosmob/864/1/big/11687205206204864_bp.jpg',
    title: 'Audi S8',
    price: '$30,000',
    year: 2018,
    power: '250 HP',
    transmission: 'Automatic',
    mileage: '30,000 miles'
  },
  {
    imgSrc: 'https://cdn2.focus.bg/mobile/photosmob/864/1/big/11687205206204864_bp.jpg',
    title: 'Audi S8',
    price: '$30,000',
    year: 2018,
    power: '250 HP',
    transmission: 'Automatic',
    mileage: '30,000 miles'
  },
  {
    imgSrc: 'https://cdn2.focus.bg/mobile/photosmob/864/1/big/11687205206204864_bp.jpg',
    title: 'Audi S8',
    price: '$30,000',
    year: 2018,
    power: '250 HP',
    transmission: 'Automatic',
    mileage: '30,000 miles'
  },
  {
    imgSrc: 'https://cdn2.focus.bg/mobile/photosmob/864/1/big/11687205206204864_bp.jpg',
    title: 'Audi S8',
    price: '$30,000',
    year: 2018,
    power: '250 HP',
    transmission: 'Automatic',
    mileage: '30,000 miles'
  },
  // Add more car objects as needed
];

const CarCard = ({ car }) => (
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <img src={car.imgSrc} alt={car.title} className="w-full h-auto object-cover" />
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-2">{car.title}</h1>
      <small className="text-gray-600">Price: {car.price}</small>
      <div className="mt-2">
        <p><strong>Year:</strong> {car.year}</p>
        <p><strong>Power:</strong> {car.power}</p>
        <p><strong>Transmission:</strong> {car.transmission}</p>
        <p><strong>Mileage:</strong> {car.mileage}</p>
      </div>
    </div>
  </div>
);

const SearchResult = () => (
  <div className="max-w-screen-xl mx-auto p-4">
    <div className="flex justify-between items-center mb-6 space-x-4">
      <small className="cursor-pointer text-gray-600 underline transition-colors duration-300 hover:text-black">Ново Търсене</small>
      <small className="cursor-pointer text-gray-600 underline transition-colors duration-300 hover:text-black">Корекция на Търсене</small>
      <small className="cursor-pointer text-gray-600 underline transition-colors duration-300 hover:text-black">Обратно</small>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
      <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 shadow-md lg:col-span-1">
        Container For Ads
      </div>
    </div>
  </div>
);

export default SearchResult;
