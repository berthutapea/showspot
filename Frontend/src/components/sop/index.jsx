import React, { useEffect } from 'react';
import { fetchSopProjects } from '../../configs/redux/action/sopProjectsAction';
import { useDispatch, useSelector } from 'react-redux';

const SOP = () => {
  const dispatch = useDispatch();
  const { sopProjectsData } = useSelector((state) => state.sopProjectsData);

  useEffect(() => {
    dispatch(fetchSopProjects());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8 text-center text-accent">
        {sopProjectsData.data?.sop_project_title}
      </h1>
      <div className="mb-8 text-accent">
        <h2
          dangerouslySetInnerHTML={{
            __html: sopProjectsData.data?.sop_project_content,
          }}
          className="mb-4"
        ></h2>
      </div>
    </div>
  );
};

export default SOP;
