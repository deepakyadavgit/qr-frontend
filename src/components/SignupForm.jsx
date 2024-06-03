import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupForm() {
  // Creating variables to store signup data
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle signup data when user submits the form
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default submission of the form
    // Using axios to post the data to the backend
    axios.post('http://localhost:5000/api/users/register', { email, businessName, password })
      .then(result => {
        console.log(result);
        // When signup is successful, navigate to the login page
        navigate('/login');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className="flex justify-center min-h-screen bg-slate-700">
        <div className="container w-full sm:w-96 bg-[#D9D9D9]">
          {/* Component heading */}
          <div className="bg-black text-white py-6">
            <h1 className="text-2xl px-6">Sign Up</h1>
          </div>

          {/* Component middle section */}
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
                <label className="block text-gray-700">Business Name</label>
                <input
                  type="text"
                  placeholder="Business Name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Create Password</label>
                <input
                  type="password"
                  placeholder="Create Password"
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
                Sign Up
              </button>
            </form>
            <p className="text-center text-gray-700">
              Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
