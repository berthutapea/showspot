import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home';
import About from '../../pages/about';
import ShowCase from '../../pages/showcase';
import ShowcaseDetail from '../../components/showcase/showcase-detail';
import Contact from '../../pages/contact';
import Login from '../../pages/login';
import NotFound from '../../pages/notfound';
import DashboardAdmin from '../../pages/dashboard/admin/dashboard-admin';
import SopProjects from '../../pages/dashboard/admin/projects/sop-projects';
import ShowcaseProjects from '../../pages/dashboard/admin/projects/showcase-projects';
import ChangePassword from '../../pages/dashboard/admin/settings/change-password';
import Profile from '../../pages/dashboard/admin/settings/profile';
import MentorsData from '../../pages/dashboard/admin/master-data/mentors-data';
import StudentsData from '../../pages/dashboard/admin/master-data/students-data';
import AddMentors from '../../components/form/mentors-data-form/add-mentors';
import EditMentors from '../../components/form/mentors-data-form/edit-mentors';
import AddStudents from '../../components/form/students-data-form/add-students';
import EditStudents from '../../components/form/students-data-form/edit-students';
import ProfileAdmin from '../../components/profile/profile-admin';
import AddSop from '../../components/form/sop-form/add-sop';
import EditSop from '../../components/form/sop-form/edit-sop';
import ViewShowcaseLatest from '../../components/form/showcase-projects-form/showcase-projects-form-admin/view-showcase-latest';
import ViewShowcaseHistory from '../../components/form/showcase-projects-form/showcase-projects-form-admin/view-showcase-history';
import DashboardMentors from '../../pages/dashboard/mentors/dashboard-mentors';
import SopProjectsMentors from '../../pages/dashboard/mentors/projects/sop-projects';
import ShowcaseProjectsMentors from '../../pages/dashboard/mentors/projects/showcase-projects';
import ViewShowcaseLatestMentors from '../../components/form/showcase-projects-form/showcase-projects-form-mentors/view-showcase-latest';
import ViewShowcaseHistoryMentors from '../../components/form/showcase-projects-form/showcase-projects-form-mentors/view-showcase-history';
import ProfileMentors from '../../pages/dashboard/mentors/settings/profile';
import ProfileMentorsEdit from '../../components/profile/profile-mentors';
import ChangePasswordMentors from '../../pages/dashboard/mentors/settings/change-password';
import DashboardStudents from '../../pages/dashboard/students/dashboard-students';
import SopProjectsStudents from '../../pages/dashboard/students/projects/sop-projects';
import ShowcaseProjectsStudents from '../../pages/dashboard/students/projects/showcase-projects';
import ViewShowcaseLatestStudents from '../../components/form/showcase-projects-form/showcase-projects-form-students/view-showcase-latest';
import ViewShowcaseHistoryStudents from '../../components/form/showcase-projects-form/showcase-projects-form-students/view-showcase-history';
import ProfileStudents from '../../pages/dashboard/students/settings/profile';
import ProfileStudentsEdit from '../../components/profile/profile-students';
import ChangePasswordStudents from '../../pages/dashboard/students/settings/change-password';
import UploadsShowcaseProjects from '../../components/form/showcase-projects-form/showcase-projects-form-students/uploads-showcase-projects';
import MainLayout from '../../layout/main-layout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/about"
        element={
          <MainLayout>
            <About />
          </MainLayout>
        }
      />
      <Route
        path="/showcase"
        element={
          <MainLayout>
            <ShowCase />
          </MainLayout>
        }
      />
      <Route
        path="/showcase/:id"
        element={
          <MainLayout>
            <ShowcaseDetail />
          </MainLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <MainLayout>
            <Contact />
          </MainLayout>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />

      {/* Route Dashboard Admin */}
      <Route path="/admin/dashboard" element={<DashboardAdmin />} />
      <Route path="/admin/mentors-data" element={<MentorsData />} />
      <Route path="/admin/mentors-data/add" element={<AddMentors />} />
      <Route path="/admin/mentors-data/edit/:id" element={<EditMentors />} />
      <Route path="/admin/students-data" element={<StudentsData />} />
      <Route path="/admin/students-data/add" element={<AddStudents />} />
      <Route path="/admin/students-data/edit" element={<EditStudents />} />
      <Route path="/admin/sop-projects" element={<SopProjects />} />
      <Route path="/admin/sop-projects/add" element={<AddSop />} />
      <Route path="/admin/sop-projects/edit" element={<EditSop />} />
      <Route path="/admin/showcase-projects" element={<ShowcaseProjects />} />
      <Route
        path="/admin/showcase-projects/latest"
        element={<ViewShowcaseLatest />}
      />
      <Route
        path="/admin/showcase-projects/history"
        element={<ViewShowcaseHistory />}
      />
      <Route path="/admin/profile" element={<Profile />} />
      <Route path="/admin/profile/edit" element={<ProfileAdmin />} />
      <Route path="/admin/change-password" element={<ChangePassword />} />
      {/* Route Dashboard Admin */}

      {/* Route Dashboard Mentors */}
      <Route path="/mentors/dashboard" element={<DashboardMentors />} />
      <Route path="/mentors/showcase-projects" element={<ShowcaseProjectsMentors />} />
      <Route path="/mentors/sop-projects" element={<SopProjectsMentors />} />
      <Route
        path="/mentors/showcase-projects/latest"
        element={<ViewShowcaseLatestMentors />}
      />
      <Route
        path="/mentors/showcase-projects/history"
        element={<ViewShowcaseHistoryMentors />}
      />
      <Route path="/mentors/profile" element={<ProfileMentors />} />
      <Route path="/mentors/profile/edit" element={<ProfileMentorsEdit />} />
      <Route path="/mentors/change-password" element={<ChangePasswordMentors />} />
      {/* Route Dashboard Mentors */}

      {/* Route Dashboard Students */}
      <Route path="/students/dashboard" element={<DashboardStudents />} />
      <Route path="/students/showcase-projects" element={<ShowcaseProjectsStudents />} />
      <Route path="/students/sop-projects" element={<SopProjectsStudents />} />
      <Route
        path="/students/showcase-projects/latest"
        element={<ViewShowcaseLatestStudents />}
      />
      <Route
        path="/students/showcase-projects/uploads"
        element={<UploadsShowcaseProjects />}
      />
      <Route
        path="/students/showcase-projects/history"
        element={<ViewShowcaseHistoryStudents />}
      />
      <Route path="/students/profile" element={<ProfileStudents />} />
      <Route path="/students/profile/edit" element={<ProfileStudentsEdit />} />
      <Route path="/students/change-password" element={<ChangePasswordStudents />} />
      {/* Route Dashboard Students */}
    </Routes>
  );
};

export default AppRoutes;
