import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import LayoutStudents from '../../../../../layout/layout-students';
import BreadcrumbStudents from '../../../../../components/breadcrumb/breadcrumb-students';
import FourButton from '../../../../../components/buttons/four-button';
import { fetchMyProfileStudents } from '../../../../../configs/redux/action/myProfileAction';

const ProfileStudents = () => {
  const dispatch = useDispatch();
  const { dashboardData } = useSelector((state) => state.dashboardData);
  const profileDataUsers = useSelector(
    (state) => state.profileDataUsers.profileDataUsers
  );

  useEffect(() => {
    if (dashboardData && dashboardData.student_id) {
      dispatch(fetchMyProfileStudents(dashboardData.student_id));
    }
  }, [dispatch, dashboardData]);

  const getGroupsType = (groupsType) => {
    switch (groupsType) {
      case 1:
        return 'Mobile';
      case 2:
        return 'Web A';
      case 3:
        return 'Web B';
      case 4:
        return 'Web C';
      default:
        return 'No response';
    }
  };

  const getClassTypeId = (classTypeId) => {
    switch (classTypeId) {
      case 1:
        return 'Morning';
      case 2:
        return 'Afternoon';
      case 3:
        return 'Night';
      default:
        return 'No response';
    }
  };

  return (
    <LayoutStudents>
      <BreadcrumbStudents pageName="My Profile" />
      {profileDataUsers && (
        <Link to={`/students/profile/edit/${profileDataUsers.student_id}`}>
          <FourButton>
            <span>Edit Profile</span>
            <span>
              <FaUserEdit />
            </span>
          </FourButton>
        </Link>
      )}
      <div className="flex flex-col md:flex-row rounded-sm border border-stroke bg-white shadow-default mt-8">
        <div className="md:w-1/3 w-full px-4 py-4 flex justify-center md:justify-start">
          <img
            className="rounded-xl h-80 w-full md:w-80 object-cover"
            src={profileDataUsers?.photo_profile}
            alt="User Students"
          />
        </div>
        <div className="md:w-2/3 px-4 md:px-20 py-4 md:py-20">
          <div className="w-full md:text-lg">
            <h2 className="font-medium mb-4 block text-black">
              <span className="inline-block w-32 md:w-40">Full Name</span>
              <span className="inline-block w-7">:</span>{' '}
              {profileDataUsers?.fullname}
            </h2>
            <h2 className="font-medium mb-4 block text-black">
              <span className="inline-block w-32 md:w-40">Campus</span>
              <span className="inline-block w-7">:</span>{' '}
              <span className="pl-[-10] md:pl-0">
                {profileDataUsers?.campus}
              </span>
            </h2>
            <h2 className="font-medium mb-4 block text-black">
              <span className="inline-block w-32 md:w-40">Major</span>
              <span className="inline-block w-7">:</span>{' '}
              {profileDataUsers?.major}
            </h2>
            <h2 className="font-medium mb-4 block text-black">
              <span className="inline-block w-32 md:w-40">Groups Type</span>
              <span className="inline-block w-7">:</span>
              <span className="pl-[-8] md:pl-0">
                {' '}
                {getGroupsType(profileDataUsers?.group_type_id)}
              </span>
            </h2>
            <h2 className="font-medium mb-4 block text-black">
              <span className="inline-block w-32 md:w-40">Class Type</span>
              <span className="inline-block w-7">:</span>
              <span className="pl-[-8] md:pl-0">
                {' '}
                {getClassTypeId(profileDataUsers?.class_type_id)}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </LayoutStudents>
  );
};

export default ProfileStudents;
