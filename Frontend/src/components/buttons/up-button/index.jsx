import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function UpButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      aria-label="Scroll to top"
      type="button"
      onClick={handleClick}
      className={`fixed z-10 bottom-2 right-2 ${showButton ? 'block' : 'hidden'}`}
    >
      <div className="py-2 px-3 rounded-lg absolute right-2 translate-y-[-480%] sm:translate-y-[-250%] w-10 cursor-pointer border border-primary bg-primary p-6 text-white transition hover:bg-transparent hover:text-accent">
        <FaArrowUp />
      </div>
    </button>
  );
}

export default UpButton;
