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
import ChangePasswordAdmin from '../../pages/dashboard/admin/settings/change-password-admin';
import MentorsData from '../../pages/dashboard/admin/master-data/mentors-data';
import StudentsData from '../../pages/dashboard/admin/master-data/students-data';
import AddMentors from '../../components/form/mentors-data-form/add-mentors';
import EditMentors from '../../components/form/mentors-data-form/edit-mentors';
import AddStudents from '../../components/form/students-data-form/add-students';
import EditStudents from '../../components/form/students-data-form/edit-students';
import AddSop from '../../components/form/sop-form/add-sop';
import EditSop from '../../components/form/sop-form/edit-sop';
import DashboardMentors from '../../pages/dashboard/mentors/dashboard-mentors';
import SopProjectsMentors from '../../pages/dashboard/mentors/projects/sop-projects';
import ShowcaseProjectsMentors from '../../pages/dashboard/mentors/projects/showcase-projects';
import ProfileMentorsEdit from '../../components/profile/profile-mentors-edit';
import DashboardStudents from '../../pages/dashboard/students/dashboard-students';
import SopProjectsStudents from '../../pages/dashboard/students/projects/sop-projects';
import ShowcaseProjectsStudents from '../../pages/dashboard/students/projects/showcase-projects';
import UploadsShowcaseProjects from '../../components/form/showcase-projects-form/showcase-projects-form-students/uploads-showcase-projects';
import MainLayout from '../../layout/main-layout';
import ViewShowcasePendingAdmin from '../../components/form/showcase-projects-form/showcase-projects-form-admin/view-showcase-pending-admin';
import ViewShowcaseConfirmedAdmin from '../../components/form/showcase-projects-form/showcase-projects-form-admin/view-showcase-confirmed-admin';
import ViewShowcaseRejectedAdmin from '../../components/form/showcase-projects-form/showcase-projects-form-admin/view-showcase-rejected-admin';
import ViewShowcasePendingMentors from '../../components/form/showcase-projects-form/showcase-projects-form-mentors/view-showcase-pending-admin';
import ViewShowcaseConfirmedMentors from '../../components/form/showcase-projects-form/showcase-projects-form-mentors/view-showcase-confirmed-admin';
import ViewShowcaseRejectedMentors from '../../components/form/showcase-projects-form/showcase-projects-form-mentors/view-showcase-rejected-admin';
import ProfileAdminEdit from '../../components/profile/profile-admin-edit';
import ProfileAdmin from '../../pages/dashboard/admin/settings/profile-admin';
import ProfileMentors from '../../pages/dashboard/mentors/settings/profile-mentors';
import ChangePasswordMentors from '../../pages/dashboard/mentors/settings/change-password-mentors';
import ProfileStudents from '../../pages/dashboard/students/settings/profile-students';
import ChangePasswordStudents from '../../pages/dashboard/students/settings/change-password-students';
import ProfileStudentsEdit from '../../components/profile/profile-students-edit';
import ViewShowcaseProjectsEdit from '../../components/form/showcase-projects-form/showcase-projects-form-students/view-showcase-projects-edit';
import ViewShowcaseProjects from '../../components/form/showcase-projects-form/showcase-projects-form-students/view-showcase-projects';

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
      <Route path="/admin/students-data/edit/:id" element={<EditStudents />} />
      <Route path="/admin/sop-projects" element={<SopProjects />} />
      <Route path="/admin/sop-projects/add" element={<AddSop />} />
      <Route path="/admin/sop-projects/edit" element={<EditSop />} />
      <Route path="/admin/showcase-projects" element={<ShowcaseProjects />} />
      <Route
        path="/admin/showcase-projects/pending/view/:id"
        element={<ViewShowcasePendingAdmin />}
      />
      <Route
        path="/admin/showcase-projects/confirmed/view/:id"
        element={<ViewShowcaseConfirmedAdmin />}
      />
      <Route
        path="/admin/showcase-projects/rejected/view/:id"
        element={<ViewShowcaseRejectedAdmin />}
      />
      <Route path="/admin/profile" element={<ProfileAdmin />} />
      <Route path="/admin/profile/edit/:id" element={<ProfileAdminEdit />} />
      <Route path="/admin/change-password" element={<ChangePasswordAdmin />} />
      {/* Route Dashboard Admin */}

      {/* Route Dashboard Mentors */}
      <Route path="/mentors/dashboard" element={<DashboardMentors />} />
      <Route
        path="/mentors/showcase-projects"
        element={<ShowcaseProjectsMentors />}
      />
      <Route path="/mentors/sop-projects" element={<SopProjectsMentors />} />
      <Route
        path="/mentors/showcase-projects/pending/view/:id"
        element={<ViewShowcasePendingMentors />}
      />
      <Route
        path="/mentors/showcase-projects/confirmed/view/:id"
        element={<ViewShowcaseConfirmedMentors />}
      />
      <Route
        path="/mentors/showcase-projects/rejected/view/:id"
        element={<ViewShowcaseRejectedMentors />}
      />
      <Route path="/mentors/profile" element={<ProfileMentors />} />
      <Route
        path="/mentors/profile/edit/:id"
        element={<ProfileMentorsEdit />}
      />
      <Route
        path="/mentors/change-password"
        element={<ChangePasswordMentors />}
      />
      {/* Route Dashboard Mentors */}

      {/* Route Dashboard Students */}
      <Route path="/students/dashboard" element={<DashboardStudents />} />
      <Route
        path="/students/showcase-projects"
        element={<ShowcaseProjectsStudents />}
      />
      <Route path="/students/sop-projects" element={<SopProjectsStudents />} />
      <Route
        path="/students/showcase-projects/edit/:id"
        element={<ViewShowcaseProjectsEdit />}
      />
      <Route
        path="/students/showcase-projects/uploads"
        element={<UploadsShowcaseProjects />}
      />
      <Route
        path="/students/showcase-projects/view/:id"
        element={<ViewShowcaseProjects/>}
      />
      <Route path="/students/profile" element={<ProfileStudents />} />
      <Route
        path="/students/profile/edit/:id"
        element={<ProfileStudentsEdit />}
      />
      <Route
        path="/students/change-password"
        element={<ChangePasswordStudents />}
      />
      {/* Route Dashboard Students */}
    </Routes>
  );
};

export default AppRoutes;
