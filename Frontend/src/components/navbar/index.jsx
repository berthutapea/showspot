import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  RiMenu3Fill,
  RiContactsBook2Fill,
  RiFolderInfoFill,
} from 'react-icons/ri';
import { GiCrossMark } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import logoShowspot from '../../assets/images/showspot-logo.png';
import { MdWork } from 'react-icons/md';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import PrimaryButton from '../buttons/primary-button';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navLinks = [
    { title: 'Home', link: '/', icon: <FaHome /> },
    { title: 'About', link: '/about', icon: <RiFolderInfoFill /> },
    { title: 'Showcase', link: '/showcase', icon: <MdWork /> },
    { title: 'Contact', link: '/contact', icon: <RiContactsBook2Fill /> },
  ];
  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 500,
      color: isActive && '#FF651C',
    };
  };

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setShow(true);
        } else {
          setShow(false);
        }
        setLastScrollY(window.scrollY);
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`visible ${show && 'nav-hidden'} shadow-lg bg-neutral 
     z-50`}
    >
      <div className="w-full flex items-center justify-between px-3 md:px-24 py-3">
        <div>
          <div>
            <Link to="/">
              <img
                className="w-20 pr-10"
                src={logoShowspot}
                alt="Logo Show Spot"
              />
            </Link>
          </div>
        </div>
        <div>
          <ul className="lg:flex items-center hidden">
            {navLinks.map((navItem) => (
              <li className="mx-4" key={navItem.title}>
                <NavLink
                  to={navItem.link}
                  style={activeLink}
                  className="text-accent hover:text-primary duration-300"
                >
                  {navItem.title}
                </NavLink>
              </li>
            ))}

            <Link
              className="inline-block ml-4 text-accent font-semibold"
              to="/login"
            >
              <PrimaryButton>
                <span>Login</span>
              </PrimaryButton>
            </Link>
          </ul>
          <div className="block lg:hidden">
            <button
              onClick={toggleDrawer}
              className="btn btn-ghost text-accent hover:text-primary"
            >
              <RiMenu3Fill></RiMenu3Fill>
            </button>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              style={{ backgroundColor: '#e5e7eb' }}
              className="bla bla bla flex flex-col justify-between pb-4"
            >
              <ul className="">
                <li className="mt-6 mb-10 ml-4">
                  <GiCrossMark
                    className="cursor-pointer hover:text-primary duration-300 text-accent"
                    onClick={() => setIsOpen(!isOpen)}
                  ></GiCrossMark>
                </li>
                {navLinks.map((navItem) => (
                  <li
                    className="m-4"
                    key={navItem.title}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <NavLink
                      to={navItem.link}
                      style={activeLink}
                      className="flex items-center text-accent hover:text-primary duration-300"
                    >
                      <span className="mr-3">{navItem.icon}</span>
                      <span>{navItem.title}</span>
                    </NavLink>
                  </li>
                ))}
                <div className="flex justify-center items-center">
                  <Link
                    className="inline-block text-accent font-semibold"
                    to="/login"
                  >
                    <PrimaryButton>
                      <span>Login</span>
                    </PrimaryButton>
                  </Link>
                </div>
              </ul>
              <div className="text-center">
                <p className="text-accent">
                  &copy; Copyright 2024, Show Spot. All Rights Reserved
                </p>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}
