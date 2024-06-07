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
import UsersData from './pages/dashboard/admin/master-data/users-data';
import SopProjects from './pages/dashboard/admin/projects/sop-projects';
import ShowcaseProjects from './pages/dashboard/admin/projects/showcase-projects';
import ChangePassword from './pages/dashboard/admin/settings/change-password';
import UsersDataForm from './components/form/users-data-form';

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
        <Route path="/admin/users-data" element={<UsersData />} />
        <Route path="/admin/users-data/form" element={<UsersDataForm />} />
        <Route path="/admin/sop-projects" element={<SopProjects />} />
        <Route path="/admin/showcase-projects" element={<ShowcaseProjects />} />
        <Route path="/admin/change-password" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
};

export default App;
