// frontend/src/components/ItemDetails.jsx
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemDetails = () => {
  const [itemCategory, setItemCategory] = useState("Uncategorized");
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemType, setItemType] = useState("Pure Veg");
  const [keyIngredients, setKeyIngredients] = useState("");
  const [componentIndex, setComponentIndex] = useState(1);
  const [pricingType, setPricingType] = useState("single");
  const [singlePrice, setSinglePrice] = useState("");
  const [servingQuantity, setServingQuantity] = useState("");
  const [multiplePricing, setMultiplePricing] = useState([
    { servingName: "", servingQuantity: "", amount: "" },
  ]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const userId = localStorage.getItem("userId");
  const getCategories = async () => {
    try {
      const res = await axios.get(`https://digimenu.onrender.com/api/categories`, {
        params: {
          userId,
        },
      });
      console.log(res);
      if (res.data.success) {
        setCategories(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    if (userId) {
      getCategories();
    }else{
      navigate("/login");
    }
  }, []);

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
    const file = document.createElement("input");
    file.type = "file";
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

  const handleAddPricing = () => {
    if (multiplePricing.length < 3) {
      setMultiplePricing([
        ...multiplePricing,
        { servingName: "", servingQuantity: "", amount: "" },
      ]);
    }
  };

  const handleMultiplePricingChange = (index, field, value) => {
    const updatedPricing = [...multiplePricing];
    updatedPricing[index][field] = value;
    setMultiplePricing(updatedPricing);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const itemData = {
      name: itemName,
      description: itemDescription,
      category: itemCategory,
      keyIngredients: keyIngredients,
      pricingType: pricingType,
      price: singlePrice,
      quantity: servingQuantity,
      pricing: multiplePricing,
      images: images,
      type: itemType
    }

    const res = await axios.post("https://digimenu.onrender.com/api/items", {
      ...itemData,
      userId: localStorage.getItem("userId")
    },{
      headers:{
        "Content-Type": "multipart/form-data"
      }
    })
    if(res.data.success){
      navigate('/item-added');
    }else{
      alert('Item not added successfully!');
    }
  };

  return (
    <>
      <div className="flex justify-center min-h-screen bg-slate-700">
        <div className="container w-full sm:w-96 bg-[#D9D9D9]">
          {/* <button
            className="text-blue-500 hover:text-blue-700 mb-4"
            onClick={() => navigate('/AddUpdateItem')}
          >
            ← Back
          </button> */}

          {/* component heading */}
          <div className="div bg-black text-white py-6">
            <h1 className="text-2xl px-6">Add/Update Item</h1>
          </div>

          {/* component middle section */}
          <div className="flex flex-col  gap-5 py-5 p-5">
            <h2 className="text-xl font-semibold">
              Item Details ({`${componentIndex}`}/3)
            </h2>
            {/* item category */}
            <form onSubmit={handleSubmit}>
              {componentIndex === 1 && (
                <>
                  <div className="">
                    <label className="block text-gray-700">Item Category</label>
                    <select
                      value={itemCategory}
                      onChange={(e) => {
                        setItemCategory(() => setItemCategory(e.target.value));
                        console.log(itemCategory);
                      }}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    >
                      {categories.map((category) => (
                        <option key={category._id} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="">
                    <label className="block text-gray-700">Item Name *</label>
                    <input
                      type="text"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div className="">
                    <label className="block text-gray-700">
                      Item Description
                    </label>
                    <textarea
                      value={itemDescription}
                      onChange={(e) => setItemDescription(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="">
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
                  <div className="">
                    <label className="block text-gray-700">
                      Key Ingredients
                    </label>
                    <textarea
                      value={keyIngredients}
                      onChange={(e) => setKeyIngredients(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    />
                  </div>
                  <button
                    onClick={() => setComponentIndex(2)}
                    type="button"
                    className="w-full bg-green-500 text-white py-2 rounded-md mt-2 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
                  >
                    Proceed
                  </button>
                </>
              )}
              {componentIndex === 2 && (
                <>
                  {/* pricing type selection */}
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Item has single or multiple pricing options?
                    </label>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        id="single"
                        name="pricingType"
                        value="single"
                        checked={pricingType === "single"}
                        onChange={() => setPricingType("single")}
                        className="mr-2"
                      />
                      <label htmlFor="single" className="mr-4">
                        Single Pricing
                      </label>
                      <input
                        type="radio"
                        id="multiple"
                        name="pricingType"
                        value="multiple"
                        checked={pricingType === "multiple"}
                        onChange={() => setPricingType("multiple")}
                        className="mr-2"
                      />
                      <label htmlFor="multiple">Multiple Pricing</label>
                    </div>
                  </div>

                  {pricingType === "single" && (
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">
                        Serving Quantity (if applicable)
                      </label>
                      <input
                        type="text"
                        placeholder="Pieces"
                        value={servingQuantity}
                        onChange={(e) => setServingQuantity(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 mb-4"
                      />
                      <label className="block text-gray-700 mb-2">
                        Enter amount
                      </label>
                      <input
                        type="text"
                        value={singlePrice}
                        onChange={(e) => setSinglePrice(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      />
                    </div>
                  )}

                  {pricingType === "multiple" && (
                    <div className="mb-4">
                      {multiplePricing.map((pricing, index) => (
                        <div
                          key={index}
                          className="mb-4 border p-4 rounded-lg bg-white shadow-md"
                        >
                          <label className="block text-gray-700 mb-2">
                            Serving Name
                          </label>
                          <input
                            type="text"
                            placeholder="Half"
                            value={pricing.servingName}
                            onChange={(e) =>
                              handleMultiplePricingChange(
                                index,
                                "servingName",
                                e.target.value
                              )
                            }
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 mb-4"
                          />
                          <label className="block text-gray-700 mb-2">
                            Serving Quantity (if applicable)
                          </label>
                          <input
                            type="text"
                            placeholder="Pieces"
                            value={pricing.servingQuantity}
                            onChange={(e) =>
                              handleMultiplePricingChange(
                                index,
                                "servingQuantity",
                                e.target.value
                              )
                            }
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 mb-4"
                          />
                          <label className="block text-gray-700 mb-2">
                            Enter amount
                          </label>
                          <input
                            type="text"
                            value={pricing.amount}
                            onChange={(e) =>
                              handleMultiplePricingChange(
                                index,
                                "amount",
                                e.target.value
                              )
                            }
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
                        <p className="text-red-500 text-sm mt-2">
                          You can add only up to 3 pricings for an item.
                        </p>
                      )}
                    </div>
                  )}
                  <div className="flex justify-around">
                    <button
                      type="button"
                      className="w-full bg-red-500 text-white py-2 rounded-md mt-2 hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-50"
                      onClick={() => setComponentIndex(1)}
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setComponentIndex(3)}
                      type="button"
                      className="w-full bg-green-500 text-white py-2 rounded-md mt-2 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
                    >
                      Proceed
                    </button>
                  </div>
                </>
              )}
              {componentIndex === 3 && (
                <>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Upload Item Images (up to 3)
                    </label>
                    <div className="flex flex-wrap">
                      {images.map((image, index) => (
                        <div key={index} className="relative m-2">
                          <img
                            src={image}
                            alt={`Item ${index + 1}`}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
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
                    <div className="flex justify-around">
                      <button
                        type="button"
                        className="w-full bg-red-500 text-white py-2 rounded-md mt-2 hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-50"
                        onClick={() => setComponentIndex(2)}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded-md mt-2 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
                      >
                        Save Item
                      </button>
                    </div>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
