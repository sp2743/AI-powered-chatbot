import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FeatureCard;
