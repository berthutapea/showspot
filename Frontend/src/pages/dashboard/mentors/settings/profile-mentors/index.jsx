import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LayoutMentors from '../../../../../layout/layout-mentors';
import BreadcrumbMentors from '../../../../../components/breadcrumb/breadcrumb-mentors';
import { Link } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import FourButton from '../../../../../components/buttons/four-button';
import { fetchMyProfileMentors } from '../../../../../configs/redux/action/myProfileAction';

const ProfileMentors = () => {
  const dispatch = useDispatch();
  const { dashboardData } = useSelector((state) => state.dashboardData);
  const profileAdminData = useSelector(
    (state) => state.profileAdminData.profileAdminData
  );

  useEffect(() => {
    if (dashboardData.mentor_id) {
      dispatch(fetchMyProfileMentors(dashboardData.mentor_id));
    }
  }, [dispatch, dashboardData.mentor_id]);

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
    <LayoutMentors>
      <BreadcrumbMentors pageName="My Profile" />
      <Link to={`/mentors/profile/edit/${profileAdminData.mentors_id}`}>
        <FourButton>
          <span>Edit Profile</span>
          <span>
            <FaUserEdit />
          </span>
        </FourButton>
      </Link>
      <div className="flex flex-col md:flex-row rounded-sm border border-stroke bg-white shadow-default mt-8">
        <div className="md:w-1/3 w-full px-4 py-4 flex justify-center md:justify-start">
          <img
            className="rounded-xl h-80 w-full md:w-80 object-cover"
            src={profileAdminData.photo_profile}
            alt="User Admin"
          />
        </div>
        <div className="md:w-2/3 px-4 md:px-20 py-4 md:py-20">
          <div className="w-full md:text-lg">
            <h2 className="font-medium mb-4 block text-black">
              <span className="inline-block w-32 md:w-40">Full Name</span>
              <span className="inline-block w-7">:</span>{' '}
              {profileAdminData.fullname}
            </h2>
            <h2 className="font-medium mb-4 block text-black">
              <span className="inline-block w-32 md:w-40">Campus</span>
              <span className="inline-block w-7">:</span>{' '}
              <span className="pl-[-10] md:pl-0">
                {profileAdminData.campus}
              </span>
            </h2>
            <h2 className="font-medium mb-4 block text-black">
              <span className="inline-block w-32 md:w-40">Major</span>
              <span className="inline-block w-7">:</span>{' '}
              {profileAdminData.major}
            </h2>
            <h2 className="font-medium mb-4 block text-black">
              <span className="inline-block w-32 md:w-40">Groups Type</span>
              <span className="inline-block w-7">:</span>
              <span className="pl-[-8] md:pl-0">
                {' '}
                {getGroupsType(profileAdminData.group_type_id)}
              </span>
            </h2>
            <h2 className="font-medium mb-4 block text-black">
              <span className="inline-block w-32 md:w-40">Class Type</span>
              <span className="inline-block w-7">:</span>
              <span className="pl-[-8] md:pl-0">
                {' '}
                {getClassTypeId(profileAdminData.class_type_id)}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </LayoutMentors>
  );
};

export default ProfileMentors;
