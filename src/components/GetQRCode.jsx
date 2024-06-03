// frontend/src/components/GetQRCode.jsx
import React, { useRef } from 'react';


const GetQRCode = () => {
  

  const qrValue = "https://your-unique-url.com"; // Replace with your unique URL

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Get QR Code</h2>
      <div className="flex justify-center mb-4" >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/220px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="" />
      </div>
      <button
        
        className="w-full bg-blue-500 text-white py-2 rounded-md mt-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
      >
        Download QR Code
      </button>
    </div>
  );
};

export default GetQRCode;
