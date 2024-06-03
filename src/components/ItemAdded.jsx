import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemAdded = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center min-h-screen bg-slate-700">
        <div className="container w-full sm:w-96 bg-[#D9D9D9]">
          {/* component heading */}
          <div className="bg-black text-white py-6">
            <h1 className="text-2xl px-6">Add/Update Item</h1>
          </div>

          {/* component middle section */}
          <div className="flex flex-col gap-5 py-5 p-5">
            <h2 className="text-xl font-semibold">Item Added</h2>
            <div className="flex justify-center mb-4">
              <span className="text-6xl text-green-500">✔️</span>
            </div>
            <p className="text-center mb-4">Item has been successfully added.</p>

            <button
              onClick={() => navigate('/item-details')}
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
        </div>
      </div>
    </>
  );
};

export default ItemAdded;
