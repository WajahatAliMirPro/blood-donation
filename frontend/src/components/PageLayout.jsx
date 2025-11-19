import React from "react";

const PageLayout = ({ title, children }) => (
  <div className="min-h-screen bg-gray-50 pt-24"> {/* 🔥 pt-24 adds spacing below Navbar */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-extrabold text-gray-800 border-b-4 border-red-600 pb-2 mb-8 inline-block">
        {title}
      </h1>
      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10">{children}</div>
    </div>
  </div>
);

export default PageLayout;

