import React from 'react';
import { useSelector } from 'react-redux';
import DefaultDashboardAdmin from './default-dashboard-admin';
import DefaultDashboardMentors from './default-dashboard-mentors';
import DefaultDashboardStudents from './default-dashboard-students';

const DefaultDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      {user && user.hak_akses === 'admin' && <DefaultDashboardAdmin />}
      {user && user.hak_akses === 'mentors' && <DefaultDashboardMentors />}
      {user && user.hak_akses === 'students' && <DefaultDashboardStudents />}
    </>
  );
};

export default DefaultDashboard;
