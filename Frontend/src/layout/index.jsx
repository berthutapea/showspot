import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SidebarAdmin from '../components/sidebar/sidebar-admin';
import SidebarMentors from '../components/sidebar/sidebar-mentors';
import SidebarStudents from '../components/sidebar/sidebar-students';
import Header from '../components/header';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        {user && user.hak_akses === 'admin' && (
          <SidebarAdmin
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        )}

        {user && user.hak_akses === 'mentors' && (
          <SidebarMentors
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        )}
        {user && user.hak_akses === 'students' && (
          <SidebarStudents
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        )}

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
