import React from 'react';
import LayoutStudents from '../../../layout/layout-students';
import BreadcrumbStudents from '../../breadcrumb/breadcrumb-students';

const DefaultDashboardStudents = () => {
  return (
    <LayoutStudents>
      <BreadcrumbStudents pageName="Dashboard" />
      <div className="py-6">
        <h2 className="text-primary font-medium text-center md:text-left">
          Welcome to Your Show Spot Login As Students👋
        </h2>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-accent">
          The Best Product #Batch5🙌
        </h1>
        <p className="mb-4">
          Welcome to Infinite Learning MSIB Batch 05 Exhibition, explore and
          find your solver here! Every product made with passion and ambitious
          by Infinite Learnings mentee. If you are intrigued and ready to
          explore more, feel free to reach out to us at the information below 👇
        </p>
        <p className="mb-4">
          ☎️ +62859-6723-5440
          <br />
          info@infinitelearning.id
        </p>
        <p className="mb-4">
          You can choose and explore all the following program 🌟Have a seat
          with a cup of coffee, and enjoy our exhibition🌟
        </p>
        <p className="font-bold text-accent">Group #B5</p>
      </div>
    </LayoutStudents>
  );
};

export default DefaultDashboardStudents;
