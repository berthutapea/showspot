import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import ShowCase from './pages/showcase';
import ShowcaseDetail from './components/showcase-detail';
import Contact from './pages/contact';
import Login from './pages/login';
import NotFound from './pages/notfound';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Dashboard from './pages/dashboard/dashboard';
import SopProjects from './pages/dashboard/admin/projects/sop-projects';
import ShowcaseProjects from './pages/dashboard/admin/projects/showcase-projects';
import ChangePassword from './pages/dashboard/admin/settings/change-password';
import Profile from './pages/dashboard/admin/settings/profile';
import MentorsData from './pages/dashboard/admin/master-data/mentors-data';
import StudentsData from './pages/dashboard/admin/master-data/students-data';
import AddMentors from './components/form/mentors-data-form/add-mentors';
import EditMentors from './components/form/mentors-data-form/edit-mentors';
import AddStudents from './components/form/students-data-form/add-students';
import EditStudents from './components/form/students-data-form/edit-students';
import ProfileAdmin from './components/profile/profile-admin';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
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
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/mentors-data" element={<MentorsData />} />
        <Route path="/admin/mentors-data/add" element={<AddMentors />} />
        <Route path="/admin/mentors-data/edit" element={<EditMentors />} />
        <Route path="/admin/students-data" element={<StudentsData />} />
        <Route path="/admin/students-data/add" element={<AddStudents />} />
        <Route path="/admin/students-data/edit" element={<EditStudents />} />
        <Route path="/admin/sop-projects" element={<SopProjects />} />
        <Route path="/admin/showcase-projects" element={<ShowcaseProjects />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/profile/edit" element={<ProfileAdmin />} />
        <Route path="/admin/change-password" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
};

export default App;
