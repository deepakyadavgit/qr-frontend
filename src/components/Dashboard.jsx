import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  console.log("Dashboard Loaded after login")
  const navigate = useNavigate();

  return (
    <>
      <div className="parent-bg flex justify-center  min-h-screen bg-slate-700">
        <div className="container w-full sm:w-96 bg-[#D9D9D9]">
          {/* component heading */}
          <div className="div bg-black text-white py-6">
            <h1 className="text-2xl px-6">Welcome, Monarch Cafe</h1>
          </div>

          {/* component middle section */}
          <div className="flex flex-col  gap-5 py-5">
            <button
              className=" bg-white rounded-md mx-5 p-5 border"
              onClick={() => navigate('/add-update-category')}
            >
              Add/Update Category
            </button>
            <button
              className=" bg-white rounded-md mx-5 p-5 border"
              onClick={() => navigate('/add-update-item')}
            >
              Add/Update an Item
            </button>
            <button
              className=" bg-white rounded-md mx-5 p-5 border"
              onClick={() => navigate('/item-availability')}
            >
              Item's Availability
            </button>
            <button
              className=" bg-white rounded-md mx-5 p-5 border"
              onClick={() => navigate('/apply-discount')}
            >
              Apply Discount
            </button>
            <button
              className=" bg-white rounded-md mx-5 p-5 border"
              onClick={() => navigate('/todays-special')}
            >
              Today's Special
            </button>
            <button
              className=" bg-white rounded-md mx-5 p-5 border"
              onClick={() => navigate('/menu-preview')}
            >
              Menu Preview
            </button>
            <button
              className=" bg-white rounded-md mx-5 p-5 border"
              onClick={() => navigate('/settings')}
            >
              Settings and More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
