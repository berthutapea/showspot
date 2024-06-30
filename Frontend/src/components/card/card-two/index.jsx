import React, { useEffect } from 'react';
import { RiAdminFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardAdmin } from '../../../configs/redux/action/dashboardAction';

const CardTwo = () => {
  const dispatch = useDispatch();
  const { dashboardData } = useSelector((state) => state.dashboardData);

  useEffect(() => {
    dispatch(fetchDashboardAdmin());
  }, [dispatch]);
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2">
        <RiAdminFill className="fill-primary text-xl" />
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black">
            {' '}
            {dashboardData?.total?.admin}
          </h4>
          <span className="text-sm font-medium">Admin Data</span>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
