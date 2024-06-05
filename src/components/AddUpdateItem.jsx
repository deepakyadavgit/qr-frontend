// frontend/src/components/AddUpdateItem.jsx
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUpdateItem = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  // Simulate fetching items from an API
  useEffect(() => {
    const fetchItems = async () => {
      // Replace with actual API call
      const res = await axios.get(`https://digimenu.onrender.com/api/items/all/${userId}`,{
        headers: {
          "Content-Type": "application/json",
        },
      });
      setItems(res.data.data);
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
    <>
      <div className="parent-bg flex justify-center  min-h-screen bg-slate-700">
        <div className="container w-full sm:w-96 bg-[#D9D9D9]">
          {/* component heading */}
          <div className="div bg-black text-white py-6">
            <h1 className="text-2xl px-6">Add/Update Item</h1>
          </div>

          {/* component middle section */}
          <div className="flex flex-col  gap-5 py-5 p-5">
            <button
              onClick={() => navigate('/item-details')}
              className="w-full bg-green-500 text-white py-2 rounded-md mt-2 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
            >
              <span className="mr-2">➕</span>
              Add New Item
            </button>
            <div>
              <h3 className="text-lg font-semibold mb-2">Already Added Items:</h3>
              {items.length > 0 ? (
                <ul>
                  {items.map(item => (
                    <li key={item._id} className="mb-4 flex justify-between items-center border p-4 rounded-lg bg-white shadow-md">
                      <span>{item.name}</span>
                      <button
                        onClick={() => handleEditItem(item._id)}
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
        </div>
      </div>
    </>
  );
};

export default AddUpdateItem;
