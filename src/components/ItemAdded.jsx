// frontend/src/components/ItemAdded.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemAdded = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Item Added</h2>
      <div className="flex justify-center mb-4">
        <span className="text-6xl text-green-500">✔️</span>
      </div>
      <p className="text-center mb-4">Item Added</p>
      <button
        onClick={() => navigate('/ItemDetails')}
        className="w-full bg-blue-500 text-white py-2 rounded-md mt-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
      >
        Add another item
      </button>
      <button
        onClick={() => navigate('/dashboard')}
        className="w-full bg-gray-500 text-white py-2 rounded-md mt-2 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
      >
        I'll do it later
      </button>
    </div>
  );
};

export default ItemAdded;
