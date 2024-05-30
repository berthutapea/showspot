import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import BannerShowSpot from '../../assets/images/homepage-showspot.png';

const Banner = () => {
  return (
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between">
      <div>
        <h1 className="mb-0 text-4xl font-bold text-primary">Show Spot</h1>
        <h2 className="my-6 text-2xl font-bold text-accent">
          Showcase Your Innovation Seamlessly!
        </h2>
        <p className="max-w-md mb-8 font-medium text-accent">
          Show Spot is an innovative step from Infinite Learning to simplify and
          speed up the process of managing student projects with a high level of
          data security. The platform not only provides solutions to existing
          problems, but also provides a better and efficient user experience for
          mentors and students.
        </p>

        <div className="flex items-center">
          <Link to="/login">
            <div className="primary-button">
              <span className="text-button-mobile ">Login</span>
              <span>
                <FaAngleRight />
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <div className="order-1 pt-10 lg:order-3 lg:pt-0 md:pt-0 sm:pt-0">
          <img src={BannerShowSpot} alt="Banner Show Spot"></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
