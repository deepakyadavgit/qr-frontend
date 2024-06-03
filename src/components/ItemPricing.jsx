import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ItemPricing = () => {
  const [pricingType, setPricingType] = useState('single');
  const [singlePrice, setSinglePrice] = useState('');
  const [servingQuantity, setServingQuantity] = useState('');
  const [multiplePricing, setMultiplePricing] = useState([{ servingName: '', servingQuantity: '', amount: '' }]);
  const navigate = useNavigate();

  const handleAddPricing = () => {
    if (multiplePricing.length < 3) {
      setMultiplePricing([...multiplePricing, { servingName: '', servingQuantity: '', amount: '' }]);
    }
  };

  const handleMultiplePricingChange = (index, field, value) => {
    const updatedPricing = [...multiplePricing];
    updatedPricing[index][field] = value;
    setMultiplePricing(updatedPricing);
  };

  const handleProceed = () => {
    // Save pricing details to state or context (not implemented here)
    // Navigate to the next step (Upload Image)
    navigate('/item-images'); // You should replace '/item-images' with the actual route for the next step
  };

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
            <h2 className="text-xl font-semibold">Item Pricing (2/3)</h2>

            {/* pricing type selection */}
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
                  <div key={index} className="mb-4 border p-4 rounded-lg bg-white shadow-md">
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
                {multiplePricing.length < 3 && (
                  <button
                    onClick={handleAddPricing}
                    className="w-full bg-green-500 text-white py-2 rounded-md mt-2 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
                  >
                    + Add another pricing
                  </button>
                )}
                {multiplePricing.length >= 3 && (
                  <p className="text-red-500 text-sm mt-2">You can add only up to 3 pricings for an item.</p>
                )}
              </div>
            )}

            <button
              onClick={handleProceed}
              className="w-full bg-green-500 text-white py-2 rounded-md mt-2 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemPricing;
