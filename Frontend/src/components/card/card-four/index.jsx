import React from 'react';
import { AiFillDatabase } from 'react-icons/ai';

const CardFour = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2">
        <AiFillDatabase className="fill-primary text-xl" />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black">
            120
          </h4>
          <span className="text-sm font-medium">Projects Data</span>
        </div>
      </div>
    </div>
  );
};

export default CardFour;
