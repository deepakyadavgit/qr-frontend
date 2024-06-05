import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TodaysSpecial = () => {
  const [items, setItems] = useState([]);
  const [specials, setSpecials] = useState([]);
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
        setSpecials(() =>
          res.data.data.map((item) => {
            if (item.isSpecial === true) {
              console.log(item._id);
              return item._id;
            }
          })
        );
      }
    };
    fetchItems();
  }, []);

  const handleSpecialToggle = (id) => {
    setSpecials((prevSpecials) =>
      prevSpecials.includes(id)
        ? prevSpecials.filter((specialId) => specialId !== id)
        : [...prevSpecials, id]
    );
  };
  const navigate = useNavigate();

  const handleUpdate = async () => {
    // Replace with actual API call to update specials
    console.log("Today's special items:", specials);
    // Simulate an API call
    console.log("Items before update:", items);
    const updatedItems = specials.filter((item) => {
      return {
        _id: item,
        status: true,
      };
    });
    console.log("Updated items:", updatedItems);
    const res = await axios.put(
      `https://digimenu.onrender.com/api/items/todaysSpecial/${userId}`,
      {
        updatedItems,
      },{
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.data.success) {
      alert("Items updated successfully!");
      navigate("/dashboard");
    } else {
      alert("Items not updated successfully!");
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-slate-700">
      <div className="container w-full sm:w-96 bg-[#D9D9D9] relative">
        {/* component heading */}
        <div className="bg-black text-white py-6 sticky top-0 z-10">
          <h1 className="text-2xl px-6">{"Today's Special"}</h1>
        </div>

        {/* component middle section */}
        <div className="flex flex-col gap-5 py-5 p-5">
          <div>
            <h3 className="text-lg font-semibold mb-2">{"Item's list:"}</h3>
            <p className="text-gray-700 mb-4">
              {"Select items to mark them as Today's Special"}
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
                      type="checkbox"
                      checked={specials.includes(item._id)}
                      onChange={() => handleSpecialToggle(item._id)}
                      className="form-checkbox h-5 w-5 text-green-500"
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No items available.</p>
            )}
          </div>
        </div>

        {/* sticky update button */}
        <div className="sticky bottom-0 bg-white p-4 border-t">
          <button
            onClick={handleUpdate}
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodaysSpecial;
