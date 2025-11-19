import React from "react";

const Card = ({ title, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full">
    <h3 className="text-2xl font-bold text-red-600 mb-4">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

export default Card;
