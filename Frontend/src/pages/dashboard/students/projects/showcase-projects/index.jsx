import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaEye, FaUpload } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import LayoutStudents from '../../../../../layout/layout-students';
import BreadcrumbStudents from '../../../../../components/breadcrumb/breadcrumb-students';
import { Link } from 'react-router-dom';
import OneButton from '../../../../../components/buttons/one-button';
import { fetchShowcaseProjectsStudents } from '../../../../../configs/redux/action/showcaseProjectsAction';

const ITEMS_PER_PAGE = 4;

const ShowcaseProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');
  const dispatch = useDispatch();
  const { dashboardData } = useSelector((state) => state.dashboardData);
  const { showCaseProjectsDataStudents } = useSelector(
    (state) => state.showCaseProjectsDataStudents
  );
  const filteredDataStudents = Array.isArray(showCaseProjectsDataStudents)
    ? showCaseProjectsDataStudents.filter((projects) => {
        const { group_name } = projects;
        const keyword = searchKeyword ? searchKeyword.toLowerCase() : '';
        return group_name && group_name.toLowerCase().includes(keyword);
      })
    : [];

  const totalPages = Math.ceil(filteredDataStudents.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(
    startIndex + ITEMS_PER_PAGE,
    filteredDataStudents.length
  );

  const getStatusText = (statusId) => {
    switch (statusId) {
      case 1:
        return { text: 'Confirmed', className: 'bg-meta-3' };
      case 2:
        return { text: 'Pending', className: 'bg-warning' };
      case 3:
        return { text: 'Rejected', className: 'bg-danger' };
      default:
        return { text: 'No response', className: 'bg-gray-500' };
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (dashboardData && dashboardData.student_id) {
      dispatch(fetchShowcaseProjectsStudents(dashboardData.student_id));
    }
  }, [dispatch, dashboardData]);

  return (
    <LayoutStudents>
      <BreadcrumbStudents pageName="Showcase Projects" />
      <Link to="/students/showcase-projects/uploads">
        <OneButton>
          <span>Upload Projects</span>
          <span>
            <FaUpload />
          </span>
        </OneButton>
      </Link>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 mt-6">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Showcase Projects
          </h3>
        </div>
        <div className="flex justify-between items-center mt-6 flex-col md:flex-row md:justify-between">
          <div className="relative flex-2 mb-4 md:mb-0">
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="Search group name .."
              className="rounded-lg border-[1.5px] border-stroke bg-transparent py-2 pl-10 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary left-0"
            />
            <span className="absolute left-2 py-3 text-xl">
              <BiSearch />
            </span>
          </div>
        </div>

        <div className="max-w-full overflow-x-auto py-6">
          <table className="w-full table-auto-full">
            <thead>
              <tr className="bg-gray-2 ">
                <th className="py-2 px-8 font-medium text-black dark:text-white xl:pl-11">
                  No
                </th>
                <th className="py-2 px-2 font-medium text-black dark:text-white">
                  Cover
                </th>
                <th className="py-2 px-2 font-medium text-black dark:text-white">
                  Application <br /> Title
                </th>
                <th className="py-2 px-2 font-medium text-black dark:text-white">
                  Group <br /> Name
                </th>
                <th className="py-2 px-2 font-medium text-black dark:text-white">
                  Status
                </th>
                <th className="py-2 px-2 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredDataStudents.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-5">
                    No Showcase Projects Found
                  </td>
                </tr>
              ) : (
                filteredDataStudents
                  .slice(startIndex, endIndex)
                  .map((projects, index) => {
                    const { text, className } = getStatusText(
                      projects.status_project_id
                    );
                    const projectUrl =
                      projects.status_project_id === 2
                        ? `/students/showcase-projects/edit/${projects.application_id}`
                        : `/students/showcase-projects/view/${projects.application_id}`;
                    return (
                      <tr key={projects.application_id}>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white text-center">
                            {startIndex + index + 1}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 text-center dark:border-strokedark justify-center flex">
                          <div className="h-12.5 w-15">
                            <div className="rounded-full overflow-hidden">
                              <img
                                src={projects.application_image}
                                alt="Cover"
                              />
                            </div>
                          </div>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 text-center dark:border-strokedark">
                          <p className="text-black dark:text-white">
                            {projects.application_title}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 text-center dark:border-strokedark">
                          <p className="text-black dark:text-white">
                            {projects.group_name}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 text-center dark:border-strokedark">
                          <p
                            className={`text-white rounded-lg px-2 py-1 ${className}`}
                          >
                            {text}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 text-center dark:border-strokedark">
                          <Link to={projectUrl}>
                            <button className="hover:text-black">
                              <FaEye className="text-meta-5 text-xl hover:text-black dark:hover:text-white" />
                            </button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4 flex-col md:flex-row md:justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-gray-5 dark:text-gray-4 text-sm py-4">
              Showing {startIndex}-{endIndex} of {filteredDataStudents.length}{' '}
              Showcase Projects
            </span>
          </div>
          <div className="flex space-x-2 py-4">
            <button
              disabled={currentPage === 1}
              onClick={goToPrevPage}
              className="py-2 px-6 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white dark:text-white dark:border-primary dark:hover:bg-primary dark:hover:text-white disabled:opacity-50"
            >
              Prev
            </button>
            {[...Array(Math.min(totalPages, 5))].map((_, i) => {
              const page = i + 1;
              if (page === currentPage) {
                return (
                  <div
                    key={i}
                    className="py-2 px-4 rounded-lg border border-primary bg-primary text-white font-semibold hover:bg-primary dark:text-white dark:bg-primary dark:hover:bg-primary"
                  >
                    {page}
                  </div>
                );
              } else if (page === 2 && currentPage > 4) {
                return (
                  <p
                    key={i}
                    className="py-2 px-4 border border-gray-2 dark:bg-transparent text-black font-medium bg-gray dark:border-strokedark dark:text-white"
                  >
                    ...
                  </p>
                );
              } else if (
                page === totalPages - 1 &&
                currentPage < totalPages - 3
              ) {
                return (
                  <p
                    key={i}
                    className="py-2 px-4 border border-gray-2 dark:bg-transparent text-black font-medium bg-gray dark:border-strokedark dark:text-white"
                  >
                    ...
                  </p>
                );
              } else if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <div
                    key={i}
                    className="py-2 px-4 rounded-lg border border-gray-2 text-black dark:bg-transparent bg-gray font-medium dark:border-strokedark dark:text-white"
                  >
                    {page}
                  </div>
                );
              } else {
                return null;
              }
            })}

            <button
              disabled={currentPage === totalPages}
              onClick={goToNextPage}
              className="py-2 px-6 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white dark:text-white dark:border-primary dark:hover:bg-primary dark:hover:text-white disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </LayoutStudents>
  );
};

export default ShowcaseProjects;
