import React from 'react';
import LogoShowSpot from '../../assets/images/showspot-logo.png';
import LoginImg from '../../assets/images/login-image-show-spot.png';
import LoginInput from '../../components/login-input';
import { Link } from 'react-router-dom';
import BackButton from '../../components/buttons/back-button';

function Login() {
  return (
    <div className="parent min-h-screen rounded-sm border border-stroke shadow-default">
      <BackButton />
      <div className="flex min-h-screen flex-wrap items-center">
        <div className="hidden w-full xl:block xl:w-1/2">
          <div className="px-26 py-18.5 text-center ">
            <span className="mb-5.5 inline-block ">
              <Link to="/">
                <img
                  className="w-20"
                  src={LogoShowSpot}
                  alt="Logo Show Spot"
                  title="Logo Show Spot"
                />
              </Link>
            </span>
            <p className="text-primary font-bold 2xl:px-20">Show Spot</p>
            <img className="img-login" src={LoginImg} alt="Logo Show Spot" />
          </div>
        </div>

        <div className="w-full border-primary xl:w-1/2 xl:border-l-2">
          <div className="w-full p-6 sm:p-12.5 xl:p-17.5">
            <LoginInput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
