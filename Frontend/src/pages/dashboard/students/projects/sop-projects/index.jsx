import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { TfiPrinter } from 'react-icons/tfi';
import ThreeButton from '../../../../../components/buttons/three-button';
import html2canvas from 'html2canvas';
import LayoutStudents from '../../../../../layout/layout-students';
import BreadcrumbStudents from '../../../../../components/breadcrumb/breadcrumb-students';
import jsPDF from 'jspdf';
import SopStudents from '../../../../../components/sop/sop-student';

const SopProjects = () => {
  const sopRef = useRef();
  const { sopProjectsData } = useSelector((state) => state.sopProjectsData);

  const handleDownloadPdf = async () => {
    const sopElement = sopRef.current;
    const canvas = await html2canvas(sopElement);
    const imgData = canvas.toDataURL('image/png');
    // eslint-disable-next-line new-cap
    const pdf = new jsPDF('p', 'mm', 'a2');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${sopProjectsData.sop_project_title || 'SOP'}.pdf`);
  };

  return (
    <LayoutStudents>
      <BreadcrumbStudents pageName="Sop Projects" />
      <div className="flex flex-col md:flex-row w-full gap-3 text-center py-4">
        <div className="w-full flex flex-col md:flex-row-4 md:text-right">
          <div>
            <ThreeButton
              onClick={() => {
                handleDownloadPdf();
              }}
            >
              <span>Save as PDF</span>
              <span>
                <TfiPrinter />
              </span>
            </ThreeButton>
          </div>
        </div>
      </div>
      <div className="sm:grid-cols-2 mt-6">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Important information
              </h3>
            </div>
            <div ref={sopRef}>
              <SopStudents />
            </div>
          </div>
        </div>
      </div>
    </LayoutStudents>
  );
};

export default SopProjects;
