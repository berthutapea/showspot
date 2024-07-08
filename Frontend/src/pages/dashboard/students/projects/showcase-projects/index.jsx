import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FaEye, FaUpload } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import LayoutStudents from '../../../../../layout/layout-students';
import BreadcrumbStudents from '../../../../../components/breadcrumb/breadcrumb-students';
import { Link } from 'react-router-dom';
import OneButton from '../../../../../components/buttons/one-button';

import { fetchShowCaseProjectsStudent } from '../../../../../configs/redux/action/showcaseProjectsAction';

const ITEMS_PER_PAGE = 4;

const ShowcaseProjects = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShowCaseProjectsStudent());
  }, [dispatch]);

  const { showCaseProjectsData } = useSelector(
    (state) => state.showCaseProjectsData
  );

  console.log(showCaseProjectsData.data);

  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(ITEMS_PER_PAGE);
  // const [dataGaji, setDataGaji] = useState([]);

  // const totalPages = Math.ceil(DataGajiPegawai.length / ITEMS_PER_PAGE);

  // useEffect(() => {
  //   setDataGaji(DataGajiPegawai.slice(startIndex, endIndex));
  // }, [startIndex, endIndex]);

  // const goToPrevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage((prev) => prev - 1);
  //     setStartIndex((prev) => prev - ITEMS_PER_PAGE);
  //     setEndIndex((prev) => prev - ITEMS_PER_PAGE);
  //   }
  // };

  // const goToNextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage((prev) => prev + 1);
  //     setStartIndex((prev) => prev + ITEMS_PER_PAGE);
  //     setEndIndex((prev) => prev + ITEMS_PER_PAGE);
  //   }
  // };

  return (
    <LayoutStudents>
      <BreadcrumbStudents pageName="Showcase Projects" />
      <Link to="/students/showcase-projects/uploads">
        <OneButton>
          <span>Upload Projects</span>
          <span>
            <FaUpload />
          </span>
        </OneButton>
      </Link>
    </LayoutStudents>
  );
};

export default ShowcaseProjects;
