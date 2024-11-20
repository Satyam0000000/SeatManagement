import React from "react";
import { motion } from "framer-motion";

const LibraryPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Library Card with Faded Background Image */}
      <motion.div
        className="relative bg-cover bg-center w-full md:w-96 p-6 rounded-lg shadow-lg text-white"
        style={{
          backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAk9ar9Acmgb2Icx9GcKBDcVrqAhJTkGe0i6p2aY1UGcvNZJpqr-J5J1qvcyzOqPa-qxA&usqp=CAU')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Overlay for Faded Effect */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-center">NIT Jalandhar Library</h2>
          <p className="mt-4 text-lg text-center">
            Explore the resources and facilities at NIT Jalandhar's library. Reserve your seat today.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LibraryPage;