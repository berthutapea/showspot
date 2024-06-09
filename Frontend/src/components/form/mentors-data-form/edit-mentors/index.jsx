import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Layout from '../../../../layout';
import SamariaProfile from '../../../../assets/images//samaria-sianturi-image.jpeg';
import Breadcrumb from '../../../breadcrumb';
import OneButton from '../../../buttons/one-button';
import ThreeButton from '../../../buttons/three-button';

const EditMentors = () => {
  return (
    <Layout>
      <Breadcrumb pageName="Edit Mentors" />

      <div className="sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Edit Mentors --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke py-4 px-6.5">
              <h3 className="font-medium text-black">
                Personal Information Mentors
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <div className="flex items-center gap-6">
                      <div className="h-25 w-25 rounded-full">
                        <label className="mb-2 block text-sm font-medium text-black">
                          Your Foto
                        </label>
                        <img src={SamariaProfile} alt="User" />
                      </div>
                      <div>
                        <input
                          type="file"
                          className="w-full transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:py-1 file:px-2.5 file:text-sm file:font-medium  file:mb-4"
                        />
                        <p className="flex text-sm">
                          Your profile picture should have a 1:1 ratio and is no
                          more than 2MB in size.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Full Name <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Enter full name"
                      defaultValue="Sumiati Samaria Sianturi"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Campus <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Enter campus"
                      defaultValue="Politeknik Negeri Batam"
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Major <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Enter major"
                      defaultValue="Teknik Informatika"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Groups Type <span className="text-meta-1">*</span>
                    </label>
                    <div className="relative z-20 bg-transparent">
                      <select className="relative z-20 appearance-none px-5 outline-none transition focus:border-primary active:border-primary w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus-visible:outline-none">
                        <option value="">Please Select</option>
                        <option value="">Mobile</option>
                        <option value="">Web A</option>
                        <option value="">Web B</option>
                        <option value="">Web C</option>
                      </select>
                      <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2 text-2xl">
                        <MdOutlineKeyboardArrowDown />
                      </span>
                    </div>
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Class Type <span className="text-meta-1">*</span>
                    </label>
                    <div className="relative z-20 bg-transparent">
                      <select className="relative z-20 appearance-none px-5 outline-none transition focus:border-primary active:border-primary w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus-visible:outline-none">
                        <option value="">Please Select</option>
                        <option value="">Morning</option>
                        <option value="">Afternoon</option>
                        <option value="">Night</option>
                      </select>
                      <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2 text-2xl">
                        <MdOutlineKeyboardArrowDown />
                      </span>
                    </div>
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Username <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Enter username"
                      defaultValue="sumiati88"
                    />
                  </div>
                </div>
                {/* <!-- Edit Mentors --> */}

                <div className="flex flex-col md:flex-row w-full gap-3 text-center py-4">
                  <Link to="/admin/mentors-data/edit">
                    <OneButton>
                      <span>Update</span>
                    </OneButton>
                  </Link>
                  <Link to="/admin/mentors-data">
                    <ThreeButton>
                      <span>Back</span>
                    </ThreeButton>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditMentors;
