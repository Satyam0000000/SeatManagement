import React, { useState } from "react";
import QRCodeGenerator from "./QRCodeGenerator"; // Import the QR Code Generator
import QRCodeScanner from "./QRCodeScanner"; // Import the QR Code Scanner
import SeatLayoutHeader from "./SeatLayoutHeader"; // Import the custom header for Seat Layout
import Footer from "../components/Footer"; // Assuming Footer is in components folder
import { account } from "../appwrite"; // Import appwrite account for logout functionality
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const SeatLayout = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Initialize seat states (20 seats)
  const [seats, setSeats] = useState(
    Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      reserved: false,
    }))
  );

  const [userSeat, setUserSeat] = useState(null);
  const [scannedSeat, setScannedSeat] = useState("");

  // Handle seat reservation
  const handleSeatClick = (seatId) => {
    if (userSeat && userSeat !== seatId) {
      alert("You can reserve only one seat at a time.");
      return;
    }

    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === seatId
          ? { ...seat, reserved: !seat.reserved }
          : seat
      )
    );

    setUserSeat((prevSeat) => (prevSeat === seatId ? null : seatId));
  };

  // Logout functionality
  const handleLogout = async () => {
    try {
      await account.deleteSession("current"); // Delete session to log the user out
      navigate("/"); // Redirect to the landing page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* SeatLayout Header with Logout */}
      <SeatLayoutHeader onLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-grow p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Library Seat Booking System
        </h2>

        {/* Seat Layout */}
        <div className="flex justify-between items-start">
          {/* Left Side Seats */}
          <div className="flex flex-col gap-4">
            {seats.slice(0, 10).map((seat) => (
              <div
                key={seat.id}
                className={`p-4 w-24 text-center rounded-md cursor-pointer shadow-md ${
                  seat.reserved
                    ? seat.id === userSeat
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "bg-gray-300 hover:bg-blue-300"
                }`}
                onClick={() => handleSeatClick(seat.id)}
              >
                Seat {seat.id}
              </div>
            ))}
          </div>

          {/* Room Center */}
          <div className="bg-gray-300 h-full w-12 rounded-lg mx-4"></div>

          {/* Right Side Seats */}
          <div className="flex flex-col gap-4">
            {seats.slice(10).map((seat) => (
              <div
                key={seat.id}
                className={`p-4 w-24 text-center rounded-md cursor-pointer shadow-md ${
                  seat.reserved
                    ? seat.id === userSeat
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "bg-gray-300 hover:bg-blue-300"
                }`}
                onClick={() => handleSeatClick(seat.id)}
              >
                Seat {seat.id}
              </div>
            ))}
          </div>
        </div>

        {/* QR Code Scanner and Generator */}
        <div className="mt-10">
          <QRCodeScanner scannedSeat={scannedSeat} setScannedSeat={setScannedSeat} />
          <QRCodeGenerator seatId={scannedSeat} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SeatLayout;