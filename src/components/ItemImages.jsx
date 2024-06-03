// frontend/src/components/ItemImages.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ItemImages = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    if (images.length < 3) {
      const file = event.target.files[0];
      if (file) {
        const newImage = URL.createObjectURL(file);
        setImages([...images, newImage]);
      }
    }
  };

  const handleImageChange = (index) => {
    const newImages = [...images];
    const file = document.createElement('input');
    file.type = 'file';
    file.onchange = (event) => {
      const newFile = event.target.files[0];
      if (newFile) {
        newImages[index] = URL.createObjectURL(newFile);
        setImages(newImages);
      }
    };
    file.click();
  };

  const handleImageDelete = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSaveItem = () => {
    // Save images to state or context (not implemented here)
    navigate('/item-added');
  };

  return (
    <div className="container mx-auto p-4">
      <button
        className="text-blue-500 hover:text-blue-700 mb-4"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
      <h2 className="text-2xl font-semibold mb-4">Item Images</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Upload Item Images (up to 3)</label>
        <div className="flex flex-wrap">
          {images.map((image, index) => (
            <div key={index} className="relative m-2">
              <img src={image} alt={`Item ${index + 1}`} className="w-24 h-24 object-cover rounded-lg" />
              <button
                onClick={() => handleImageChange(index)}
                className="absolute top-0 right-0 mt-1 mr-1 text-blue-500 hover:text-blue-700"
              >
                ✏️
              </button>
              <button
                onClick={() => handleImageDelete(index)}
                className="absolute bottom-0 right-0 mb-1 mr-1 text-red-500 hover:text-red-700"
              >
                🗑️
              </button>
            </div>
          ))}
          {images.length < 3 && (
            <label className="w-24 h-24 flex items-center justify-center bg-gray-200 border-dashed border-2 border-gray-300 rounded-lg cursor-pointer m-2">
              <span className="text-gray-500">➕</span>
              <input
                type="file"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          )}
        </div>
      </div>
      <button
        onClick={() => navigate('/ItemAdded')}
        className="w-full bg-green-500 text-white py-2 rounded-md mt-2 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
      >
        Save Item
      </button>
    </div>
  );
};

export default ItemImages;
