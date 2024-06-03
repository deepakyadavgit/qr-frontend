// frontend/src/components/ItemPricing.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ItemPricing = () => {
  const [pricingType, setPricingType] = useState('single');
  const [singlePrice, setSinglePrice] = useState('');
  const [servingQuantity, setServingQuantity] = useState('');
  const [multiplePricing, setMultiplePricing] = useState([{ servingName: '', servingQuantity: '', amount: '' }]);
  const navigate = useNavigate();

  const handleAddPricing = () => {
    setMultiplePricing([...multiplePricing, { servingName: '', servingQuantity: '', amount: '' }]);
  };

  const handleProceed = () => {
    // Save pricing details to state or context (not implemented here)
    // Navigate to the next step (Upload Image)
    navigate('/upload-image'); // You should replace '/upload-image' with the actual route for the next step
  };

  const handleMultiplePricingChange = (index, field, value) => {
    const updatedPricing = [...multiplePricing];
    updatedPricing[index][field] = value;
    setMultiplePricing(updatedPricing);
  };

  return (
    <div className="container mx-auto p-4">
      <button
        className="text-blue-500 hover:text-blue-700 mb-4"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
      <h2 className="text-2xl font-semibold mb-4">Item Pricing</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Item has single or multiple pricing options?</label>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="single"
            name="pricingType"
            value="single"
            checked={pricingType === 'single'}
            onChange={() => setPricingType('single')}
            className="mr-2"
          />
          <label htmlFor="single" className="mr-4">Single Pricing</label>
          <input
            type="radio"
            id="multiple"
            name="pricingType"
            value="multiple"
            checked={pricingType === 'multiple'}
            onChange={() => setPricingType('multiple')}
            className="mr-2"
          />
          <label htmlFor="multiple">Multiple Pricing</label>
        </div>
      </div>

      {pricingType === 'single' && (
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Serving Quantity (if applicable)</label>
          <input
            type="text"
            placeholder="Pieces"
            value={servingQuantity}
            onChange={(e) => setServingQuantity(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 mb-4"
          />
          <label className="block text-gray-700 mb-2">Enter amount</label>
          <input
            type="text"
            value={singlePrice}
            onChange={(e) => setSinglePrice(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
      )}

      {pricingType === 'multiple' && (
        <div className="mb-4">
          {multiplePricing.map((pricing, index) => (
            <div key={index} className="mb-4 border p-4 rounded-lg bg-gray-100">
              <label className="block text-gray-700 mb-2">Serving Name</label>
              <input
                type="text"
                placeholder="Half"
                value={pricing.servingName}
                onChange={(e) => handleMultiplePricingChange(index, 'servingName', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 mb-4"
              />
              <label className="block text-gray-700 mb-2">Serving Quantity (if applicable)</label>
              <input
                type="text"
                placeholder="Pieces"
                value={pricing.servingQuantity}
                onChange={(e) => handleMultiplePricingChange(index, 'servingQuantity', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 mb-4"
              />
              <label className="block text-gray-700 mb-2">Enter amount</label>
              <input
                type="text"
                value={pricing.amount}
                onChange={(e) => handleMultiplePricingChange(index, 'amount', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>
          ))}
          <button
            onClick={handleAddPricing}
            className="w-full bg-green-500 text-white py-2 rounded-md mt-2 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
          >
            + Add another pricing
          </button>
        </div>
      )}

      <button
        onClick={() => navigate('/ItemImages')}
        className="w-full bg-green-500 text-white py-2 rounded-md mt-2 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
      >
        Proceed
      </button>
    </div>
  );
};

export default ItemPricing;
