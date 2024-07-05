import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import LayoutAdmin from '../../../../layout/layout-admin';
import BreadcrumbAdmin from '../../../breadcrumb/breadcrumb-admin';
import OneButton from '../../../buttons/one-button';
import ThreeButton from '../../../buttons/three-button';
import Swal from 'sweetalert2';
import {
  fetchStudentById,
  updateStudent,
} from '../../../../configs/redux/action/studentsDataAction';

const EditStudents = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const { studentsDataMaster } = useSelector(
    (state) => state.studentsDataMaster
  );

  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [campus, setCampus] = useState('');
  const [major, setMajor] = useState('');
  const [group_type_id, setGroupTypeId] = useState('');
  const [class_type_id, setClassTypeId] = useState('');
  const [preview, setPreview] = useState('');
  const [file, setFile] = useState(null);

  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (file) {
      formData.append('profile_image', file);
    }
    formData.append('fullname', fullname);
    formData.append('username', username);
    formData.append('campus', campus);
    formData.append('major', major);
    formData.append('group_type_id', group_type_id);
    formData.append('class_type_id', class_type_id);

    dispatch(updateStudent(id, formData, navigate))
      .then(() => {
        navigate('/admin/students-data');
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          timer: 1000,
          timerProgressBar: true,
          text: 'Student has been updated successfully.',
        });
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          timer: 1000,
          timerProgressBar: true,
          text: 'There was an error updating the student.',
        });
      });
  };

  useEffect(() => {
    dispatch(fetchStudentById(id));
  }, [dispatch, id]);

  useEffect(() => {
    console.log(studentsDataMaster);
    if (studentsDataMaster) {
      setFullname(studentsDataMaster.fullname);
      setFullname(studentsDataMaster.username);
      setUsername(studentsDataMaster.username);
      setCampus(studentsDataMaster.campus);
      setMajor(studentsDataMaster.major);
      setGroupTypeId(studentsDataMaster.group_type_id);
      setClassTypeId(studentsDataMaster.class_type_id);
    }
  }, [studentsDataMaster]);

  return (
    <LayoutAdmin>
      <BreadcrumbAdmin pageName="Edit Students" />

      <div className="sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke py-4 px-6.5">
              <h3 className="font-medium text-black">
                Personal Information Students
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-10 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <div className="flex items-center gap-6">
                      <div className="h-30 w-30 rounded-full">
                        <label className="mb-2 block text-sm font-medium text-black">
                          Your Foto
                        </label>
                        <img
                          src={preview || studentsDataMaster?.photo_profile}
                          alt="User"
                          className="rounded h-25 w-25 object-cover"
                        />
                      </div>
                      <div>
                        <input
                          type="file"
                          className="w-full transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:py-1 file:px-2.5 file:text-sm file:font-medium  file:mb-4"
                          onChange={handleImageUpload}
                        />
                        <p className="flex text-sm">
                          Your profile picture should have a 1:1 ratio and is no
                          more than 2MB in size.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Full Name <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      id="fullname"
                      name="fullname"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      required={true}
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Username <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      id="username"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required={true}
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Campus <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      id="campus"
                      name="campus"
                      value={campus}
                      onChange={(e) => setCampus(e.target.value)}
                      required={true}
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Major <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      id="major"
                      name="major"
                      value={major}
                      onChange={(e) => setMajor(e.target.value)}
                      required={true}
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Groups Type <span className="text-meta-1">*</span>
                    </label>
                    <div className="relative z-20 bg-transparent">
                      <select
                        className="relative z-20 appearance-none px-5 outline-none transition focus:border-primary active:border-primary w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus-visible:outline-none"
                        id="group_type_id"
                        name="group_type_id"
                        value={group_type_id}
                        onChange={(e) => setGroupTypeId(e.target.value)}
                        required={true}
                      >
                        <option value="" disabled={true}>
                          Please Select
                        </option>
                        <option value="1">Mobile</option>
                        <option value="2">Web A</option>
                        <option value="3">Web B</option>
                        <option value="4">Web C</option>
                      </select>
                      <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2 text-2xl">
                        <MdOutlineKeyboardArrowDown />
                      </span>
                    </div>
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Class Type <span className="text-meta-1">*</span>
                    </label>
                    <div className="relative z-20 bg-transparent">
                      <select
                        className="relative z-20 appearance-none px-5 outline-none transition focus:border-primary active:border-primary w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus-visible:outline-none"
                        id="class_type_id"
                        name="class_type_id"
                        value={class_type_id}
                        onChange={(e) => setClassTypeId(e.target.value)}
                        required={true}
                      >
                        <option value="" disabled={true}>
                          Please Select
                        </option>
                        <option value="1">Morning</option>
                        <option value="2">Afternoon</option>
                        <option value="3">Night</option>
                      </select>
                      <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2 text-2xl">
                        <MdOutlineKeyboardArrowDown />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-3 text-center py-4">
                  <div>
                    <OneButton>
                      <span>Update</span>
                    </OneButton>
                  </div>
                  <Link to="/admin/students-data">
                    <ThreeButton>
                      <span>Back</span>
                    </ThreeButton>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default EditStudents;
