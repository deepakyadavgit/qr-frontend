import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";

const FeedbackForm = () => {
  const location = useLocation();
  const [feedback, setFeedback] = React.useState("");
  console.log(location);
  const email = location.pathname.split("/")[2];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://digimenu.onrender.com/api/feedbacks", {
        email,
        feedback,
      },{
        headers: {
            "Content-Type": "application/json",
          },
      });
      alert("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback.");
    }
  };

  return (
    <div className="flex justify-center bg-slate-700 min-h-screen">
      <div className="text-center border sm:w-96 bg-white rounded-lg shadow-lg p-6">
        <div className="bg-black text-white py-4 rounded-t-lg">
          <h1 className="text-2xl">We Value Your Feedback!</h1>
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <textarea
            placeholder="Your feedback here"
            name="textarea"
            className="w-full p-2 border rounded-md mb-4 h-32"
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
