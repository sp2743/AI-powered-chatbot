import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  className = ''
}) => {
  const baseClasses = "font-medium rounded-lg transition duration-300";
  
  const variantClasses = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-indigo-100 text-indigo-600 hover:bg-indigo-200",
    outline: "bg-transparent text-indigo-600 border border-indigo-600 hover:bg-indigo-50"
  };
  
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-8 py-4 text-xl"
  };
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  const widthClass = fullWidth ? "w-full" : "";
  
  const buttonClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${disabledClasses}
    ${widthClass}
    ${className}
  `;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses.trim()}
    >
      {children}
    </button>
  );
};

export default Button;