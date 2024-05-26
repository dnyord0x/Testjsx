import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const featuredCars = [
  {
    carId: 1,
    imgSrc: 'https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg',
    title: 'Audi S8',
    price: '$30,000',
    yearMonth: 'May 2018',
    region: 'EU Spec',
    fuelType: 'Petrol',
    bodyType: 'Sedan',
    transmission: 'Automatic',
    mileage: '30,000 miles'
  },
  {
    carId: 2,
    imgSrc: 'https://cdn.pixabay.com/photo/2016/12/03/18/57/amg-1880381_960_720.jpg',
    title: 'Mercedes-AMG GT',
    price: '$85,000',
    yearMonth: 'Dec 2020',
    region: 'US Spec',
    fuelType: 'Petrol',
    bodyType: 'Coupe',
    transmission: 'Automatic',
    mileage: '12,000 miles'
  },
  {
    carId: 4,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/04/06/16/46/bmw-2203670_960_720.jpg',
    title: 'BMW X5',
    price: '$60,000',
    yearMonth: 'Jun 2021',
    region: 'EU Spec',
    fuelType: 'Diesel',
    bodyType: 'SUV',
    transmission: 'Automatic',
    mileage: '15,000 miles'
  },
  {
    carId: 4,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/04/06/16/46/bmw-2203670_960_720.jpg',
    title: 'BMW X5',
    price: '$60,000',
    yearMonth: 'Jun 2021',
    region: 'EU Spec',
    fuelType: 'Diesel',
    bodyType: 'SUV',
    transmission: 'Automatic',
    mileage: '15,000 miles'
  },
  {
    carId: 4,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/04/06/16/46/bmw-2203670_960_720.jpg',
    title: 'BMW X5',
    price: '$60,000',
    yearMonth: 'Jun 2021',
    region: 'EU Spec',
    fuelType: 'Diesel',
    bodyType: 'SUV',
    transmission: 'Automatic',
    mileage: '15,000 miles'
  },
  {
    carId: 4,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/04/06/16/46/bmw-2203670_960_720.jpg',
    title: 'BMW X5',
    price: '$60,000',
    yearMonth: 'Jun 2021',
    region: 'EU Spec',
    fuelType: 'Diesel',
    bodyType: 'SUV',
    transmission: 'Automatic',
    mileage: '15,000 miles'
  },
  {
    carId: 4,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/04/06/16/46/bmw-2203670_960_720.jpg',
    title: 'BMW X5',
    price: '$60,000',
    yearMonth: 'Jun 2021',
    region: 'EU Spec',
    fuelType: 'Diesel',
    bodyType: 'SUV',
    transmission: 'Automatic',
    mileage: '15,000 miles'
  },
  {
    carId: 4,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/04/06/16/46/bmw-2203670_960_720.jpg',
    title: 'BMW X5',
    price: '$60,000',
    yearMonth: 'Jun 2021',
    region: 'EU Spec',
    fuelType: 'Diesel',
    bodyType: 'SUV',
    transmission: 'Automatic',
    mileage: '15,000 miles'
  },
  // More featured cars...
];

