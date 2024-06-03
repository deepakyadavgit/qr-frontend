// frontend/src/components/CustomerFeedback.jsx
import React, { useState, useEffect } from 'react';

const CustomerFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  // Simulate fetching feedbacks from an API
  useEffect(() => {
    const fetchFeedbacks = async () => {
      // Replace with actual API call
      const feedbackData = [
        { id: 1, date: '2023-05-01', time: '12:34 PM', message: 'Great service!' },
        { id: 2, date: '2023-05-02', time: '1:45 PM', message: 'Loved the food!' },
        { id: 3, date: '2023-05-03', time: '3:15 PM', message: 'Nice ambiance!' },
        // Add more feedback data as needed
      ];
      setFeedbacks(feedbackData);
    };

    fetchFeedbacks();
  }, []);

  const handleDeleteFeedback = (id) => {
    // Simulate deleting feedback (replace with actual API call)
    setFeedbacks(feedbacks.filter(feedback => feedback.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Customer Feedback</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        {feedbacks.length > 0 ? (
          <ul>
            {feedbacks.map(feedback => (
              <li key={feedback.id} className="mb-4 border-b pb-2 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">{feedback.date} at {feedback.time}</p>
                  <p className="text-lg">{feedback.message}</p>
                </div>
                <button
                  onClick={() => handleDeleteFeedback(feedback.id)}
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
  );
};

export default CustomerFeedback;
