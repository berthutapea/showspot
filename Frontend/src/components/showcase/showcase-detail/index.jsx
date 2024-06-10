import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Items from '../../../utils/items';
import { FaLink, FaCode } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import placeholderImage from '../../../assets/images/placeholder.jpg';
import ShowcaseYoutube from '../showcase-youtube';

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
      <h1 className="text-center text-4xl font-medium mt-8 text-accent">
        {item?.title}
      </h1>

      {item?.img?.map((image, index) => (
        <div key={index} className="mt-10">
          <div className="mx-1 md:mx-4 rounded-lg single-blog border-2 border-primary flex flex-col justify-between">
            <LazyLoadImage
              placeholderSrc={placeholderImage}
              src={image}
              className="showcase_image object-cover"
            />
          </div>
        </div>
      ))}
      <div className="mt-10">
        <h1 className="text-center text-4xl font-medium mt-8 text-accent">
          Video Project
        </h1>
        <ShowcaseYoutube url={youtubeUrl} />
      </div>
      <p className="text-accent mt-10 mb-6">
        <span className="font-semibold text-xl">Description: </span>{' '}
        {item?.description}
      </p>
      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-3 text-accent">Features:</h2>
        <ul className="list-disc grid grid-cols-1 md:grid-cols-2 ml-4">
          {item?.features?.map((feature, index) => (
            <li key={index} className="text-accent">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-3 text-accent">
          Tools & Technologies:
        </h2>
        <ul className="list-disc grid grid-cols-1 md:grid-cols-2 ml-4">
          {item?.technologies?.map((feature, index) => (
            <li key={index} className="text-accent">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center mt-8">
        <a href={item?.liveLink} className="mr-4" target="blank">
          <div className="primary-button">
            <span>Visit Now</span>
            <span>
              <FaLink />
            </span>
          </div>
        </a>
        <a href={item?.codeLink} target="blank">
          <div className="secondary-button">
            <span>Source Code</span>
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
