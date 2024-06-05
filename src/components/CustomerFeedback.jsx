import axios from 'axios';
import React, { useState, useEffect } from 'react';

const CustomerFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const userId = localStorage.getItem("userId");

  // Simulate fetching feedbacks from an API
  useEffect(() => {
    const fetchFeedbacks = async () => {
      // Replace with actual API call
      const res = await axios.get(`https://digimenu.onrender.com/api/feedbacks/${userId}`,{
        headers: {
          "Content-Type": "application/json",
        },
      });
      setFeedbacks(res.data.data);
    };

    fetchFeedbacks();
  }, []);

  const handleDeleteFeedback = async (id) => {
    // Simulate deleting feedback (replace with actual API call)
    setFeedbacks(feedbacks.filter(feedback => feedback._id !== id));
    const res = await axios.delete(`https://digimenu.onrender.com/api/feedbacks/${id}`,{
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.data.success) {
      alert("Feedback deleted successfully!");
    } else {
      alert("Error deleting feedback");
    }
  };

  return (
    <>
      <div className="flex justify-center min-h-screen bg-slate-700">
        <div className="container w-full sm:w-96 bg-[#D9D9D9]">
          {/* component heading */}
          <div className="bg-black text-white py-6">
            <h1 className="text-2xl px-6">Customer Feedback</h1>
          </div>

          {/* component middle section */}
          <div className="flex flex-col gap-5 py-5 p-5">
            {feedbacks.length > 0 ? (
              <ul className="bg-white shadow-md rounded-lg p-4">
                {feedbacks.map(feedback => (
                  <li key={feedback.id} className="mb-4 border-b pb-2 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">{feedback.createdAt}</p>
                      <p className="text-lg">{feedback.message}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteFeedback(feedback._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      🗑️
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No feedback available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerFeedback;
