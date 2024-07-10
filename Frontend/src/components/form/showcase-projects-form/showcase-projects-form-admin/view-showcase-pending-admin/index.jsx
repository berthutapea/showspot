import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import LayoutAdmin from '../../../../../layout/layout-admin';
import BreadcrumbAdmin from '../../../../breadcrumb/breadcrumb-admin';
import OneButton from '../../../../buttons/one-button';
import Swal from 'sweetalert2';
import TwoButton from '../../../../buttons/two-button';
import ShowcaseMembersAdmin from '../../../../showcase/showcase-members/showcase-members-admin';
import {
  evaluationShowcaseProjectsAdmin,
  fetchShowcaseProjectsAdminById,
} from '../../../../../configs/redux/action/showcaseProjectsAction';
import ThreeButton from '../../../../buttons/three-button';

const ViewShowcasePendingAdmin = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const { showCaseProjectsData } = useSelector(
    (state) => state.showCaseProjectsData
  );

  const [application_title, setApplicationTitle] = useState('');
  const [group_name, setGroupName] = useState('');
  const [link_video, setLinkVideo] = useState('');
  const [link_design, setLinkDesign] = useState('');
  const [link_github, setLinkGithub] = useState('');
  const [description, setDescription] = useState('');
  const [group_id, setGroupId] = useState('');
  const [grade_id, setGradeId] = useState('');
  const [project_filter_id, setProjectFilterId] = useState('');
  const [notes, setNotes] = useState('');

  const getStatusText = (statusId) => {
    switch (statusId) {
      case 1:
        return 'Confirmed';
      case 2:
        return 'Pending';
      case 3:
        return 'Rejected';
      default:
        return 'No Response';
    }
  };


  const handleSubmit = (e, status) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('grade_id', grade_id);
    formData.append('project_filter_id', project_filter_id || 'No Response');
    formData.append('notes', notes || 'No Response');
    formData.append('status_project_id', status);

    dispatch(evaluationShowcaseProjectsAdmin(id, formData, navigate))
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          timer: 1000,
          timerProgressBar: true,
          text: 'Showcase has been updated successfully.',
        });
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          timer: 1000,
          timerProgressBar: true,
          text: 'There was an error updating the showcase.',
        });
      });
  };

  const confirmAction = (e, status) => {
    e.preventDefault();
    Swal.fire({
      title: `${status === 1 ? 'Confirmed' : 'Rejected'}?`,
      text: `Are you sure you want to ${status === 1 ? 'Confirmed' : 'Rejected'}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        handleSubmit(e, status);
      }
    });
  };

  useEffect(() => {
    dispatch(fetchShowcaseProjectsAdminById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (showCaseProjectsData?.project) {
      setApplicationTitle(showCaseProjectsData?.project?.application_title);
      setGroupName(showCaseProjectsData?.project?.group_name);
      setLinkVideo(showCaseProjectsData?.project?.link_video);
      setLinkDesign(showCaseProjectsData?.project?.link_design);
      setLinkGithub(showCaseProjectsData?.project?.link_github);
      setDescription(showCaseProjectsData?.project?.description);
      setGroupId(showCaseProjectsData?.project?.group_id);
      setGradeId(showCaseProjectsData?.project?.grade_id || 'No Response');
      setProjectFilterId(
        showCaseProjectsData?.project?.project_filter_id || 'No Response'
      );
      setNotes(showCaseProjectsData?.project?.notes || 'No Response');
    }
  }, [showCaseProjectsData?.project]);
  

  return (
    <LayoutAdmin>
      <BreadcrumbAdmin pageName="View Showcase Pending" />
      <div className="sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke py-4 px-6.5 bg-warning rounded ">
              <h1 className="font-medium text-white text-center text-xl">
                {getStatusText(
                  showCaseProjectsData?.project?.status_project_id
                )}
              </h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mx-1 md:mx-4 rounded single-blog flex flex-col justify-between">
                  <img
                    src={showCaseProjectsData?.project?.application_image}
                    alt="User"
                    className="showcase_image object-cover"
                  />
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row mt-10">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Application Title <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="application_title"
                      id="application_title"
                      disabled={true}
                      value={application_title}
                      required={true}
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Grup Name <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="group_name"
                      id="group_name"
                      disabled={true}
                      value={group_name}
                      required={true}
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Link Video Project <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="link_video"
                      id="link_video"
                      disabled={true}
                      value={link_video}
                      required={true}
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Link Hifi Design<span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="link_design"
                      id="link_design"
                      disabled={true}
                      value={link_design}
                      required={true}
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Link GitHub <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="link_github"
                      id="link_github"
                      disabled={true}
                      value={link_github}
                      required={true}
                    />
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full">
                    <label className="mb-3 block text-black dark:text-white">
                      Product Description<span className="text-meta-1">*</span>
                    </label>
                    <textarea
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input"
                      rows="6"
                      name="description"
                      id="description"
                      disabled={true}
                      value={description}
                      required={true}
                    ></textarea>
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full">
                    <label className="mb-3 block text-black dark:text-white">
                      Members<span className="text-meta-1">*</span>
                    </label>
                    <ShowcaseMembersAdmin />
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Grade <span className="text-meta-1">*</span>
                    </label>
                    <div className="relative z-20 bg-transparent">
                      <select
                        className="relative z-20 appearance-none px-5 outline-none transition focus:border-primary active:border-primary w-full rounded border border-stroke  py-3 pl-4 pr-4.5 text-black focus-visible:outline-none"
                        id="grade_id"
                        name="grade_id"
                        onChange={(e) => setGradeId(e.target.value)}
                        required={true}
                      >
                        <option value="">Please Select</option>
                        <option value="1">A</option>
                        <option value="2">B</option>
                        <option value="3">C</option>
                        <option value="4">D</option>
                        <option value="5">E</option>
                      </select>
                      <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2 text-2xl">
                        <MdOutlineKeyboardArrowDown />
                      </span>
                    </div>
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Projects Filter <span className="text-meta-1">*</span>
                    </label>
                    <div className="relative z-20 bg-transparent">
                      <select
                        className="relative z-20 appearance-none px-5 outline-none transition focus:border-primary active:border-primary w-full rounded border border-stroke  py-3 pl-4 pr-4.5 text-black focus-visible:outline-none"
                        id="project_filter_id"
                        name="project_filter_id"
                        onChange={(e) => setProjectFilterId(e.target.value)}
                        required={true}
                      >
                        <option value="">Please Select</option>
                        <option value="1">The Best</option>
                        <option value="2">Mobile</option>
                        <option value="3">Web</option>
                      </select>
                      <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2 text-2xl">
                        <MdOutlineKeyboardArrowDown />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full">
                    <label className="mb-3 block text-black dark:text-white">
                      Notes <span className="text-meta-1">*</span>
                    </label>
                    <textarea
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input focus:border-primary focus-visible:outline-none"
                      rows="6"
                      id="notes"
                      name="notes"
                      onChange={(e) => setNotes(e.target.value)}
                      required={true}
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
            <div className="flex flex-col md:flex-row w-full gap-3 text-center py-4 p-6.5">
              <div>
                <OneButton onClick={(e) => confirmAction(e, 1)}>
                  <span>Confirmed</span>
                </OneButton>
              </div>
              <div>
                <TwoButton onClick={(e) => confirmAction(e, 3)}>
                  <span>Rejected</span>
                </TwoButton>
              </div>
              <Link to="/admin/showcase-projects">
                <ThreeButton>
                  <span>Back</span>
                </ThreeButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default ViewShowcasePendingAdmin;
