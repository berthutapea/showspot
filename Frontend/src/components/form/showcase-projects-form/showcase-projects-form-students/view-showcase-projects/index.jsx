import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LayoutStudents from '../../../../../layout/layout-students';
import BreadcrumbStudents from '../../../../breadcrumb/breadcrumb-students';
import ThreeButton from '../../../../buttons/three-button';
import Swal from 'sweetalert2';
import {
  fetchShowcaseProjectsStudentsByProjectId,
  updateShowcaseProjectsStudents,
} from '../../../../../configs/redux/action/showcaseProjectsAction';
import TwoButton from '../../../../buttons/two-button';

const ViewShowcaseProjects = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const { showCaseProjectsDataStudentsById } = useSelector(
    (state) => state.showCaseProjectsDataStudentsById
  );

  const [application_title, setApplicationTitle] = useState('');
  const [group_name, setGroupName] = useState('');
  const [link_video, setLinkVideo] = useState('');
  const [link_design, setLinkDesign] = useState('');
  const [link_github, setLinkGithub] = useState('');
  const [description, setDescription] = useState('');
  const [Hustler, setHustler] = useState([]);
  const [ScrumMaster, setScrumMaster] = useState([]);
  const [Hipster, setHipster] = useState([]);
  const [Hacker, setHacker] = useState([]);
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
    console.log(formData);
    if (file) {
      formData.append('application_image', file);
    }
    formData.append('application_title', application_title);
    formData.append('group_name', group_name);
    formData.append('link_video', link_video);
    formData.append('link_design', link_design);
    formData.append('link_github', link_github);
    formData.append('description', description);
    formData.append('Hustler', Hustler);
    formData.append('Scrum Master', ScrumMaster);
    formData.append('Hipster', Hipster);
    formData.append('Hacker', Hacker);

    dispatch(updateShowcaseProjectsStudents(id, formData, navigate))
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          timer: 1000,
          timerProgressBar: true,
          text: 'Showcase Project has been updated successfully.',
        });
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          timer: 1000,
          timerProgressBar: true,
          text: 'There was an error updating the Showcase Project.',
        });
      });
  };

  useEffect(() => {
    dispatch(fetchShowcaseProjectsStudentsByProjectId(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (
      showCaseProjectsDataStudentsById &&
      showCaseProjectsDataStudentsById.team_project
    ) {
      setApplicationTitle(showCaseProjectsDataStudentsById.application_title);
      setGroupName(showCaseProjectsDataStudentsById.group_name);
      setLinkVideo(showCaseProjectsDataStudentsById.link_video);
      setLinkDesign(showCaseProjectsDataStudentsById.link_design);
      setLinkGithub(showCaseProjectsDataStudentsById.link_github);
      setDescription(showCaseProjectsDataStudentsById.description);
      const teamProject =
        showCaseProjectsDataStudentsById?.team_project[0] || [];
      const hustlers = teamProject
        .filter((member) => member.student_position === 'Hustler')
        .map((member) => member.student_name);
      const scrumMasters = teamProject
        .filter((member) => member.student_position === 'Scrum Master')
        .map((member) => member.student_name);
      const hipsters = teamProject
        .filter((member) => member.student_position === 'Hipster')
        .map((member) => member.student_name);
      const hackers = teamProject
        .filter((member) => member.student_position === 'Hacker')
        .map((member) => member.student_name);

      setHustler(hustlers);
      setScrumMaster(scrumMasters);
      setHipster(hipsters);
      setHacker(hackers);
    }
  }, [showCaseProjectsDataStudentsById]);

  return (
    <LayoutStudents>
      <BreadcrumbStudents pageName="View Showcase Project" />

      <div className="sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke py-4 px-6.5 bg-warning rounded ">
              <h1 className="font-medium text-white text-center text-xl">
                Pending 222
              </h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mx-1 md:mx-4 rounded single-blog flex flex-col justify-between">
                  <div className="relative">
                    <img
                      src={
                        preview ||
                        showCaseProjectsDataStudentsById?.application_image
                      }
                      className="showcase_image object-cover"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                      onChange={handleImageUpload}
                    />
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row mt-10">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Application Title <span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      id="application_title"
                      name="application_title"
                      value={application_title}
                      onChange={(e) => setApplicationTitle(e.target.value)}
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
                      id="group_name"
                      name="group_name"
                      value={group_name}
                      onChange={(e) => setGroupName(e.target.value)}
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
                      id="link_video"
                      name="link_video"
                      value={link_video}
                      onChange={(e) => setLinkVideo(e.target.value)}
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
                      id="link_design"
                      name="link_design"
                      value={link_design}
                      onChange={(e) => setLinkDesign(e.target.value)}
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
                      id="link_github"
                      name="link_github"
                      value={link_github}
                      onChange={(e) => setLinkGithub(e.target.value)}
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
                      className="w-full rounded-lg border-[1.5px] border-stroke  bg-gray  py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input focus:border-primary focus-visible:outline-none"
                      rows="6"
                      id="description"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required={true}
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
                      value={Hustler.join(', ')}
                      onChange={(e) => setHustler(e.target.value.split(', '))}
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
                      name="ScrumMaster"
                      value={ScrumMaster.join(', ')}
                      onChange={(e) =>
                        setScrumMaster(e.target.value.split(', '))
                      }
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Hipster<span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      value={Hipster.join(', ')}
                      onChange={(e) => setHipster(e.target.value.split(', '))}
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Hacker<span className="text-meta-1">*</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none"
                      type="text"
                      value={Hacker.join(', ')}
                      onChange={(e) => setHacker(e.target.value.split(', '))}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-3 text-center py-4">
                  <div>
                    <TwoButton>
                      <span>Delete</span>
                    </TwoButton>
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

export default ViewShowcaseProjects;
