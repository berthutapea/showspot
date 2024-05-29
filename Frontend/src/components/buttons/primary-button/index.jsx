import React from 'react';

const PrimaryButton = ({ children, className, onClick }) => {
  return (
    <button className={`${className} primary-button`} onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;
