import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import LayoutAdmin from '../../../../../layout/layout-admin';
import placeholderImage from '../../../../../assets/images/placeholder.jpg';
import SamariaProfile from '../../../../../assets/images/samaria-sianturi-image.jpeg';
import BreadcrumbAdmin from '../../../../breadcrumb/breadcrumb-admin';
import OneButton from '../../../../buttons/one-button';
import TwoButton from '../../../../buttons/two-button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ShowcaseMembers from '../../../../showcase/showcase-members';

const ViewShowcaseLatest = () => {
  return (
    <LayoutAdmin>
      <BreadcrumbAdmin pageName="View Showcase Latest" />

      <div className="sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- View Showcase Latest --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke py-4 px-6.5 bg-warning rounded ">
              <h1 className="font-medium text-white text-center text-xl">
                Pending
              </h1>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mx-1 md:mx-4 rounded single-blog flex flex-col justify-between">
                  <LazyLoadImage
                    placeholderSrc={placeholderImage}
                    src={SamariaProfile}
                    className="showcase_image object-cover"
                  />
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row mt-10">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Application Title <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      disabled={true}
                      defaultValue="Afiliya"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Grup Name <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="fullName"
                      id="fullName"
                      disabled={true}
                      defaultValue="CH2-PS070"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Link Video Project <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="fullName"
                      id="fullName"
                      disabled={true}
                      defaultValue="https://youtu.be/Ztli49M7o2A"
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Link Hifi Design<span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="fullName"
                      id="fullName"
                      disabled={true}
                      defaultValue="https://www.figma.com/proto/ShGzQpZLQ3fLe3OmlNTVzJ/Afiliya---Capstone-Project-Team-Bangkit?node-id=199-70&t=TS8XK49leWqhlLrK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=199%3A35"
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Link GitHub <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="fullName"
                      id="fullName"
                      disabled={true}
                      defaultValue="https://github.com/berthutapea/showspot"
                    />
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full">
                    <label className="mb-3 block text-black dark:text-white">
                      Product Description<span className="text-meta-1">*</span>
                    </label>
                    <textarea
                      rows="6"
                      disabled={true}
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input"
                      defaultValue="Afiliya is Application to increase the visibility of culturally rich Indonesian MSME products, overcoming the challenges of recognition and market presence"
                    ></textarea>
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full">
                    <label className="mb-3 block text-black dark:text-white">
                      Members<span className="text-meta-1">*</span>
                    </label>
                    <ShowcaseMembers />
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Grade <span className="text-meta-1">*</span>
                    </label>
                    <div className="relative z-20 bg-transparent">
                      <select className="relative z-20 appearance-none px-5 outline-none transition focus:border-primary active:border-primary w-full rounded border border-stroke  py-3 pl-4 pr-4.5 text-black focus-visible:outline-none">
                        <option value="">Please Select</option>
                        <option value="">A</option>
                        <option value="">B</option>
                        <option value="">C</option>
                        <option value="">D</option>
                        <option value="">E</option>
                      </select>
                      <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2 text-2xl">
                        <MdOutlineKeyboardArrowDown />
                      </span>
                    </div>
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Projects Filter <span className="text-meta-1">*</span>
                    </label>
                    <div className="relative z-20 bg-transparent">
                      <select className="relative z-20 appearance-none px-5 outline-none transition focus:border-primary active:border-primary w-full rounded border border-stroke  py-3 pl-4 pr-4.5 text-black focus-visible:outline-none">
                        <option value="">Please Select</option>
                        <option value="">The Best</option>
                        <option value="">Mobile</option>
                        <option value="">Web</option>
                      </select>
                      <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2 text-2xl">
                        <MdOutlineKeyboardArrowDown />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full">
                    <label className="mb-3 block text-black dark:text-white">
                      Notes <span className="text-meta-1">*</span>
                    </label>
                    <textarea
                      rows="6"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input focus:border-primary focus-visible:outline-none"
                      defaultValue="Mantap Bangeet"
                    ></textarea>
                  </div>
                </div>
                {/* <!-- View Showcase Latest --> */}

                <div className="flex flex-col md:flex-row w-full gap-3 text-center py-4">
                  <Link to="/admin/showcase-projects">
                    <OneButton>
                      <span>Confirmed</span>
                    </OneButton>
                  </Link>
                  <Link to="/admin/showcase-projects">
                    <TwoButton>
                      <span>Rejected</span>
                    </TwoButton>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default ViewShowcaseLatest;
