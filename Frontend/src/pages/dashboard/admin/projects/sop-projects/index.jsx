// src/pages/sop/SopProjects.js
import React from 'react';
import Layout from '../../../../../layout';
import Breadcrumb from '../../../../../components/breadcrumb';
import SOP from '../../../../../components/sop';

const SopProjects = () => {
  return (
    <Layout>
      <Breadcrumb pageName="Sop Projects" />
      <div className="sm:grid-cols-2">
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
