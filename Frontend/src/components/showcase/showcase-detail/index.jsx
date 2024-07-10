import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Items from '../../../utils/items';
import { FaLink, FaCode } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import placeholderImage from '../../../assets/images/placeholder.jpg';
import ShowcaseYoutube from '../showcase-youtube';
// import ShowcaseMembers from '../showcase-members';
import Comments from '../showcase-comments/comments';

const ShowcaseDetail = () => {
  const youtubeUrl = 'https://youtu.be/Ztli49M7o2A?si=Tz6lY_ztVAGWDwjY';

  const { id } = useParams();
  const [item, setItem] = useState();
  useEffect(() => {
    const filtered = Items.find((item) => item.id === parseInt(id));
    setItem(filtered);
  }, [id]);

  return (
    <div className="parent py-20">
      <h1 className="text-center text-4xl font-semibold mt-8 text-accent">
        {item?.title}
      </h1>

      {item?.img?.map((image, index) => (
        <div key={index} className="mt-10">
          <div className="mx-1 md:mx-4 rounded-lg single-blog flex flex-col justify-between">
            <LazyLoadImage
              placeholderSrc={placeholderImage}
              src={image}
              className="showcase_image object-cover"
            />
          </div>
        </div>
      ))}
      <div className="mt-10">
        <h1 className="text-center text-4xl font-semibold mt-8 text-accent ">
          Video Project
        </h1>
        <ShowcaseYoutube url={youtubeUrl} />
      </div>
      <h2 className="text-accent mt-10 mb-6">
        <span className="font-semibold text-xl">Product Description: </span>{' '}
        {item?.description}
      </h2>
      <h2 className="text-accent mb-6">
        <span className="font-semibold text-xl">Groups Name: </span>{' '}
        {item?.grupsName}
      </h2>
      <h2 className="text-xl font-semibold mb-6  text-accent">Members:</h2>
      {/* <ShowcaseMembers /> */}
      <div className="flex items-center mt-8">
        <a href={item?.liveLink} className="mr-4" target="blank">
          <div className="primary-button">
            <span>Hifi Design</span>
            <span>
              <FaLink />
            </span>
          </div>
        </a>
        <a href={item?.codeLink} target="blank">
          <div className="secondary-button">
            <span>GitHub Link</span>
            <span>
              <FaCode />
            </span>
          </div>
        </a>
      </div>
      <div className="mt-10">
        <Comments />
      </div>
    </div>
  );
};

export default ShowcaseDetail;
