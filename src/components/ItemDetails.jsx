// frontend/src/components/ItemDetails.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ItemDetails = () => {
  const [itemCategory, setItemCategory] = useState('Uncategorized');
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemType, setItemType] = useState('Pure Veg');
  const [keyIngredients, setKeyIngredients] = useState('');
  const navigate = useNavigate();

  const handleProceed = () => {
    // Save item details to state or context (not implemented here)
    // Navigate to the next step (Pricing)
    navigate('/item-pricing'); // You should replace '/item-pricing' with the actual route for the pricing step
  };

  return (
    <div className="container mx-auto p-4">
      <button
        className="text-blue-500 hover:text-blue-700 mb-4"
        onClick={() => navigate('/AddUpdateItem')}
      >
        ← Back
      </button>
      <h2 className="text-2xl font-semibold mb-4">Item Details</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Item Category</label>
        <select
          value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        >
          <option value="Uncategorized">Uncategorized</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Desserts">Desserts</option>
          <option value="Main Course">Main Course</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Item Name *</label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Item Description</label>
        <textarea
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Type *</label>
        <select
          value={itemType}
          onChange={(e) => setItemType(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          required
        >
          <option value="Pure Veg">Pure Veg</option>
          <option value="Non Veg">Non Veg</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Key Ingredients</label>
        <input
          type="text"
          value={keyIngredients}
          onChange={(e) => setKeyIngredients(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
      </div>
      <button
        onClick={() => navigate('/ItemPricing')}
        className="w-full bg-green-500 text-white py-2 rounded-md mt-2 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
      >
        Proceed
      </button>
    </div>
  );
};

export default ItemDetails;
