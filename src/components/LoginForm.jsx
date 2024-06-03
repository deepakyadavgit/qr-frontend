import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users/login', { email, password })
      .then(result => {
        console.log('Login response:', result);
        if (result) {
          
          // Assuming `success` indicates a successful login
          navigate('/dashboard');
        } else {
          alert('Login failed, please check your credentials.');
        }
      })
      .catch(err => {
        console.log('Login error:', err);
        alert('An error occurred. Please try again.');
      });
  };

  return (
    <>
      <div className="flex flex-col items-center bg-[#00284d] min-h-screen min-w-screen">
        <div className="heading m-20">
          <p className='text-5xl text-white'>Welcome to QR-based Digital Menu</p>
        </div>
        <form onSubmit={handleSubmit} className="border-4 sm:w-[90%] md:w-[60%] lg:w-[40%] w-[100%] mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
        <p className='text-center text-white'>Don't have an account? <Link to="/signup" className="text-xl ">
          Sign Up
        </Link></p>
      </div>
    </>
  );
};

export default LoginForm;