const newestCars = [
  {
    carId: 3,
    imgSrc: 'https://cdn.pixabay.com/photo/2020/12/22/17/28/car-5855391_960_720.jpg',
    title: 'BMW M4',
    price: '$72,000',
    yearMonth: 'Jan 2022',
    region: 'CA Spec',
    fuelType: 'Petrol',
    bodyType: 'Coupe',
    transmission: 'Manual',
    mileage: '5,500 miles'
  },
  {
    carId: 4,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/04/06/16/46/bmw-2203670_960_720.jpg',
    title: 'BMW X5',
    price: '$60,000',
    yearMonth: 'Jun 2021',
    region: 'EU Spec',
    fuelType: 'Diesel',
    bodyType: 'SUV',
    transmission: 'Automatic',
    mileage: '15,000 miles'
  },
  {
    carId: 4,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/04/06/16/46/bmw-2203670_960_720.jpg',
    title: 'BMW X5',
    price: '$60,000',
    yearMonth: 'Jun 2021',
    region: 'EU Spec',
    fuelType: 'Diesel',
    bodyType: 'SUV',
    transmission: 'Automatic',
    mileage: '15,000 miles'
  },
  {
    carId: 4,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/04/06/16/46/bmw-2203670_960_720.jpg',
    title: 'BMW X5',
    price: '$60,000',
    yearMonth: 'Jun 2021',
    region: 'EU Spec',
    fuelType: 'Diesel',
    bodyType: 'SUV',
    transmission: 'Automatic',
    mileage: '15,000 miles'
  },
  {
    carId: 4,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/04/06/16/46/bmw-2203670_960_720.jpg',
    title: 'BMW X5',
    price: '$60,000',
    yearMonth: 'Jun 2021',
    region: 'EU Spec',
    fuelType: 'Diesel',
    bodyType: 'SUV',
    transmission: 'Automatic',
    mileage: '15,000 miles'
  },
  {
    carId: 4,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/04/06/16/46/bmw-2203670_960_720.jpg',
    title: 'BMW X5',
    price: '$60,000',
    yearMonth: 'Jun 2021',
    region: 'EU Spec',
    fuelType: 'Diesel',
    bodyType: 'SUV',
    transmission: 'Automatic',
    mileage: '15,000 miles'
  },
  {
    carId: 4,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/04/06/16/46/bmw-2203670_960_720.jpg',
    title: 'BMW X5',
    price: '$60,000',
    yearMonth: 'Jun 2021',
    region: 'EU Spec',
    fuelType: 'Diesel',
    bodyType: 'SUV',
    transmission: 'Automatic',
    mileage: '15,000 miles'
  },
  // More newest cars...
];

const FeaturedSection = () => {
  const [activeTab, setActiveTab] = useState('featured');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderCars = () => {
    const cars = activeTab === 'featured' ? featuredCars : newestCars;
    return cars.map((car, index) => (
      <Link to={`/car-ad/${car.carId}`} key={index} className="group block bg-white rounded-lg shadow-lg overflow-hidden relative">
        <div className="relative">
          <img
            src={car.imgSrc}
            alt={car.title}
            onError={(event) => event.target.src = 'https://via.placeholder.com/400x240?text=Image+Not+Available'}
            className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
          />
          <span className="absolute top-2 right-2 bg-gray-900 text-white text-xs font-semibold px-2.5 py-0.5 rounded">
            {car.price}
          </span>
        </div>
        <div className="p-5">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{car.title}</h2>
          <div className="flex flex-wrap gap-2 mb-3 text-sm">
            <span className="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded">{car.yearMonth}</span>
            <span className="bg-green-100 text-green-800 px-2.5 py-0.5 rounded">{car.region}</span>
            <span className="bg-yellow-100 text-yellow-800 px-2.5 py-0.5 rounded">{car.fuelType}</span>
            <span className="bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded">{car.bodyType}</span>
            <span className="bg-red-100 text-red-800 px-2.5 py-0.5 rounded">{car.transmission}</span>
            <span className="bg-gray-100 text-gray-800 px-2.5 py-0.5 rounded">{car.mileage}</span>
          </div>
        </div>
      </Link>
    ));
  };

  return (
    <div className="container mx-auto py-10 px-4 ">
      
      <div className="flex justify-center mb-8">
        <button
          className={`px-6 py-2 mx-2 font-semibold rounded-full ${activeTab === 'featured' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-600 transition duration-300`}
          onClick={() => handleTabClick('featured')}
        >
          Featured Cars
        </button>
        <button
          className={`px-6 py-2 mx-2 font-semibold rounded-full ${activeTab === 'newest' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-600 transition duration-300`}
          onClick={() => handleTabClick('newest')}
        >
          Newest Cars
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {renderCars()}
      </div>
    </div>
  );
};

export default FeaturedSection;
