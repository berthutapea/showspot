import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaAngleRight } from 'react-icons/fa';
import BannerShowSpot from '../../assets/images/homepage-showspot.png';

const Banner = () => {
  return (
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between">
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-primary translate-y-[-80%] sm:translate-y-[-0%]">
          Show Spot
        </h1>
        <h2 className=" text-2xl font-bold text-accent translate-y-[-35%] sm:translate-y-[40%]">
          Showcase Your Innovation Seamlessly!
        </h2>
        <p className="max-w-md mb-8 font-medium text-accent translate-y-[-10%] sm:translate-y-[20%]">
          Show Spot is an innovative step from Infinite Learning to simplify and
          speed up the process of managing student projects with a high level of
          data security. The platform not only provides solutions to existing
          problems, but also provides a better and efficient user experience for
          mentors and students.
        </p>

        <div className="flex items-center translate-y-[-80%] sm:translate-y-[40%]">
          <Link to="/login">
            <div className="primary-button">
              <span className="text-button-mobile ">Login</span>
              <span>
                <FaAngleRight />
              </span>
            </div>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/3"
      >
        <div className="lg:pt-0 md:pt-0 sm:pt-0">
          <img src={BannerShowSpot} alt="Banner Show Spot"></img>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
