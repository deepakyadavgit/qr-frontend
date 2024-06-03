import React from 'react';

const GetQRCode = () => {
  const qrValue = "https://your-unique-url.com"; // Replace with your unique URL

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/220px-QR_code_for_mobile_English_Wikipedia.svg.png";
    link.download = 'QRCode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="flex justify-center min-h-screen bg-slate-700">
        <div className="container w-full sm:w-96 bg-[#D9D9D9]">
          {/* component heading */}
          <div className="bg-black text-white py-6">
            <h1 className="text-2xl px-6">Get QR Code</h1>
          </div>

          {/* component middle section */}
          <div className="flex flex-col gap-5 py-5 p-5">
            <div className="flex justify-center mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/220px-QR_code_for_mobile_English_Wikipedia.svg.png"
                alt="QR Code"
                className="w-48 h-48"
              />
            </div>
            <button
              onClick={handleDownload}
              className="w-full bg-blue-500 text-white py-2 rounded-md mt-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            >
              Download QR Code
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetQRCode;
