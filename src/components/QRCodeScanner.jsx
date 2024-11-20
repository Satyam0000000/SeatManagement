import React, { useState } from "react";
import { useZxing } from "react-zxing";
import { Client, Databases } from "appwrite";

const client = new Client().setEndpoint("https://[APPWRITE-ENDPOINT]").setProject("YOUR_PROJECT_ID");
const databases = new Databases(client);

const QRCodeScanner = () => {
  const [scannedData, setScannedData] = useState("");
  const [seatStatus, setSeatStatus] = useState("");

  const { ref } = useZxing({
    onResult(result) {
      setScannedData(result.getText());
    },
  });

  const bookSeat = async () => {
    const seatId = scannedData.split("/")[1];
    try {
      await databases.updateDocument("DATABASE_ID", "COLLECTION_ID", seatId, {
        isOccupied: true,
      });
      setSeatStatus("Seat successfully booked!");
    } catch (error) {
      console.error("Error booking seat", error);
      setSeatStatus("Failed to book seat.");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Scan QR Code</h2>
      <div className="space-y-4">
        <div ref={ref} className="w-full h-64 bg-gray-200 rounded-lg" />
        {scannedData && (
          <div className="text-center">
            <p className="text-gray-700">Scanned Data: {scannedData}</p>
            <button
              onClick={bookSeat}
              className="w-full py-2 px-4 bg-green-600 text-white rounded-lg"
            >
              Book Seat
            </button>
          </div>
        )}
        {seatStatus && <p className="text-center text-blue-600 mt-2">{seatStatus}</p>}
      </div>
    </div>
  );
};

export default QRCodeScanner;