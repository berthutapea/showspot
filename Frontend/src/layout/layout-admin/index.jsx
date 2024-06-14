import React, { useState } from 'react';
import HeaderAdmin from '../../components/header/header-admin';
import SidebarAdmin from '../../components/sidebar/sidebar-admin';

const LayoutAdmin = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark bg-neutral">
      <div className="flex h-screen overflow-hidden">
        <SidebarAdmin
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <HeaderAdmin
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
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

export default LayoutAdmin;
