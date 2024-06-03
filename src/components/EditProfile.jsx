import React, { useState } from 'react';

const EditProfile = () => {
  const [email, setEmail] = useState('monarch@gmail.com');
  const [businessName, setBusinessName] = useState('Monarch Cafe');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [googleLink, setGoogleLink] = useState('');
  const [isEditingOwnerDetails, setIsEditingOwnerDetails] = useState(false);
  const [isEditingGoogleLink, setIsEditingGoogleLink] = useState(false);

  const handleSaveOwnerDetails = () => {
    setIsEditingOwnerDetails(false);
    // Handle save logic for owner details
  };

  const handleSaveGoogleLink = () => {
    setIsEditingGoogleLink(false);
    // Handle save logic for Google link
  };

  return (
    <>
      <div className="flex justify-center min-h-screen bg-slate-700">
        <div className="container w-full sm:w-96 bg-[#D9D9D9]">
          {/* component heading */}
          <div className="bg-black text-white py-6">
            <h1 className="text-2xl px-6">Profile</h1>
          </div>

          {/* component middle section */}
          <div className="flex flex-col gap-5 py-5 p-5">
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Business Name</label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
              <small className="text-gray-500">This name will appear at the top of your menu</small>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <label className="block text-gray-700">Owner's Details</label>
                <button
                  onClick={() => setIsEditingOwnerDetails(!isEditingOwnerDetails)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {isEditingOwnerDetails ? 'Cancel' : 'Edit'} ✏️
                </button>
              </div>
              {isEditingOwnerDetails ? (
                <>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                  <button
                    onClick={handleSaveOwnerDetails}
                    className="w-full bg-green-500 text-white py-2 rounded-md mt-2 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
                  >
                    Save
                  </button>
                </>
              ) : (
                <div className="mt-1">
                  <p>First Name: {firstName || 'N/A'}</p>
                  <p>Last Name: {lastName || 'N/A'}</p>
                </div>
              )}
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <label className="block text-gray-700">Google Link</label>
                <button
                  onClick={() => setIsEditingGoogleLink(!isEditingGoogleLink)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {isEditingGoogleLink ? 'Cancel' : 'Edit'} ✏️
                </button>
              </div>
              {isEditingGoogleLink ? (
                <>
                  <input
                    type="text"
                    placeholder="Google"
                    value={googleLink}
                    onChange={(e) => setGoogleLink(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                  <button
                    onClick={handleSaveGoogleLink}
                    className="w-full bg-green-500 text-white py-2 rounded-md mt-2 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
                  >
                    Save
                  </button>
                </>
              ) : (
                <div className="mt-1">
                  <p>Google: {googleLink || 'N/A'}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
