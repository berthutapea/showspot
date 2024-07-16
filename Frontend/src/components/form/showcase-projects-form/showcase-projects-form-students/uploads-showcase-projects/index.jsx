import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LayoutStudents from '../../../../../layout/layout-students';
import { useDispatch } from 'react-redux';
import BreadcrumbStudents from '../../../../breadcrumb/breadcrumb-students';
import OneButton from '../../../../buttons/one-button';
import ThreeButton from '../../../../buttons/three-button';
import Swal from 'sweetalert2';
import { uploadShowcaseProjectsStudents } from '../../../../../configs/redux/action/showcaseProjectsAction';

const UploadsShowcaseProjects = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    application_title: '',
    group_name: '',
    link_video: '',
    link_design: '',
    link_github: '',
    description: '',
    file: '',
    preview: '',
  });

  const [formDataStudent, setFormDataStudent] = useState({
    Hustler: [],
    'Scrum Master': [],
    Hipster: [],
    Hacker: [],
  });

  const {
    application_title,
    group_name,
    link_video,
    link_design,
    link_github,
    description,
    file,
    preview,
  } = formData;

  const {
    Hustler,
    'Scrum Master': ScrumMaster,
    Hipster,
    Hacker,
  } = formDataStudent;


  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormData = new FormData();
    newFormData.append('application_image', file);
    newFormData.append('application_title', application_title);
    newFormData.append('group_name', group_name);
    newFormData.append('link_video', link_video);
    newFormData.append('link_design', link_design);
    newFormData.append('link_github', link_github);
    newFormData.append('description', description);
    newFormData.append('Hustler', JSON.stringify(Hustler));
    newFormData.append('Scrum Master', JSON.stringify(ScrumMaster));
    newFormData.append('Hacker', JSON.stringify(Hacker));
    newFormData.append('Hipster', JSON.stringify(Hipster));
    dispatch(uploadShowcaseProjectsStudents(newFormData, navigate))
      .then((response) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: response.message,
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 1000,
        });
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.msg) {
          Swal.fire({
            icon: 'error',
            title: 'Fail',
            text: error.response.data.msg,
            confirmButtonText: 'Ok',
          });
        } else if (error.message) {
          Swal.fire({
            icon: 'error',
            title: 'Fail',
            text: error.message,
            confirmButtonText: 'Ok',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Fail',
            text: 'Terjadi kesalahan',
            confirmButtonText: 'Ok',
          });
        }
      });
  };

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeStudent = (e) => {
    const { name, value } = e.target;
    setFormDataStudent((prevFormData) => ({
      ...prevFormData,
      [name]: value.split(',').map((item) => item.trim()),
    }));
  };

  return (
    <LayoutStudents>
      <BreadcrumbStudents pageName="Upload Showcase Latest" />

      <div className="sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke py-4 px-6.5">
              <h3 className="font-medium text-black">
                Please Uploads Your Showcase Projects
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <label className="mb-2.5 block text-black">
                  Upload Cover Image <span className="text-meta-1">*</span>
                </label>
                <div className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary-100 py-4 px-4 dark:bg-meta-4 sm:py-7.5">
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                    onChange={handleImageUpload}
                  />
                  <div className="flex flex-col items-center justify-center space-y-3">
                    {!preview && (
                      <>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                              fill="#3C50E0"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                              fill="#3C50E0"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                              fill="#3C50E0"
                            />
                          </svg>
                        </span>
                        <p>
                          <span className="text-primary">Click to upload</span>{' '}
                          or drag and drop
                        </p>
                        <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                        <p>(max, 1200px X 288px)</p>
                      </>
                    )}
                    {preview && (
                      <img
                        src={preview}
                        alt="Image preview"
                        className="showcase_image object-cover"
                      />
                    )}
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row mt-10">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Application Title <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      id="application_title"
                      name="application_title"
                      value={application_title}
                      onChange={handleChange}
                      required
                      placeholder="Enter full application title"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Grup Name <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      id="group_name"
                      name="group_name"
                      value={group_name}
                      onChange={handleChange}
                      required
                      placeholder="Enter grup name"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Link Video Project <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      id="link_video"
                      name="link_video"
                      value={link_video}
                      onChange={handleChange}
                      required
                      placeholder="Enter link video project"
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Link Hifi Design<span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      id="link_design"
                      name="link_design"
                      value={link_design}
                      onChange={handleChange}
                      required
                      placeholder="Enter link hifi design"
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Link GitHub <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      id="link_github"
                      name="link_github"
                      value={link_github}
                      onChange={handleChange}
                      required
                      placeholder="Enter link github"
                    />
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full">
                    <label className="mb-3 block text-black dark:text-white">
                      Product Description<span className="text-meta-1">*</span>
                    </label>
                    <textarea
                      rows="6"
                      id="description"
                      name="description"
                      value={description}
                      onChange={handleChange}
                      required
                      placeholder="Enter link product description"
                      className="w-full rounded-lg border-[1.5px] border-stroke   py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input focus:border-primary focus-visible:outline-none"
                    ></textarea>
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Hustler<span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      id="Hustler"
                      name="Hustler"
                      value={Hustler.join(', ')}
                      onChange={handleChangeStudent}
                      required
                      placeholder="Enter hustler"
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Scrum Master<span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      id="ScrumMaster"
                      name="Scrum Master"
                      value={ScrumMaster.join(', ')}
                      onChange={handleChangeStudent}
                      required
                      placeholder="Enter scrum master"
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Hipster<span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      id="Hipster"
                      name="Hipster"
                      value={Hipster.join(', ')}
                      onChange={handleChangeStudent}
                      required
                      placeholder="Enter hipster"
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Hacker<span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      id="Hacker"
                      name="Hacker"
                      value={Hacker.join(', ')}
                      onChange={handleChangeStudent}
                      required
                      placeholder="Enter hacker"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-3 text-center py-4">
                  <div>
                    <OneButton>
                      <span>Upload</span>
                    </OneButton>
                  </div>
                  <Link to="/students/showcase-projects">
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
    </LayoutStudents>
  );
};

export default UploadsShowcaseProjects;
