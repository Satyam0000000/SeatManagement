import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header"; // Assuming Header is in components folder
import Footer from "../components/Footer"; // Assuming Footer is in components folder

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/auth"); // Navigate to the Auth component
  };

  const handleLibraryPage = () => {
    navigate("/library"); // Navigate to the Library page
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 flex flex-col items-center justify-center">
        <motion.h1
          className="text-4xl font-bold text-blue-600 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to the Library Seat Management System
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-8 text-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Keep updated with seats in nearby libraries or halls. Reserve your seat easily and conveniently.
        </motion.p>
        <motion.button
          className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600"
          onClick={handleGetStarted}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.button>
        
        {/* New Button to Navigate to Library Page */}
        <motion.button
          className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600"
          onClick={handleLibraryPage}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Visit NIT Jalandhar Library
        </motion.button>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;