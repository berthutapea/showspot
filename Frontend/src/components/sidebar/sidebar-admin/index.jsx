import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LogoShowSpot from '../../../assets/images/showspot-logo.png';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { RxDashboard } from 'react-icons/rx';
import { FiDatabase, FiSettings } from 'react-icons/fi';
import { GoProject } from 'react-icons/go';
import { MdKeyboardArrowDown } from 'react-icons/md';
import SidebarLinkGroup from '../sidebar-link-group';

const SidebarAdmin = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-primary duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-center px-6 py-5.5 lg:py-6.5 object-cover">
        <NavLink to="/dashboard/admin">
          <img
            src={LogoShowSpot}
            alt="Logo Show Spot"
            className="w-16"
            title="Logo Show Spot"
          />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <AiOutlineArrowLeft className="text-xl text-white hover:text-accent" />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear text-white">
        <nav className="mt-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <ul className="mb-4 flex flex-col gap-6">
              {/* <!--Dashboard Admin--> */}
              <NavLink
                to="/admin/dashboard"
                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:text-accent ${
                  pathname.includes('dashboard') && 'bg-graydark'
                }`}
              >
                <RxDashboard />
                Dashboard
              </NavLink>
              {/* <!-- Dashboard Admin --> */}

              {/* <!-- Master Data Admin --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/masterdata' || pathname.includes('masterdata')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:text-accent ${
                          pathname === '/masterdata' ||
                          pathname.includes('masterdata')
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <FiDatabase />
                        Master Data
                        <MdKeyboardArrowDown
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-2xl ${
                            open && 'rotate-180'
                          }`}
                        />
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/admin/users-data"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-accent ' +
                                (isActive && '!text-accent')
                              }
                            >
                              Users Data
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Master Data Admin --> */}

              {/* <!-- Projects Admin --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/projects' || pathname.includes('projects')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:text-accent ${
                          pathname === '/projects' ||
                          pathname.includes('projects')
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <GoProject />
                        Projects
                        <MdKeyboardArrowDown
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-2xl ${
                            open && 'rotate-180'
                          }`}
                        />
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/admin/sop-projects"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-accent ' +
                                (isActive && '!text-accent')
                              }
                            >
                              Sop Projects
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/admin/showcase-projects"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-accent ' +
                                (isActive && '!text-accent')
                              }
                            >
                              Showcase Projects
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Projects Admin --> */}

              {/* <!-- Settings Admin --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/settings' || pathname.includes('settings')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:text-accent ${
                          (pathname === '/settings' ||
                            pathname.includes('settings')) &&
                          'bg-graydark dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <FiSettings />
                        Settings
                        <MdKeyboardArrowDown
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-2xl ${
                            open && 'rotate-180'
                          }`}
                        />
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/admin/change-password"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-accent ' +
                                (isActive && '!text-white')
                              }
                            >
                              Change Password
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/login"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-accent ' +
                                (isActive && '!text-white')
                              }
                            >
                              Logout
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Settings Admin --> */}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default SidebarAdmin;
