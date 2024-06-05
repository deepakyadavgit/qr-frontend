import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ApplyDiscount = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemSelected, setItemSelected] = useState(false);
  const navigate = useNavigate();
  const [discount, setDiscount] = useState("");
  const { itemId } = useParams();

  const handleApplyDiscount = async() => {
    // Replace with actual API call to apply the discount
    // Simulate an API call
    console.log(selectedItem);
    const res = await axios.put(`https://digimenu.onrender.com/api/items/applyDiscount/${userId}`, {
      itemId: selectedItem,
      discount: discount
    },{
      headers: {
        "Content-Type": "application/json",
      },
    }); 
    if (res.data.success) {
      alert("Discount applied successfully!");
      navigate("/dashboard");
    } else {
      alert("Discount not applied successfully!");
    }
  };

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
      console.log(res);
      if (res.data.success) {
        setItems(res.data.data);
      }
    };
    fetchItems();
  }, []);

  const handleProceed = () => {
    if (selectedItem !== null) {
      setItemSelected(true);
    }
  };

  return !itemSelected ? (
    <div className="flex justify-center min-h-screen bg-slate-700">
      <div className="container w-full sm:w-96 bg-[#D9D9D9] relative">
        {/* component heading */}
        <div className="bg-black text-white py-6 sticky top-0 z-10">
          <h1 className="text-2xl px-6">Apply Discount</h1>
        </div>

        {/* component middle section */}
        <div className="flex flex-col gap-5 py-5 p-5">
          <div>
            <h3 className="text-lg font-semibold mb-2">{"Item's list:"}</h3>
            <p className="text-gray-700 mb-4">
              Select an item to apply a discount
            </p>
            {items.length > 0 ? (
              <ul>
                {items.map((item) => (
                  <li
                    key={item._id}
                    className="mb-4 flex justify-between items-center border p-4 rounded-lg bg-white shadow-md"
                  >
                    <span>{item.name}</span>
                    <input
                      type="radio"
                      name="selectedItem"
                      value={item._id}
                      onChange={() => setSelectedItem(item._id)}
                      className="form-radio h-5 w-5 text-green-500"
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">
                No available items to apply a discount.
              </p>
            )}
          </div>
        </div>

        {/* sticky proceed button */}
        <div className="sticky bottom-0 bg-white p-4 border-t">
          <button
            onClick={handleProceed}
            disabled={selectedItem === null}
            className={`w-full py-2 rounded-md focus:outline-none focus:ring ${
              selectedItem !== null
                ? "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500"
                : "bg-gray-500 text-white cursor-not-allowed"
            }`}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  ) : (
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
            <label className="block text-gray-700 mb-2">
              Discount Percentage
            </label>
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

export default ApplyDiscount;
