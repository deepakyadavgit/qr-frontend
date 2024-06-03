// frontend/src/components/AddUpdateItem.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUpdateItem = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  // Simulate fetching items from an API
  useEffect(() => {
    const fetchItems = async () => {
      // Replace with actual API call
      const itemData = [
        { id: 1, name: 'Cafe Mocha' },
        { id: 2, name: 'Latte' },
        { id: 3, name: 'Espresso' },
        // Add more items as needed
      ];
      setItems(itemData);
    };

    fetchItems();
  }, []);

  const handleAddNewItem = () => {
    // Navigate to a page to add a new item or open a modal (not implemented here)
    console.log('Add New Item');
  };

  const handleEditItem = (id) => {
    // Navigate to a page to edit the item or open a modal (not implemented here)
    console.log(`Edit Item ${id}`);
  };

  return (
    <div className="container mx-auto p-4">
        {/* code for back button on the top */}
      <button
        className="text-blue-500 hover:text-blue-700 mb-4"
        onClick={() => navigate('/dashboard')}
      >
        ← Back
      </button>

        {/* code for button to add new item */}
      <h2 className="text-2xl font-semibold mb-4">Add/Update Item</h2>
      <button
        onClick={() => navigate('/ItemDetails')}
        className="w-full flex items-center justify-center bg-gray-200 p-4 mb-4 rounded-lg"
      >
        <span className="mr-2">➕</span>
        Add New Item
      </button>
      <div>
        <h3 className="text-lg font-semibold mb-2">Already Added Items:</h3>
        {items.length > 0 ? (
          <ul>
            {items.map(item => (
              <li key={item.id} className="mb-4 flex justify-between items-center border p-4 rounded-lg bg-white shadow-md">
                <span>{item.name}</span>
                <button
                  onClick={() => handleEditItem(item.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  ✏️ Edit
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No items added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AddUpdateItem;
