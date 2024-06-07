import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { FiSettings, FiUser } from 'react-icons/fi';
import SamariaProfile from '../../assets/images/samaria-sianturi-image.jpeg';
import { MdKeyboardArrowDown } from 'react-icons/md';

const DropdownProfile = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef(null);
  const dropdown = useRef(null);

  useEffect(() => {
    const clickHandler = (event) => {
      if (!dropdownOpen) return;
      if (
        dropdown.current &&
        !dropdown.current.contains(event.target) &&
        trigger.current &&
        !trigger.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', clickHandler);
    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, [dropdownOpen]);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };

    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [dropdownOpen]);

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden lg:block">
          <span className="block text-sm font-medium text-accent">
            Sumiati Samaria Sianturi
          </span>
          <span className="block text-xs">Admin</span>
        </span>

        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={SamariaProfile}
            alt="Profile Admin Show Spot"
          />
        </div>
        <MdKeyboardArrowDown className="text-xl" />
      </Link>

      {dropdownOpen && (
        <div
          ref={dropdown}
          className="absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-defaul"
        >
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5">
            <li>
              <Link
                to={'/admin/profile'}
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <FiUser className="text-xl" />
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to={'/admin/change-password'}
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <FiSettings className="text-xl" />
                Settings
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                to={'/login'}
              >
                <BiLogOut className="text-xl" />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownProfile;
