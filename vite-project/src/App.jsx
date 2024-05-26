import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import Text from './components/Text';
import FeaturedSection from './components/FeaturedSection';
import SearchResult from './pages/SearchResult';
import CarListForm from './pages/CarListForm';
import CarAd from './pages/CarAd';
import Footer from './components/Footer';
import LoginRegister from './components/LoginRegister';
import UserDashboard from './pages/UserDashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Text /><SearchForm /><FeaturedSection /></>} />
        <Route path="/car-ad/:carId" element={<CarAd />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/search-results" element={<SearchResult />} />
        <Route path="/car-search-form" element={<CarListForm />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
      <Footer /> {/* Add Footer */}
    </Router>
  );
}

export default App;
