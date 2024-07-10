import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchShowcaseProjectsMentorsById } from '../../../../configs/redux/action/showcaseProjectsAction';

const ShowcaseMembersMentors = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const showcaseProjectsData = useSelector(
    (state) => state.showCaseProjectsData.showCaseProjectsData
  );

  useEffect(() => {
    dispatch(fetchShowcaseProjectsMentorsById(id));
  }, [dispatch, id]);

  const parseStudentNames = (studentNamesString) => {
    try {
      const trimmedString = studentNamesString.replace(/'/g, '"').trim();
      return JSON.parse(trimmedString);
    } catch (error) {
      console.error('Error parsing student names:', error);
      return [];
    }
  };

  return (
    <div className="container mx-auto my-4 text-accent">
      <table className="w-full border-collapse rounded-lg">
        <thead>
          <tr className="bg-neutral text-gray-600">
            <th className="px-4 py-3 text-center border">Role</th>
            <th className="px-4 py-3 text-center border">Full Name</th>
          </tr>
        </thead>
        <tbody>
          {showcaseProjectsData && showcaseProjectsData.group_project ? (
            showcaseProjectsData.group_project.map((groupProject, index) => (
              <tr
                key={groupProject.group_project_id + '-' + index}
                className="border-t"
              >
                <td className="px-4 py-3 border">
                  {groupProject.student_position}
                </td>
                <td className="px-4 py-3 border">
                  {groupProject.student_name &&
                    parseStudentNames(groupProject.student_name).map(
                      (student, idx) => (
                        <div key={groupProject.group_project_id + '-' + idx}>
                          <span className="text-xl text-gray-500">• </span>
                          {student}
                        </div>
                      )
                    )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="2"
                className="border-b border-[#eee] py-5 px-4 dark:border-strokedark"
              >
                <p className="text-black dark:text-white text-center">
                  No Members
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShowcaseMembersMentors;
