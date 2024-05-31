import React from 'react';
import {
  FaPhoneAlt,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaExternalLinkSquareAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import AvatarLogoShowSpot from '../../assets/images/showspot-logo.png';
import UpButton from '../buttons/up-button';

function Footer() {
  return (
    <div className="parent bg-neutral">
      <footer className="mx-auto p-10 md:flex md:justify-between md:items-start">
        <div className="md:mr-12">
          <Link to="/">
            <img
              src={AvatarLogoShowSpot}
              alt="Logo Show Spot"
              className="w-16 sm:w-46 mb-2"
            />
          </Link>
          <h1 className="text-2xl font-bold text-primary mb-4">Show Spot</h1>
          <span className="text-black block mb-4">
            Show Spot is an innovative step from Infinite Learning to
            <br />
            simplify and speed up the process of managing student
            <br />
            projects with a high level of <br />
            data security.
          </span>
        </div>
        <div className="mt-12">
          <div>
            <span className="font-bold text-accent block mb-4">Link</span>
            <Link
              to="/"
              className="link link-hover hover:text-primary text-black block mb-4 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="link link-hover hover:text-primary text-black block mb-4 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="/showcase"
              className="link link-hover hover:text-primary text-black block mb-4 cursor-pointer"
            >
              Showcase
            </Link>
            <Link
              to="/contact"
              className="link link-hover hover:text-primary text-black block mb-4 cursor-pointer"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="link link-hover hover:text-primary text-black block mb-4 cursor-pointer"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="mb-8 mt-12">
          <div className="mb-4">
            <span className="font-bold text-accent block mb-4">Contact Us</span>
            <div className="text-black mb-4 flex items-center cursor-pointer">
              <FaPhoneAlt className="mr-2 text-xl text-black hover:text-primary" />
              <p className="text-black hover:text-primary">0896387111079</p>
            </div>
            <div className="text-black mb-4 flex items-center cursor-pointer hover:text-primary">
              <MdEmail className="mr-2 text-xl text-black hover:text-primary" />
              <p className="text-black hover:text-primary">info@showspot.com</p>
            </div>
            <div className="text-black mb-4 flex items-center cursor-pointer hover:text-primary">
              <FaExternalLinkSquareAlt className="mr-2 text-xl text-black hover:text-primary" />
              <p className="text-black hover:text-primary">www.showspot.com</p>
            </div>
          </div>
        </div>
        <div className="mb-8 mt-12">
          <div className="mb-4">
            <span className="font-bold text-accent block mb-4">
              Social Media
            </span>
            <div className="flex items-center">
              <a
                aria-label="link"
                href="https://www.linkedin.com/in/sumiati-samaria-sianturi-279674258/"
                target="_blank"
                className="text-2xl text-black hover:text-primary hover:-translate-y-1.5 shadow-lg duration-300"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                aria-label="link"
                href="https://www.linkedin.com/in/sumiati-samaria-sianturi-279674258/"
                target="_blank"
                className="text-2xl text-black hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
                rel="noreferrer"
              >
                <FaInstagramSquare />
              </a>
              <a
                aria-label="link"
                href="https://www.linkedin.com/in/sumiati-samaria-sianturi-279674258/"
                target="_blank"
                className="text-2xl text-black hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
                rel="noreferrer"
              >
                <FaFacebookSquare />
              </a>
              <a
                aria-label="link"
                href="https://www.linkedin.com/in/sumiati-samaria-sianturi-279674258/"
                target="_blank"
                className="text-2xl text-black hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
                rel="noreferrer"
              >
                <FaTwitterSquare />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <footer className="px-10 text-sm sm:py-2 py-2 text-center text-base-100 translate-y-[-40%] sm:translate-y-[-40%]">
        <div className="w-full h-[1px] bg-black" />
        <div className="flex flex-col md:flex-row items-center justify-between mt-6">
          <p className="md:mb-0 text-black">
            &copy; Copyright 2024, <span className="font-bold">Show Spot</span>
          </p>
          <p>
            <span className=" md:inline text-black mr-1">
              Designed & Developed by
            </span>
            <a
              href="https://www.linkedin.com/in/sumiati-samaria-sianturi-279674258/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-black/50 font-bold"
            >
              <span className="underline hover:text-primary">
                Sumiati Samaria Sianturi
              </span>
            </a>
          </p>
        </div>
      </footer>
      <UpButton />
    </div>
  );
}

export default Footer;
