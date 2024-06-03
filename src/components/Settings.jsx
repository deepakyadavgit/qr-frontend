import React from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center min-h-screen bg-slate-700">
        <div className="container w-full sm:w-96 bg-[#D9D9D9]">
          {/* component heading */}
          <div className="bg-black text-white py-6">
            <h1 className="text-2xl px-6">Settings</h1>
          </div>

          {/* component middle section */}
          <div className="flex flex-col gap-5 py-5 p-5">
            {/* edit profile button */}
            <button
              className="w-full flex items-center justify-between bg-white border p-4 mb-4 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
              onClick={() => navigate('/edit-profile')}
            >
              <span className="flex items-center">
                <span className="mr-2">👤</span>
                Edit Profile
              </span>
            </button>

            <button
              className="w-full flex items-center justify-between bg-white border p-4 mb-4 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
              onClick={() => navigate('/change-password')}
            >
              <span className="flex items-center">
                <span className="mr-2">🔑</span>
                Change Password
              </span>
            </button>
            <button
              className="w-full flex items-center justify-between bg-white border p-4 mb-4 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
              onClick={() => navigate('/get-qr-code')}
            >
              <span className="flex items-center">
                <span className="mr-2">📲</span>
                Get QR Code
              </span>
            </button>
            <button
              className="w-full flex items-center justify-between bg-white border p-4 mb-4 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
              onClick={() => navigate('/customer-feedback')}
            >
              <span className="flex items-center">
                <span className="mr-2">💬</span>
                Customer Feedback
              </span>
            </button>
            <button
              className="w-full flex items-center justify-between bg-white border p-4 mb-4 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
              onClick={() => navigate('/logout')}
            >
              <span className="flex items-center">
                <span className="mr-2">🚪</span>
                Log Out
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
