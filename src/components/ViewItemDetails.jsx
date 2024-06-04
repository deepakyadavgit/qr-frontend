import React from "react";
import PropTypes from "prop-types";

const ViewItemDetails = ({ item, setItem }) => {
  console.log(item); // Optional for debugging

  return (
    <>
      {item && (
        <div className="flex justify-center min-h-screen bg-slate-700">
          <div className="container w-full sm:w-96 bg-[#D9D9D9]">
            {/* component heading */}
            <div className="bg-black text-white py-6">
              
              <button type="button" className="ml-6 h-5 w-5" onClick={()=>setItem(null)}> 
                <span className="text-white">&lt;Back</span> 
              </button>
              <h1 className="text-2xl px-6">{item.name}</h1>

              {/* Pricing Section (assuming pricing is an array) */}
              {item.pricing && (
                <div className="discounted-rates flex justify-between px-6 mt-3">
                  {item.pricing.map((pricing) => (
                    <div key={pricing._id}>
                      <span className="font-semibold">
                        ₹{pricing.amount * ((100 - item.discount) / 100)}
                      </span>
                      <span className="text-sm">({pricing.servingName})</span>
                    </div>
                  ))}
                </div>
              )}

              {item.price && item.quantity && (
                <div className="original-rates flex justify-between px-6 mt-3">
                  <div>
                    <span className="font-semibold">₹{item.price* ((100-item.discount)/100)}</span>
                    {item.quantity && <span className="text-sm">({item.quantity})</span>}
                  </div>
                </div>
              )}
            </div>

            {/* component middle section */}
            <div className="flex flex-col gap-5 py-5 p-5">
              {/* Image Section */}
              <div className="flex justify-center mb-4">
                <img
                  src="coffee-special.jpg"
                  alt="Item"
                  className="rounded-lg w-full"
                />
              </div>

              {/* Description Section */}
              <div>
                <h3 className="text-lg font-semibold">Description:</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>

              {/* Category Section */}
              <div>
                <h3 className="text-lg font-semibold">Type:</h3>
                <p className="text-gray-700">
                  {item.type || "Uncategorized"}
                </p>{" "}
                {/* Handle missing category */}
              </div>

              {/* Key Ingredients Section */}
              <div>
                <h3 className="text-lg font-semibold">Key Ingredients:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {item.keyIngredients.split(",").map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ViewItemDetails.propTypes = {
  item: PropTypes.object.isRequired,
  setItem: PropTypes.any.isRequired,
};

export default ViewItemDetails;
