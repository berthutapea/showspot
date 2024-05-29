import React from 'react';

const SecondaryButton = ({ children, className, onClick }) => {
  return (
    <button
      className={`${className} btn text-black flex items-center gap-2 border-2 border-primary bg-transparent hover:bg-primary hover:border-transparent hover:text-white duration-500`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
