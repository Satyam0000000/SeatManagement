import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { account } from "./appwrite"; // Appwrite configuration
import LandingPage from "./pages/LandingPage"; // Landing page
import Auth from "./Auth"; // Login/Signup component
import SeatLayout from "./components/SeatLayout"; // Seat layout component

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser); // Set user state if logged in
      } catch (error) {
        console.error("No user logged in", error);
      }
    };

    checkUser(); // Check user status on app load
  }, []);

  const handleLogin = (currentUser) => {
    setUser(currentUser); // Update the user state when login is successful
  };

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null); // Clear user state on logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/auth"
            element={<Auth onLogin={handleLogin} />} // Pass handleLogin to update user state
          />
          <Route
            path="/seats"
            element={
              user ? (
                <SeatLayout />
              ) : (
                <div className="text-center mt-10">
                  <p>Please log in to access the seat booking system.</p>
                </div>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;