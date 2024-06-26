import { useState, useEffect } from 'react';
import DataShowSpot from '../../../../../utils/DataShowSpot';
import { Link } from 'react-router-dom';
import { FaRegEdit, FaPlus } from 'react-icons/fa';
import { BsTrash3 } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import LayoutAdmin from '../../../../../layout/layout-admin';
import BreadcrumbAdmin from '../../../../../components/breadcrumb/breadcrumb-admin';
import OneButton from '../../../../../components/buttons/one-button';

const ITEMS_PER_PAGE = 4;

const StudentsData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(ITEMS_PER_PAGE);
  const [dataPegawai, setDataPegawai] = useState([]);

  const totalPages = Math.ceil(DataShowSpot.length / ITEMS_PER_PAGE);

  useEffect(() => {
    setDataPegawai(DataShowSpot.slice(startIndex, endIndex));
  }, [startIndex, endIndex]);

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      setStartIndex((prev) => prev - ITEMS_PER_PAGE);
      setEndIndex((prev) => prev - ITEMS_PER_PAGE);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      setStartIndex((prev) => prev + ITEMS_PER_PAGE);
      setEndIndex((prev) => prev + ITEMS_PER_PAGE);
    }
  };

  return (
    <LayoutAdmin>
      <BreadcrumbAdmin pageName="Students Data" />
      <Link to="/admin/students-data/add">
        <OneButton>
          <span>Add Students</span>
          <span>
            <FaPlus />
          </span>
        </OneButton>
      </Link>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 mt-6">
        <div className="flex justify-between items-center mt-4 flex-col md:flex-row md:justify-between">
          <div className="relative flex-2 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Type to search name.."
              className="rounded-lg border-[1.5px] border-stroke bg-transparent py-2 pl-10 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary left-0"
            />
            <span className="absolute left-2 py-3 text-xl">
              <BiSearch />
            </span>
          </div>
        </div>

        <div className="max-w-full overflow-x-auto py-4">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  No
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Photo
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Full Name
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Campus
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Major
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Groups Type
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Class Type
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {dataPegawai.map((dataPegawai, index) => {
                return (
                  <tr key={dataPegawai.id}>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white text-center">
                        {startIndex + index + 1}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark">
                      <div className="h-12.5 w-15">
                        <div className="rounded-full overflow-hidden">
                          {dataPegawai.photo}
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {dataPegawai.namaPegawai}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {dataPegawai.jenisKelamin}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {dataPegawai.tanggalMasuk}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {dataPegawai.status}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {dataPegawai.hakAkses}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <Link to={'/admin/students-data/edit'}>
                          <button className="hover:text-black">
                            <FaRegEdit className="text-meta-5 text-xl hover:text-black dark:hover:text-white" />
                          </button>
                        </Link>
                        <button className="hover:text-black">
                          <BsTrash3 className="text-danger text-xl hover:text-black dark:hover:text-white" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4 flex-col md:flex-row md:justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-gray-5 dark:text-gray-4 text-sm py-4">
              Showing {startIndex}-{endIndex} of {DataShowSpot.length} Students
              Data
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
    </LayoutAdmin>
  );
};

export default StudentsData;
