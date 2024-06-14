import React from 'react';
import { Link } from 'react-router-dom';

const BreadcrumbStudents = (props) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black">
        {props.pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link to="/students/dashboard">Dashboard /</Link>
          </li>
          <li className="text-primary">{props.pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadcrumbStudents;
