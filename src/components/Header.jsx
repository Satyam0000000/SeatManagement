import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/auth"); // Navigate to the Auth component
  };

  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Library Seat Booking System
        </h1>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-lg">Welcome, {user.name || user.email}</span>
              <button
                onClick={onLogout}
                className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={handleLoginClick}
              className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-500 hover:text-white"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;