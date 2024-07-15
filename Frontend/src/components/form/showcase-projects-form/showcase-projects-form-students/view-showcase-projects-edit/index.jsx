import React from 'react';
import { Link } from 'react-router-dom';
import LayoutStudents from '../../../../../layout/layout-students';
import placeholderImage from '../../../../../assets/images/placeholder.jpg';
import SamariaProfile from '../../../../../assets/images/samaria-sianturi-image.jpeg';
import BreadcrumbStudents from '../../../../breadcrumb/breadcrumb-students';
import OneButton from '../../../../buttons/one-button';
import ThreeButton from '../../../../buttons/three-button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ShowcaseMembersEdit from '../../../../showcase/showcase-members-edit';

const ViewShowcaseProjectsEdit = () => {
  return (
    <LayoutStudents>
      <BreadcrumbStudents pageName="View Showcase Latest" />

      <div className="sm:grid-cols-2">
        <div className="flex flex-col gap-9">
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
                      placeholder="Enter full application title"
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
                      placeholder="Enter grup name"
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
                      placeholder="Enter link video project"
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
                      placeholder="Enter link hifi design"
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
                      placeholder="Enter link github"
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
                      placeholder="Enter link product description"
                      className="w-full rounded-lg border-[1.5px] border-stroke  bg-gray  py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input focus:border-primary focus-visible:outline-none"
                      defaultValue="Afiliya is Application to increase the visibility of culturally rich Indonesian MSME products, overcoming the challenges of recognition and market presence"
                    ></textarea>
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full">
                    <label className="mb-3 block text-black dark:text-white">
                      Members<span className="text-meta-1">*</span>
                    </label>
                    <ShowcaseMembersEdit />
                  </div>
                </div>


                <div className="flex flex-col md:flex-row w-full gap-3 text-center py-4">
                  <Link to="/students/showcase-projects">
                    <OneButton>
                      <span>Update</span>
                    </OneButton>
                  </Link>
                  <Link to="/students/showcase-projects">
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
    </LayoutStudents>
  );
};

export default ViewShowcaseProjectsEdit;
