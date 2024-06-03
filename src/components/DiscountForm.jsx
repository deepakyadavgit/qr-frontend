import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DiscountForm = () => {
  const [discount, setDiscount] = useState('');
  const navigate = useNavigate();
  const { itemId } = useParams();

  const handleApplyDiscount = () => {
    // Replace with actual API call to apply the discount
    console.log(`Applying discount of ${discount}% to item ID: ${itemId}`);
    // Simulate an API call
    setTimeout(() => {
      alert(`Discount of ${discount}% applied to item ID: ${itemId}`);
      navigate('/apply-discount');
    }, 500);
  };

  return (
    <div className="flex justify-center min-h-screen bg-slate-700">
      <div className="container w-full sm:w-96 bg-[#D9D9D9]">
        {/* component heading */}
        <div className="bg-black text-white py-6">
          <h1 className="text-2xl px-6">Apply Discount</h1>
        </div>

        {/* component middle section */}
        <div className="flex flex-col gap-5 py-5 p-5">
          <h2 className="text-xl font-semibold">Enter Discount</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Discount Percentage</label>
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>

          <button
            onClick={handleApplyDiscount}
            className="w-full bg-green-500 text-white py-2 rounded-md mt-2 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
          >
            Apply Discount
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountForm;
