import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import TwoButton from '../../../../buttons/two-button';
import LayoutMentors from '../../../../../layout/layout-mentors';
import BreadcrumbMentors from '../../../../breadcrumb/breadcrumb-mentors';
import ShowcaseMembersMentors from '../../../../showcase/showcase-members/showcase-members-mentors';
import {
  deleteShowcaseProjectsAdmin,
  fetchShowcaseProjectsMentorsById,
} from '../../../../../configs/redux/action/showcaseProjectsAction';
import ThreeButton from '../../../../buttons/three-button';

const ViewShowcaseRejectedMentors = () => {
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
        return 'No response';
    }
  };

  const getStatusGrade = (statusGrade) => {
    switch (statusGrade) {
      case 1:
        return 'A';
      case 2:
        return 'B';
      case 3:
        return 'C';
      case 4:
        return 'D';
      case 5:
        return 'E';
      default:
        return 'No response';
    }
  };
  const getProjectFilter = (statusProjectFilter) => {
    switch (statusProjectFilter) {
      case 1:
        return 'A';
      case 2:
        return 'B';
      case 3:
        return 'C';
      case 4:
        return 'D';
      case 5:
        return 'E';
      default:
        return 'No response';
    }
  };

  const onDeleteShowcaseProjectsConfirmed = (id) => {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to Delete?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteShowcaseProjectsAdmin(id)).then(() => {
          Swal.fire({
            title: 'Success',
            text: 'Showcase Project data has been successfully deleted.',
            icon: 'success',
            timer: 1000,
            timerProgressBar: true,
            showConfirmButton: false,
          }).then(() => {
            navigate('/mentors/showcase-projects');
          });
        });
      }
    });
  };

  useEffect(() => {
    dispatch(fetchShowcaseProjectsMentorsById(id));
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
      setGradeId(showCaseProjectsData?.project?.grade_id);
      setProjectFilterId(showCaseProjectsData?.project?.project_filter_id);
      setNotes(showCaseProjectsData?.project?.notes);
    }
  }, [showCaseProjectsData?.project]);

  return (
    <LayoutMentors>
      <BreadcrumbMentors pageName="View Showcase Rejected" />
      <div className="sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke py-4 px-6.5 bg-danger rounded ">
              <h1 className="font-medium text-white text-center text-xl">
                {getStatusText(
                  showCaseProjectsData?.project?.status_project_id
                )}
              </h1>
            </div>
            <form>
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
                    <ShowcaseMembersMentors />
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Grade <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="grade_id"
                      id="grade_id"
                      disabled={true}
                      value={getStatusGrade(grade_id)}
                      required={true}
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Project Filter <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      name="project_filter_id"
                      id="project_filter_id"
                      disabled={true}
                      value={getProjectFilter(project_filter_id)}
                      required={true}
                    />
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
                      value={notes}
                      disabled={true}
                      required={true}
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
            <div className="flex flex-col md:flex-row w-full gap-3 text-center py-4 p-6.5">
              <div>
                <TwoButton
                  onClick={() => {
                    onDeleteShowcaseProjectsConfirmed(
                      showCaseProjectsData?.project?.application_id
                    );
                  }}
                >
                  <span>Delete</span>
                </TwoButton>
              </div>
              <Link to="/mentors/showcase-projects">
                <ThreeButton>
                  <span>Back</span>
                </ThreeButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LayoutMentors>
  );
};

export default ViewShowcaseRejectedMentors;
