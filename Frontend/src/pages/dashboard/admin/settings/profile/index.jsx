import React from 'react';
import SamariaProfile from '../../../../../assets/images/samaria-sianturi-image.jpeg';
import Layout from '../../../../../layout';
import Breadcrumb from '../../../../../components/breadcrumb';
import { Link } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import FourButton from '../../../../../components/buttons/four-button';

const Profile = () => {
  return (
    <Layout>
      <Breadcrumb pageName="My Profile" />
      <Link to="/admin/profile/edit">
        <FourButton>
          <span>Edit Profile</span>
          <span>
            <FaUserEdit />
          </span>
        </FourButton>
      </Link>
      <div className="flex flex-col md:flex-row rounded-sm border border-stroke bg-white shadow-default mt-8">
        <div className="md:w-1/3 w-full px-4 py-4 flex justify-center md:justify-start">
          <img
            className="rounded-xl h-80 w-full md:w-80 object-cover"
            src={SamariaProfile}
            alt="Samaria Sianturi"
          />
        </div>
        <div className="md:w-2/3 px-4 md:px-20 py-4 md:py-20">
          <div className="w-full md:text-lg">
            <h2 className="font-medium mb-4 block text-black">
              <span className="inline-block w-32 md:w-40">Full Name</span>
              <span className="inline-block w-7">:</span> Samaria Sianturi
            </h2>
            <h2 className="font-medium mb-4 block text-black">
              <span className="inline-block w-32 md:w-40">Campus</span>
              <span className="inline-block w-7">:</span>{' '}
              <span className="pl-[-10] md:pl-0">Politeknik Negeri Batam</span>
            </h2>
            <h2 className="font-medium mb-4 block text-black">
              <span className="inline-block w-32 md:w-40">Major</span>
              <span className="inline-block w-7">:</span> Teknik Informatika
            </h2>
            <h2 className="font-medium mb-4 block text-black">
              <span className="inline-block w-32 md:w-40">Groups Type</span>
              <span className="inline-block w-7">:</span>
              <span className="pl-[-8] md:pl-0"> Mobile</span>
            </h2>
            <h2 className="font-medium mb-4 block text-black">
              <span className="inline-block w-32 md:w-40">Class Type</span>
              <span className="inline-block w-7">:</span>
              <span className="pl-[-8] md:pl-0"> Morning</span>
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
