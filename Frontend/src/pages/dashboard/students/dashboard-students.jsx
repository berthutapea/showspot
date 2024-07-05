import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDashboardStudent } from '../../../configs/redux/action/dashboardAction';
import DefaultDashboardStudents from '../../../components/default-dashboard/default-dashboard-students';

const DashboardStudents = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDashboardStudent());
  }, [dispatch]);
  return <DefaultDashboardStudents />;
};

export default DashboardStudents;
