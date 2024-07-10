import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaEye } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { fetchShowcaseProjectsConfirmedMentors } from '../../../../../configs/redux/action/showcaseProjectsAction';

const ShowcaseProjectsConfirmedMentors = () => {
  const [currentPageConfirmed, setCurrentPageConfirmed] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');
  const dispatch = useDispatch();
  const { showCaseProjectsDataConfirmed, totalPagesConfirmed, pageConfirmed } =
    useSelector((state) => state.showCaseProjectsDataConfirmed);

  const onPageChangeConfirmed = (currentPageConfirmed) => {
    setCurrentPageConfirmed(currentPageConfirmed);
  };

  useEffect(() => {
    dispatch(fetchShowcaseProjectsConfirmedMentors(currentPageConfirmed));
  }, [dispatch, currentPageConfirmed]);

  const filteredProjects = showCaseProjectsDataConfirmed.filter((project) =>
    project.group_name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 mt-6">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          Showcase Projects Confirmed
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
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2">
              <th className="py-2 px-8 font-medium text-black dark:text-white xl:pl-11">
                No
              </th>
              <th className="py-2 px-2 font-medium text-black dark:text-white">
                Cover
              </th>
              <th className="py-2 px-2 font-medium text-black dark:text-white">
                Application Title
              </th>
              <th className="py-2 px-2 font-medium text-black dark:text-white">
                Group Name
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
            {Array.isArray(filteredProjects) && filteredProjects.length > 0 ? (
              filteredProjects.map((confirmed, index) => (
                <tr key={confirmed.application_id}>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white text-center">
                      {(currentPageConfirmed - 1) * 5 + index + 1}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 text-center dark:border-strokedark justify-center flex">
                    <div className="h-12.5 w-15 overflow-hidden">
                      <img
                        src={confirmed.application_image}
                        alt="Project Cover"
                        className="object-cover h-full w-full"
                      />
                    </div>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 text-center dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {confirmed.application_title}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 text-center dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {confirmed.group_name}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 text-center dark:border-strokedark">
                    <p className="text-white dark:text-white bg-meta-3 rounded-lg ">
                      {confirmed.status}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 text-center dark:border-strokedark">
                    <Link
                      to={`/mentors/showcase-projects/confirmed/view/${confirmed.application_id}`}
                    >
                      <button className="hover:text-black">
                        <FaEye className="text-meta-5 text-xl hover:text-black dark:hover:text-white" />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="border-b border-[#eee] py-5 px-4 dark:border-strokedark"
                >
                  <p className="text-black dark:text-white text-center">
                    No Showcase Projects Confirmed Found
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 flex-col md:flex-row md:justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-gray-5 dark:text-gray-4 text-sm py-4">
            Showing {currentPageConfirmed}-{filteredProjects.length} of{' '}
            {totalPagesConfirmed} Showcase Projects Confirmed
          </span>
        </div>
        <div className="flex space-x-2 py-4">
          <button
            disabled={currentPageConfirmed === 1}
            onClick={() => onPageChangeConfirmed(currentPageConfirmed - 1)}
            className="py-2 px-6 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white dark:text-white dark:border-primary dark:hover:bg-primary disabled:opacity-50"
          >
            Prev
          </button>
          {[...Array(pageConfirmed)].map(() => (
            <button
              key={pageConfirmed}
              onClick={() => onPageChangeConfirmed(pageConfirmed + 1)}
              className={`py-2 px-4 rounded-lg border ${
                currentPageConfirmed === pageConfirmed
                  ? 'bg-primary text-white border-primary'
                  : 'border-gray-2 text-black dark:text-white dark:border-strokedark'
              }`}
            >
              {pageConfirmed}
            </button>
          ))}
          <button
            disabled={
              currentPageConfirmed === showCaseProjectsDataConfirmed.length
            }
            onClick={() => onPageChangeConfirmed(currentPageConfirmed + 1)}
            className="py-2 px-6 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white dark:text-white dark:border-primary dark:hover:bg-primary disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseProjectsConfirmedMentors;
