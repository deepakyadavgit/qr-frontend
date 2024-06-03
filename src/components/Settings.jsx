// frontend/src/components/Settings.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <button
        className="w-full flex items-center justify-between bg-gray-200 p-4 mb-4 rounded-lg"
        onClick={() => navigate('/EditProfile')}
      >
        <span className="flex items-center">
          <span className="mr-2">👤</span>
          Profile
        </span>
      </button>
      <button
        className="w-full flex items-center justify-between bg-white border p-4 mb-4 rounded-lg"
        onClick={() => navigate('/change-password')}
      >
        <span className="flex items-center">
          <span className="mr-2">🔑</span>
          Change Password
        </span>
      </button>
      <button
        className="w-full flex items-center justify-between bg-white border p-4 mb-4 rounded-lg"
        onClick={() => navigate('/get-qr-code')}
      >
        <span className="flex items-center">
          <span className="mr-2">📲</span>
          Get QR Code
        </span>
      </button>
      <button
        className="w-full flex items-center justify-between bg-white border p-4 mb-4 rounded-lg"
        onClick={() => navigate('/customer-feedback')}
      >
        <span className="flex items-center">
          <span className="mr-2">💬</span>
          Customer Feedback
        </span>
      </button>
      <button
        className="w-full flex items-center justify-between bg-white border p-4 mb-4 rounded-lg"
        onClick={() => navigate('/logout')}
      >
        <span className="flex items-center">
          <span className="mr-2">🚪</span>
          Log Out
        </span>
      </button>
    </div>
  );
};

export default Settings;
