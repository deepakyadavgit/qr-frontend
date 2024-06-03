import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  console.log("Dashboard Loaded after login")
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center bg-[#00284d] min-h-screen min-w-screen">
        <div className="container w-full sm:w-3/4">
          <div className="heading my-10">
            <p className='text-5xl text-white'>Welcome to Dashboard</p>
          </div>

          <div className="flex flex-col sm:flex-row md:justify-left gap-5 align-middle flex-wrap">
            <button
              className="border bg-white rounded-md text-blue mx-5 my-1 p-4 sm:h-fit sm:w-fit w-full"
              onClick={() => navigate('/add-update-category')}
            >
              Add/Update Category
            </button>
            <button
              className="border bg-white rounded-md text-blue mx-5 my-1 p-4 sm:h-fit sm:w-fit w-full"
              onClick={() => navigate('/add-update-item')}
            >
              Add/Update an Item
            </button>
            <button
              className="border bg-white rounded-md text-blue mx-5 my-1 p-4 sm:h-fit sm:w-fit w-full"
              onClick={() => navigate('/item-availability')}
            >
              Item's Availability
            </button>
            <button
              className="border bg-white rounded-md text-blue mx-5 my-1 p-4 sm:h-fit sm:w-fit w-full"
              onClick={() => navigate('/apply-discount')}
            >
              Apply Discount
            </button>
            <button
              className="border bg-white rounded-md text-blue mx-5 my-1 p-4 sm:h-fit sm:w-fit w-full"
              onClick={() => navigate('/todays-special')}
            >
              Today's Special
            </button>
            <button
              className="border bg-white rounded-md text-blue mx-5 my-1 p-4 sm:h-fit sm:w-fit w-full"
              onClick={() => navigate('/menu-preview')}
            >
              Menu Preview
            </button>
            <button
              className="border bg-white rounded-md text-blue mx-5 my-1 p-4 sm:h-fit sm:w-fit w-full"
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
