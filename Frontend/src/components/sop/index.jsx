// components/sop/SOP.js
import React from 'react';
import { sopData } from '../../utils/sop-data';

const SOPSection = ({ title, children }) => (
  <div className="mb-8 text-accent">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

const SOP = () => (
  <div className="container mx-auto p-6">
    <h1 className="text-2xl font-bold mb-8 text-center text-accent">
      STANDAR OPERASIONAL PROSEDUR (SOP) PENGUPLOADAN PROYEK
    </h1>
    {sopData.map((section, index) => (
      <SOPSection key={index} title={section.title}>
        {section.content}
      </SOPSection>
    ))}
  </div>
);

export default SOP;
