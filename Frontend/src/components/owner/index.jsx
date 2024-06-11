import React from 'react';
// import postedAt from '../../utils/postedAt';
import SamariaProfile from '../../assets/images/samaria-sianturi-image.jpeg';

export default function Owner() {
  return (
    <div className="flex items-center gap-2 my-1">
      <div className="h-12 w-12 rounded-full overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={SamariaProfile}
          alt="Profile Admin Show Spot"
        />
      </div>
      <div className="text-sm text-accent">
        <strong>Samaria</strong>
        <p>379 days ago</p>
      </div>
    </div>
  );
}
