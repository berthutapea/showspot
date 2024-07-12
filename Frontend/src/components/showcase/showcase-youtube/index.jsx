import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShowcaseProjectsGeneralById } from '../../../configs/redux/action/generalUsersAction';

const ShowcaseYoutube = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { generalShowcaseProjectsData } = useSelector(
    (state) => state.generalShowcaseProjectsData
  );

  const extractVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|embed\/|watch\?v=|watch\?vi=|\/v\/|\/e\/|u\/\w\/|embed\/\w\/|watch\?vi=|watch\?v=|v\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = generalShowcaseProjectsData?.project?.link_video
    ? extractVideoId(generalShowcaseProjectsData.project.link_video)
    : null;

  useEffect(() => {
    if (id) {
      dispatch(fetchShowcaseProjectsGeneralById(id));
    }
  }, [dispatch, id]);

  if (!videoId) {
    return <div className="text-red-500">Invalid YouTube URL</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xl aspect-w-16 aspect-h-9 mt-10">
        <iframe
          className="w-full h-100 rounded-xl drop-shadow-2"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-presentation"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default ShowcaseYoutube;
