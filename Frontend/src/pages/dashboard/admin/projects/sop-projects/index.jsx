import React from 'react';
import LayoutAdmin from '../../../../../layout/layout-admin';
import BreadcrumbAdmin from '../../../../../components/breadcrumb/breadcrumb-admin';
import SOP from '../../../../../components/sop';
import { TfiPrinter } from 'react-icons/tfi';
import OneButton from '../../../../../components/buttons/one-button';
import { Link } from 'react-router-dom';
import TwoButton from '../../../../../components/buttons/two-button';
import FourButton from '../../../../../components/buttons/four-button';
import { FaEdit, FaPlus } from 'react-icons/fa';
import ThreeButton from '../../../../../components/buttons/three-button';

const SopProjects = () => {
  return (
    <LayoutAdmin>
      <BreadcrumbAdmin pageName="Sop Projects" />
      <div className="flex flex-col md:flex-row w-full gap-3 text-center py-4">
        <div className="flex flex-col md:flex-row w-full gap-3">
          <Link to="/admin/sop-projects/add">
            <OneButton>
              <span>Add Sop</span>
              <span>
                <FaPlus />
              </span>
            </OneButton>
          </Link>
          <Link to="/admin/sop-projects/edit">
            <FourButton>
              <span>Edit Sop</span>
              <span>
                <FaEdit />
              </span>
            </FourButton>
          </Link>
          <Link to="/admin/sop-projects/edit">
            <TwoButton>
              <span>Delete Sop</span>
              <span>
                <FaEdit />
              </span>
            </TwoButton>
          </Link>
        </div>
        <div className="w-full flex flex-col md:flex-row-4 md:text-right">
          <Link to="/admin/sop-projects">
            <ThreeButton>
              <span>Save as PDF</span>
              <span>
                <TfiPrinter />
              </span>
            </ThreeButton>
          </Link>
        </div>
      </div>
      <div className="sm:grid-cols-2 mt-6">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Important information
              </h3>
            </div>
            <SOP />
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default SopProjects;
