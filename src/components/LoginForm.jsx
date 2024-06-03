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
      <div className="flex justify-center min-h-screen bg-slate-700">
        <div className="container w-full sm:w-96 bg-[#D9D9D9]">
          {/* component heading */}
          <div className="bg-black text-white py-6">
            <h1 className="text-2xl px-6">Login</h1>
          </div>

          {/* component middle section */}
          <div className="flex flex-col gap-5 py-5 p-5">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              >
                Login
              </button>
            </form>
            <p className="text-center text-gray-700">
              Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default LoginForm;
