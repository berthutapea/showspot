import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import LayoutAdmin from '../../../../layout/layout-admin';
import BreadcrumbAdmin from '../../../breadcrumb/breadcrumb-admin';
import OneButton from '../../../buttons/one-button';
import ThreeButton from '../../../buttons/three-button';
import Swal from 'sweetalert2';
import { createMentor } from '../../../../configs/redux/action/mentorsDataAction';

const AddMentors = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    password: '',
    campus: '',
    major: '',
    group_type_id: '',
    class_type_id: '',
    file: '',
    preview: '',
  });

  const {
    fullname,
    username,
    password,
    campus,
    major,
    group_type_id,
    class_type_id,
    file,
    preview,
  } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    if (image) {
      setFormData({
        ...formData,
        file: image,
        preview: URL.createObjectURL(image),
      });
    }
  };

  const handleImageCancel = () => {
    setFormData({
      ...formData,
      file: '',
      preview: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormData = new FormData();
    newFormData.append('profile_image', file);
    newFormData.append('fullname', fullname);
    newFormData.append('username', username);
    newFormData.append('password', password);
    newFormData.append('campus', campus);
    newFormData.append('major', major);
    newFormData.append('group_type_id', group_type_id);
    newFormData.append('class_type_id', class_type_id);
    dispatch(createMentor(newFormData, navigate))
      .then((response) => {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil',
          text: response.message,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.msg) {
          Swal.fire({
            icon: 'error',
            title: 'Gagal',
            text: error.response.data.msg,
            confirmButtonText: 'Ok',
          });
        } else if (error.message) {
          Swal.fire({
            icon: 'error',
            title: 'Gagal',
            text: error.message,
            confirmButtonText: 'Ok',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Gagal',
            text: 'Terjadi kesalahan',
            confirmButtonText: 'Ok',
          });
        }
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <LayoutAdmin>
      <BreadcrumbAdmin pageName="Add Mentors" />
      <div className="sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke py-4 px-6.5">
              <h3 className="font-medium text-black">
                Personal Information Mentors
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Full Name <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      value={fullname}
                      onChange={handleChange}
                      required
                      placeholder="Enter full name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Campus <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="campus"
                      name="campus"
                      value={campus}
                      onChange={handleChange}
                      required
                      placeholder="Enter campus"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Major <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="major"
                      name="major"
                      value={major}
                      onChange={handleChange}
                      required
                      placeholder="Enter major"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Groups Type <span className="text-meta-1">*</span>
                    </label>
                    <div className="relative z-20 bg-transparent">
                      <select
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary"
                        id="group_type_id"
                        name="group_type_id"
                        value={group_type_id}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
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
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Class Type <span className="text-meta-1">*</span>
                    </label>
                    <div className="relative z-20 bg-transparent">
                      <select
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary"
                        id="class_type_id"
                        name="class_type_id"
                        value={class_type_id}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
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
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Username <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={username}
                      onChange={handleChange}
                      required
                      placeholder="Enter username"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Password <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      required
                      placeholder="Enter password"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                    />
                  </div>
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Upload Foto (
                        <span className="text-meta-1">
                          Format file png, jpg, jpeg, Max 2 MB
                        </span>
                        )<span className="text-meta-1"> *</span>
                      </label>
                      <input
                        type="file"
                        className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke dark:file:border-strokedark file:bg-[#EEEEEE] dark:file:bg-white/30 dark:file:text-white file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input"
                        onChange={handleImageUpload}
                        required
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      {preview && (
                        <figure className="relative w-64 h-64 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 animate-fadeIn">
                          <img
                            src={preview}
                            alt="Profile"
                            className="object-cover w-full h-full shadow-6 rounded-xl"
                          />
                          <button
                            type="button"
                            onClick={handleImageCancel}
                            className="absolute top-2 right-2 bg-white dark:bg-black/30 rounded-full p-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
                          >
                            <AiOutlineClose className="h-5 w-5" />
                          </button>
                        </figure>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-3 text-center py-4">
                  <div>
                    <OneButton>
                      <span>Save</span>
                    </OneButton>
                  </div>
                  <Link to="/admin/mentors-data">
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

export default AddMentors;
