import React from "react";
import { account } from "../appwrite"; // Import Appwrite for account management
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const SeatLayoutHeader = ({ onLogout }) => {
  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-white text-xl font-bold">Library Seat Booking</h1>

      {/* Logout Button */}
      <button
        onClick={onLogout}
        className="bg-red-500 text-white py-2 px-4 rounded-md shadow hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default SeatLayoutHeader;