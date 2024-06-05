import axios from "axios";
import React, { useState } from "react";

const EditProfile = () => {
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("Monarch Cafe");
  const [prevBusinessName, setPrevBusinessName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [googleLink, setGoogleLink] = useState("");
  const [isEditingOwnerDetails, setIsEditingOwnerDetails] = useState(false);
  const [isEditingGoogleLink, setIsEditingGoogleLink] = useState(false);
  const userId = localStorage.getItem("userId");
  React.useEffect(() => {
    const fetchUser = async () => {
      // Replace with actual API call
      const res = await axios.get(`https://digimenu.onrender.com/api/users/${userId}`,{
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);
      if (res.data.success) {
        setEmail(res.data.data.email);
        setBusinessName(res.data.data.businessName);
        setPrevBusinessName(res.data.data.businessName);
        setFirstName(res.data.data.ownerFirstName || "");
        setLastName(res.data.data.ownerLastName || "");
        setGoogleLink(res.data.data.googleLink || "");
      }
    };
    fetchUser();
  }, []);

  const handleBusinessNameChange = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      `https://digimenu.onrender.com/api/users/${userId}`,
      {
        businessName: businessName,
      },{
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.success) {
      alert("Business name updated successfully!");
    } else {
      alert("Error updating business name");
    }
  };

  const handleSaveOwnerDetails = async (e) => {
    e.preventDefault();
    setIsEditingOwnerDetails(false);
    // Handle save logic for owner details
    const response = await axios.put(
      `https://digimenu.onrender.com/api/users/${userId}`,
      {
        ownerFirstName: firstName,
        ownerLastName: lastName,
      },{
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.success) {
      alert("Owner details updated successfully!");
    } else {
      alert("Error updating owner details");
    }
  };

  const handleSaveGoogleLink = async (e) => {
    e.preventDefault();
    setIsEditingGoogleLink(false);
    // Handle save logic for Google link
    const response = await axios.put(
      `https://digimenu.onrender.com/api/users/${userId}`,
      {
        googleLink: googleLink,
      },{
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.success) {
      alert("Google link updated successfully!");
    } else {
      alert("Error updating Google link");
    }
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
              <form onSubmit={handleBusinessNameChange}>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
                <button
                  type="submit"
                  hidden={businessName === prevBusinessName}
                  className="w-full bg-green-500 text-white py-2 rounded-md mt-2 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
                >
                  Save
                </button>
              </form>
              <small className="text-gray-500">
                This name will appear at the top of your menu
              </small>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <label className="block text-gray-700">Owner's Details</label>
                <button
                  onClick={() =>
                    setIsEditingOwnerDetails(!isEditingOwnerDetails)
                  }
                  className="text-blue-500 hover:text-blue-700"
                >
                  {isEditingOwnerDetails ? "Cancel" : "Edit"} ✏️
                </button>
              </div>
              {isEditingOwnerDetails ? (
                <>
                  <form onSubmit={handleSaveOwnerDetails}>
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
                      type="submit"
                      className="w-full bg-green-500 text-white py-2 rounded-md mt-2 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
                    >
                      Save
                    </button>
                  </form>
                </>
              ) : (
                <div className="mt-1">
                  <p>First Name: {firstName || "N/A"}</p>
                  <p>Last Name: {lastName || "N/A"}</p>
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
                  {isEditingGoogleLink ? "Cancel" : "Edit"} ✏️
                </button>
              </div>
              {isEditingGoogleLink ? (
                <>
                  <form onSubmit={handleSaveGoogleLink}>
                    <input
                      type="text"
                      placeholder="Google"
                      value={googleLink}
                      onChange={(e) => setGoogleLink(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    />
                    <button
                      type="submit"
                      className="w-full bg-green-500 text-white py-2 rounded-md mt-2 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
                    >
                      Save
                    </button>
                  </form>
                </>
              ) : (
                <div className="mt-1">
                  <p>Google: {googleLink || "N/A"}</p>
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
