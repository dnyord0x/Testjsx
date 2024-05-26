import React, { useState } from 'react';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          {isLogin ? 'Welcome Back!' : 'Join Us Today!'}
        </h2>
        <form className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input 
                type="text" 
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your username"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 font-semibold"
          >
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>
        <div className="text-center mt-6">
          <button 
            onClick={toggleForm} 
            className="text-white-600 hover:underline font-medium"
          >
            {isLogin ? 'Create an account' : 'Already have an account? Login'}
          </button>
        </div>
        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
