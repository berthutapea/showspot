import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDashboardAdmin } from '../../../configs/redux/action/dashboardAction';
import DefaultDashboardAdmin from '../../../components/default-dashboard/default-dashboard-admin';

const DashboardAdmin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDashboardAdmin());
  }, [dispatch]);

  return <DefaultDashboardAdmin />;
};

export default DashboardAdmin;
