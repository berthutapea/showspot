import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegEdit, FaPlus } from 'react-icons/fa';
import { BsTrash3 } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import Swal from 'sweetalert2';
import LayoutAdmin from '../../../../../layout/layout-admin';
import BreadcrumbAdmin from '../../../../../components/breadcrumb/breadcrumb-admin';
import OneButton from '../../../../../components/buttons/one-button';
import {
  deleteMentor,
  fetchMentors,
} from '../../../../../configs/redux/action/mentorsDataAction';

const ITEMS_PER_PAGE = 4;

const MentorsData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const dispatch = useDispatch();
  const { mentorsDataMaster } = useSelector((state) => state.mentorsDataMaster);

  const filteredDataMentors = Array.isArray(mentorsDataMaster)
    ? mentorsDataMaster.filter((mentor) => {
        const { fullname, status } = mentor;
        const keyword = searchKeyword.toLowerCase();
        const statusKeyword = filterStatus.toLowerCase();
        return (
          fullname.toLowerCase().includes(keyword) &&
          (filterStatus === '' || status.toLowerCase() === statusKeyword)
        );
      })
    : [];

  const totalPages = Math.ceil(filteredDataMentors.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(
    startIndex + ITEMS_PER_PAGE,
    filteredDataMentors.length
  );

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

  const onDeleteMentor = (id) => {
    Swal.fire({
      title: 'Konfirmasi',
      text: 'Apakah Anda yakin ingin Menghapus?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak',
      reverseButtons: true,
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        dispatch(deleteMentor(id)).then(() => {
          Swal.fire({
            title: 'Berhasil',
            text: 'Data pegawai berhasil dihapus.',
            icon: 'success',
            timer: 1000,
            timerProgressBar: true,
            showConfirmButton: false,
          });
          dispatch(fetchMentors());
          
        });
      }
    });
  };

  useEffect(() => {
    dispatch(fetchMentors());
  }, [dispatch]);

  return (
    <LayoutAdmin>
      <BreadcrumbAdmin pageName="Mentors Data" />
      <Link to="/admin/mentors-data/add">
        <OneButton>
          <span>Add Mentors</span>
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
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="Search name.."
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
              {filteredDataMentors
                .slice(startIndex, endIndex)
                .map((mentor, index) => (
                  <tr key={mentor.id}>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white text-center">
                        {startIndex + index + 1}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark">
                      <div className="h-12.5 w-15">
                        <div className="rounded-full overflow-hidden">
                          <img src={mentor.photo_profile} alt="Photo Profil" />
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {mentor.fullname}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {mentor.campus}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {mentor.major}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {mentor.group_type}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {mentor.class_type}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <Link to={'/admin/mentors-data/edit'}>
                          <button className="hover:text-black">
                            <FaRegEdit className="text-meta-5 text-xl hover:text-black dark:hover:text-white" />
                          </button>
                        </Link>
                        <button
                          onClick={() => {
                            console.log(
                              `Deleting mentor with ID: ${mentor.mentor_id}`
                            );
                            onDeleteMentor(mentor.mentor_id);
                          }}
                          className="hover:text-black"
                        >
                          <BsTrash3 className="text-danger text-xl hover:text-black dark:hover:text-white" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4 flex-col md:flex-row md:justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-gray-5 dark:text-gray-4 text-sm py-4">
              Showing {startIndex + 1}-{endIndex} of{' '}
              {filteredDataMentors.length} Mentors Data
            </span>
          </div>
          <div className="flex space-x-2 py-4">
            <button
              disabled={currentPage === 1}
              onClick={goToPrevPage}
              className="py-2 px-6 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white dark:text-white dark:border-primary dark:hover:bg-primary disabled:opacity-50"
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`py-2 px-4 rounded-lg border ${
                  currentPage === i + 1
                    ? 'bg-primary text-white border-primary'
                    : 'border-gray-2 text-black dark:text-white dark:border-strokedark'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={goToNextPage}
              className="py-2 px-6 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white dark:text-white dark:border-primary dark:hover:bg-primary disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default MentorsData;
