import React from 'react';

const Navbar = ({ onLoginClick, onHomeClick, isLoggedIn }) => {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div 
          className="text-indigo-600 text-2xl font-bold cursor-pointer"
          onClick={onHomeClick}
        >
          MindfulChat
        </div>
        
        {isLoggedIn ? (
          <button 
            onClick={onHomeClick} 
            className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-200 transition duration-300"
          >
            Logout
          </button>
        ) : (
          <button 
            onClick={onLoginClick} 
            className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-200 transition duration-300"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;