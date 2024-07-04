import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegEdit, FaPlus } from 'react-icons/fa';
import { BsTrash3 } from 'react-icons/bs';
import Swal from 'sweetalert2';
import { BiSearch } from 'react-icons/bi';
import LayoutAdmin from '../../../../../layout/layout-admin';
import BreadcrumbAdmin from '../../../../../components/breadcrumb/breadcrumb-admin';
import OneButton from '../../../../../components/buttons/one-button';
import { deleteStudent, fetchStudents } from '../../../../../configs/redux/action/studentsDataAction';


const ITEMS_PER_PAGE = 4;

const StudentsData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');
  const dispatch = useDispatch();
  const { studentsDataMaster } = useSelector(
    (state) => state.studentsDataMaster
  );

  const filteredDataStudents = Array.isArray(studentsDataMaster)
    ? studentsDataMaster.filter((student) => {
        const { fullname } = student;
        const keyword = searchKeyword ? searchKeyword.toLowerCase() : '';
        return fullname && fullname.toLowerCase().includes(keyword);
      })
    : [];

  const totalPages = Math.ceil(filteredDataStudents.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(
    startIndex + ITEMS_PER_PAGE,
    filteredDataStudents.length
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

  const onDeleteStudent = (id) => {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to Delete?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      reverseButtons: true,
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        dispatch(deleteStudent(id)).then(() => {
          Swal.fire({
            title: 'Success',
            text: 'Students data has been successfully deleted.',
            icon: 'success',
            timer: 1000,
            timerProgressBar: true,
            showConfirmButton: false,
          });
          dispatch(fetchStudents());
        });
      }
    });
  };

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

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
              {filteredDataStudents
                .slice(startIndex, endIndex)
                .map((student, index) => (
                  <tr key={student.studentid}>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white text-center">
                        {startIndex + index + 1}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark">
                      <div className="h-12.5 w-15">
                        <div className="rounded-full overflow-hidden">
                          <img src={student.photo_profile} alt="Photo Profil" />
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {student.fullname}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {student.campus}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {student.major}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {student.group_type}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {student.class_type}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <Link
                          to={`/admin/students-data/edit/${student.student_id}`}
                        >
                          <button className="hover:text-black">
                            <FaRegEdit className="text-meta-5 text-xl hover:text-black dark:hover:text-white mt-2" />
                          </button>
                        </Link>
                        <button
                          onClick={() => {
                            console.log(
                              `Deleting mentor with ID: ${student.student_id}`
                            );
                            onDeleteStudent(student.student_id);
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
              {filteredDataStudents.length} Students Data
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

export default StudentsData;
