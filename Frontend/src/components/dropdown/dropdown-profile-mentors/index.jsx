import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { FiSettings, FiUser } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { logoutUser } from '../../../configs/redux/action/authAction';
import { fetchDashboardMentor } from '../../../configs/redux/action/dashboardAction';

const DropdownProfileMentors = () => {
  const { dashboardData } = useSelector((state) => state.dashboardData);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const trigger = useRef(null);
  const dropdown = useRef(null);

  const handleLogout = () => {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to leave?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logoutUser());
        Swal.fire({
          title: 'Logout Successful',
          text: 'You have successfully exited.',
          icon: 'success',
          timer: 1500,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then(() => {
          navigate('/login');
        });
      }
    });
  };

  useEffect(() => {
    dispatch(fetchDashboardMentor());
  }, [dispatch]);

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
            {dashboardData?.fullname}
          </span>
          <span className="block text-xs">Mentors</span>
        </span>

        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={dashboardData?.photoProfile}
            alt="Profile Mentors Show Spot"
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
                to={'/mentors/profile'}
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <FiUser className="text-xl" />
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to={'/mentors/change-password'}
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <FiSettings className="text-xl" />
                Settings
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                onClick={handleLogout}
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

export default DropdownProfileMentors;
