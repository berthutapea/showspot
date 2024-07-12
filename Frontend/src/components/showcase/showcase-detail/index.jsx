import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Items from '../../../utils/items';
import { FaLink, FaCode } from 'react-icons/fa';
import ShowcaseYoutube from '../showcase-youtube';
import { fetchShowcaseProjectsGeneralById } from '../../../configs/redux/action/generalUsersAction';
import ShowcaseMembersGeneral from '../showcase-members/showcase-members-general';

const ShowcaseDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [item, setItem] = useState();
  const { generalShowcaseProjectsData } = useSelector(
    (state) => state.generalShowcaseProjectsData
  );

  useEffect(() => {
    const filtered = Items.find((item) => item.id === parseInt(id));
    setItem(filtered);
  }, [id]);

  useEffect(() => {
    dispatch(fetchShowcaseProjectsGeneralById(id));
  }, [dispatch, id]);

  return (
    <div className="parent py-20">
      <h1 className="text-center text-4xl font-semibold mt-8 text-accent">
        {generalShowcaseProjectsData?.project?.application_title}
      </h1>

      <div className="mt-10">
        <div className="mx-1 md:mx-4 rounded-lg single-blog flex flex-col justify-between">
          <img
            src={generalShowcaseProjectsData?.project?.application_image}
            className="showcase_image object-cover"
            alt="Showcase"
          />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-center text-4xl font-semibold mt-8 text-accent ">
          Video Project
        </h1>
        <ShowcaseYoutube />
      </div>
      <h2 className="text-accent mt-10 mb-6">
        <span className="font-semibold text-xl">Product Description: </span>{' '}
        {generalShowcaseProjectsData?.project?.description}
      </h2>
      <h2 className="text-accent mb-6">
        <span className="font-semibold text-xl">Groups Name: </span>{' '}
        {generalShowcaseProjectsData?.project?.group_name}
      </h2>
      <h2 className="text-xl font-semibold mb-6  text-accent">Members:</h2>
      <ShowcaseMembersGeneral />
      <div className="flex items-center mt-8">
        <a
          href={generalShowcaseProjectsData?.project?.link_design}
          className="mr-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="primary-button">
            <span>Hifi Design</span>
            <span>
              <FaLink />
            </span>
          </div>
        </a>
        <a
          href={generalShowcaseProjectsData?.project?.link_github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="secondary-button">
            <span>GitHub Link</span>
            <span>
              <FaCode />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ShowcaseDetail;
