import React, { useState } from "react";
import QRCode from "qrcode";

const QRCodeGenerator = () => {
  const [seatId, setSeatId] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const generateQRCode = async () => {
    try {
      const url = await QRCode.toDataURL(`seat/${seatId}`);
      setQrCodeUrl(url);
    } catch (error) {
      console.error("Error generating QR code", error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Generate QR Code</h2>
      <div className="space-y-4">
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg"
          placeholder="Enter Seat ID"
          value={seatId}
          onChange={(e) => setSeatId(e.target.value)}
        />
        <button
          onClick={generateQRCode}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg"
        >
          Generate QR Code
        </button>
        {qrCodeUrl && (
          <div className="text-center mt-4">
            <img src={qrCodeUrl} alt="QR Code" className="mx-auto" />
            <a
              href={qrCodeUrl}
              download={`Seat_${seatId}_QR.png`}
              className="block mt-2 text-blue-500 underline"
            >
              Download QR Code
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;