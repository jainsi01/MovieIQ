import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`bg-brand-green hover:bg-[#00c94a] text-white font-bold py-3 px-8 rounded flex items-center justify-center transition-all duration-200 transform hover:scale-[1.02] shadow-[0_0_10px_rgba(33,185,84,0.3)] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
