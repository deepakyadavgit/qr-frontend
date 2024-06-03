import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ApplyDiscount = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  // Simulate fetching items from an API
  useEffect(() => {
    const fetchItems = async () => {
      // Replace with actual API call
      const itemData = [
        { id: 1, name: 'Cafe Mocha', available: true },
        { id: 2, name: 'Latte', available: true },
        { id: 3, name: 'Espresso', available: true },
        { id: 4, name: 'Americano', available: true },
        { id: 5, name: 'Cold Coffee', available: true },
        { id: 6, name: 'Ice Tea', available: true },
        { id: 7, name: 'Cappuchino', available: true },
        // Add more items as needed
      ];
      setItems(itemData.filter(item => item.available));
    };

    fetchItems();
  }, []);

  const handleProceed = () => {
    if (selectedItem !== null) {
      navigate(`/discount-form/${selectedItem}`);
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-slate-700">
      <div className="container w-full sm:w-96 bg-[#D9D9D9] relative">
        {/* component heading */}
        <div className="bg-black text-white py-6 sticky top-0 z-10">
          <h1 className="text-2xl px-6">Apply Discount</h1>
        </div>

        {/* component middle section */}
        <div className="flex flex-col gap-5 py-5 p-5">
          <div>
            <h3 className="text-lg font-semibold mb-2">Item's list:</h3>
            <p className="text-gray-700 mb-4">Select an item to apply a discount</p>
            {items.length > 0 ? (
              <ul>
                {items.map(item => (
                  <li key={item.id} className="mb-4 flex justify-between items-center border p-4 rounded-lg bg-white shadow-md">
                    <span>{item.name}</span>
                    <input
                      type="radio"
                      name="selectedItem"
                      value={item.id}
                      onChange={() => setSelectedItem(item.id)}
                      className="form-radio h-5 w-5 text-green-500"
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No available items to apply a discount.</p>
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
                ? 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500'
                : 'bg-gray-500 text-white cursor-not-allowed'
            }`}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyDiscount;
