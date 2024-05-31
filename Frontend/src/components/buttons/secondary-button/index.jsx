import React from 'react';

const PrimaryButton = ({ children, className, onClick }) => {
  return (
    <button className={`${className} secondary-button`} onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;
