// frontend/src/components/SignupForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupForm(){
  // creating variables to store signup data
  // this variables will also be used to show the update values in the input fields
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // function to handle signup data when user submits the form
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents default submission of the form
    // using axios to post the data to the backend
    // in post, we put the backend's route handler address. This handler will be created in the server file server.js
    axios.post('http://localhost:5000/api/users/register', {email, businessName, password})
    .then(result => {console.log(result)
      // when signup successful, navigate to login page
      navigate('/login');
    })
    .catch(err=> console.log(err));

   
  };

  return (
    <>
    <div className="flex flex-col items-center bg-[#00284d] min-h-screen min-w-screen">
    <div className="heading m-20">
          <p className='text-5xl text-white'>Register to use our app.</p>
        </div>
    <form onSubmit={handleSubmit} className="border-4 sm:w-[90%] md:w-[60%] lg:w-[40%] w-[100%] mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
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
          type="text"
          placeholder="Business Name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          required />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          required />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
      >
        Sign Up
      </button>
    </form>
    <p className='text-center text-white'>Already have an account? <Link to="/login" className="text-xl">
      Login
    </Link></p>
    </div>
    </>
  );
};

export default SignupForm;
