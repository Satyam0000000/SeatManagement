import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto px-4 text-center">
      <p>© {new Date().getFullYear()} Library Seat Booking System</p>
      <p>Designed to make seat reservations easier and more accessible.</p>
    </div>
  </footer>
);

export default Footer;