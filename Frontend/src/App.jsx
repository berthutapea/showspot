import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import NotFound from './pages/notfound';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ShowCase from './pages/showcase';
import ShowcaseDetail from './components/showcase-detail';
import Contact from './pages/contact';
import About from './pages/about';
import Dashboard from './pages/dashboard/dashboard';
import MentorData from './pages/dashboard/admin/master-data/mentor-data';
import StudentData from './pages/dashboard/admin/master-data/student-data';
import SopProject from './pages/dashboard/admin/project/sop-project';
import ShowcaseProject from './pages/dashboard/admin/project/showcase-project';
import ChangePassword from './pages/dashboard/admin/setting/change-password';

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
        <Route path="/dashboard/admin" element={<Dashboard />} />
        <Route path="/mentor-data" element={<MentorData />} />
        <Route path="/student-data" element={<StudentData />} />
        <Route path="/sop-project" element={<SopProject />} />
        <Route path="/showcase-project" element={<ShowcaseProject />} />
        <Route path="/change-password/admin" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
};

export default App;
