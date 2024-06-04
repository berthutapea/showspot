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
        <Route path="/dashboard/admin" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
