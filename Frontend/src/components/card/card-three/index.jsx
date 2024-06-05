import React from 'react';
import { FaUserTie } from 'react-icons/fa';

const CardThree = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2">
        <FaUserTie className="fill-primary text-xl" />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black">8</h4>
          <span className="text-sm font-medium">Mentors Data</span>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
