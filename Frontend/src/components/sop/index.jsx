import React, { useEffect } from 'react';
import { fetchSopProjects } from '../../configs/redux/action/sopProjectsAction';
import { useDispatch, useSelector } from 'react-redux';
// import { sopData } from '../../utils/sop-data';

const SOP = () => {
  const dispatch = useDispatch();
  const { sopProjectsData } = useSelector((state) => state.sopProjectsData);

  useEffect(() => {
    dispatch(fetchSopProjects());
  }, [dispatch]);

const SOPSection = ({ title, children }) => (
  <div className="mb-8 text-accent">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8 text-center text-accent">
        STANDAR OPERASIONAL PROSEDUR (SOP) PENGUPLOADAN PROYEK
      </h1>
      {sopProjectsData.map((section, index) => (
        <SOPSection key={index} title={section.title}>
          {section.content}
        </SOPSection>
      ))}
    </div>
  );
};

export default SOP;
