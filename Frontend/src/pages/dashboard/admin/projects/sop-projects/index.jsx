import React from 'react';
import Layout from '../../../../../layout';
import Breadcrumb from '../../../../../components/breadcrumb';
import SOP from '../../../../../components/sop';
import { TfiPrinter } from 'react-icons/tfi';
import OneButton from '../../../../../components/buttons/one-button';
import { Link } from 'react-router-dom';

const SopProjects = () => {
  return (
    <Layout>
      <Breadcrumb pageName="Sop Projects" />
      <Link to="/admin/sop-projects">
        <OneButton>
          <span>Save as PDF</span>
          <span>
            <TfiPrinter />
          </span>
        </OneButton>
      </Link>
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
    </Layout>
  );
};

export default SopProjects;
