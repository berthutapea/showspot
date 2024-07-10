import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSopProjectsAdmin } from '../../../configs/redux/action/sopProjectsAction';

const SopStudents = () => {
  const dispatch = useDispatch();
  const { sopProjectsData } = useSelector((state) => state.sopProjectsData);

  useEffect(() => {
    dispatch(fetchSopProjectsAdmin());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8 text-center text-accent">
        {sopProjectsData.sop_project_title !== null &&
          sopProjectsData.sop_project_title !== undefined &&
          sopProjectsData.sop_project_title !== 0 && (
            <>{sopProjectsData.sop_project_title}</>
          )}
      </h1>
      <div className="mb-8 text-accent">
        {sopProjectsData.sop_project_content !== null &&
          sopProjectsData.sop_project_content !== undefined &&
          sopProjectsData.sop_project_content !== 0 && (
            <h2
              dangerouslySetInnerHTML={{
                __html: sopProjectsData.sop_project_content,
              }}
              className="mb-4"
            ></h2>
          )}
      </div>
    </div>
  );
};

export default SopStudents;
