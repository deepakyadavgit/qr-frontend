import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUpdateCategory = ({ userId }) => {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [editCategoryName, setEditCategoryName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/categories?userId=${userId}`);
      setCategories(response.data);
    } catch (err) {
      console.error('Error fetching categories:', err.response ? err.response.data : err.message);
    }
  };

  const handleAddCategory = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/categories', { name: newCategoryName, userId });
      setCategories([...categories, response.data]);
      setNewCategoryName('');
    } catch (err) {
      console.error('Error adding category:', err.response ? err.response.data : err.message);
    }
  };

  const handleEditCategory = (category) => {
    setEditCategoryId(category._id);
    setEditCategoryName(category.name);
  };

  const handleUpdateCategory = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/categories/${editCategoryId}`, { name: editCategoryName, userId });
      setCategories(categories.map(category => category._id === editCategoryId ? response.data : category));
      setEditCategoryId(null);
      setEditCategoryName('');
    } catch (err) {
      console.error('Error updating category:', err.response ? err.response.data : err.message);
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      await axios.delete(`http://localhost:5000/api/categories/${categoryId}?userId=${userId}`);
      setCategories(categories.filter(category => category._id !== categoryId));
    } catch (err) {
      console.error('Error deleting category:', err.response ? err.response.data : err.message);
    }
  };

  return (
    <>
      <div className="flex justify-center bg-[#00284d] min-h-screen min-w-screen">
        <div className="container w-full sm:w-3/4">
          <div className="container mx-auto p-4">
            <h2 className="my-10 text-5xl text-white">Add/Update Category</h2>

            {/* Form to add a new category */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Add New Category"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
              <button
                onClick={handleAddCategory}
                className="w-full bg-green-500 text-white py-2 rounded-md mt-2 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
              >
                + Add New Category
              </button>
            </div>

            {/* Show all the categories fetched from DB */}
            {categories.map(category => (
              <div key={category._id} className="flex items-center justify-between mb-4 p-4 bg-gray-100 rounded-md shadow-sm">
                {editCategoryId === category._id ? (
                  <>
                    <input
                      type="text"
                      value={editCategoryName}
                      onChange={(e) => setEditCategoryName(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    />
                    <button
                      onClick={handleUpdateCategory}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      ✅
                    </button>
                  </>
                ) : (
                  <>
                    <p>{category.name}</p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEditCategory(category)}
                        className="text-blue-500 hover:text-blue-600"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => handleDeleteCategory(category._id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        🗑️
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUpdateCategory;