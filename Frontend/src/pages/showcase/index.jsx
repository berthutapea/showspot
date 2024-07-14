import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import BottomLine from '../../components/bottom-line';
import { fetchShowcaseProjectsGeneral } from '../../configs/redux/action/generalUsersAction';
import {
  headingAnimation,
  sectionBodyAnimation,
} from '../../hooks/useAnimation';

const ShowCase = () => {
  const [items, setItems] = useState([]);
  const [activeBtn, setActiveBtn] = useState('all');
  const location = useLocation();
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const dispatch = useDispatch();
  const animation = useAnimation();

  const { generalShowcaseProjectsData } = useSelector(
    (state) => state.generalShowcaseProjectsData
  );

  useEffect(() => {
    dispatch(fetchShowcaseProjectsGeneral());
  }, [dispatch]);

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
    if (
      location.pathname === '/' &&
      Array.isArray(generalShowcaseProjectsData)
    ) {
      setItems(generalShowcaseProjectsData.slice(0, 6));
    } else {
      setItems(
        Array.isArray(generalShowcaseProjectsData)
          ? generalShowcaseProjectsData
          : []
      );
    }
  }, [inView, animation, location.pathname, generalShowcaseProjectsData]);

  const filterItem = (filterId) => {
    if (Array.isArray(generalShowcaseProjectsData)) {
      const filtered = generalShowcaseProjectsData.filter(
        (item) => item.project_filter_id === filterId
      );
      setItems(location.pathname === '/' ? filtered.slice(0, 6) : filtered);
    }
  };

  return (
    <div
      className={`${location.pathname !== '/' ? 'pt-20 bg-white' : 'bg-neutral'}`}
    >
      <div className="parent py-12">
        <motion.div
          initial="hidden"
          animate={viewDiv && 'visible'}
          variants={headingAnimation}
        >
          <div className="mb-12">
            <h3 className="text-accent text-center">
              Have a seat with a cup of coffee, and enjoy our showcase
            </h3>
            <h1 className="text-4xl font-semibold text-center text-accent">
              Showcase <span className="text-primary">Projects</span>
            </h1>
            <BottomLine />
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={viewDiv && 'visible'}
          variants={sectionBodyAnimation}
        >
          <div className="mt-6 mb-10 flex items-center justify-center flex-wrap">
            <button
              className={`btn btn-lg bg-primary border-2 border-primary hover:border-primary duration-300 mx-3 my-3 sm:my-0 w-20 h-10 cursor-pointer rounded-lg text-white transition hover:bg-transparent hover:text-accent ${
                activeBtn === 'all' && 'active-btn'
              }`}
              onClick={() => {
                setActiveBtn('all');
                setItems(
                  location.pathname === '/'
                    ? generalShowcaseProjectsData.slice(0, 6)
                    : generalShowcaseProjectsData
                );
              }}
            >
              All
            </button>
            <button
              className={`btn btn-lg bg-primary border-2 border-primary hover:border-primary duration-300 mx-3 my-3 sm:my-0 w-20 h-10 cursor-pointer rounded-lg text-white transition hover:bg-transparent hover:text-accent ${
                activeBtn === 'best' && 'active-btn'
              }`}
              onClick={() => {
                setActiveBtn('best');
                filterItem(1);
              }}
            >
              The Best
            </button>
            <button
              className={`btn btn-lg bg-primary border-2 border-primary hover:border-primary duration-300 mx-3 my-3 sm:my-0 w-20 h-10 cursor-pointer rounded-lg text-white transition hover:bg-transparent hover:text-accent ${
                activeBtn === 'mobile' && 'active-btn'
              }`}
              onClick={() => {
                setActiveBtn('mobile');
                filterItem(2);
              }}
            >
              Mobile
            </button>
            <button
              className={`btn btn-lg bg-primary border-2 border-primary hover:border-primary duration-300 mx-3 my-3 sm:my-0 w-20 h-10 cursor-pointer rounded-lg text-white transition hover:bg-transparent hover:text-accent ${
                activeBtn === 'web' && 'active-btn'
              }`}
              onClick={() => {
                setActiveBtn('web');
                filterItem(3);
              }}
            >
              Web
            </button>
          </div>

          {/* Items Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.isArray(items) &&
              items.map((data) => (
                <motion.div
                  key={data.application_id}
                  initial={{ x: 200, opacity: 0, scale: 0 }}
                  animate={{
                    x: 0,
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }}
                  className="item-container rounded-lg shadow-lg p-3 flex flex-col justify-between hover:shadow-primary duration-500 border-2 border-primary"
                >
                  <div className="item h-full">
                    <img
                      className="rounded-lg h-full w-full"
                      src={data.application_image}
                      alt={data.application_title || 'Item Image'}
                    />
                    <div className="overlay">
                      <h3 className="text-2xl text-primary font-semibold">
                        {data.application_title}
                      </h3>
                      <Link
                        to={`/showcase/${data.application_id}`}
                        className="mt-3 inline-block"
                      >
                        <button className="btn btn-lg bg-primary border-2 border-primary hover:border-primary duration-300 mx-3 my-3 sm:my-0 w-30 h-10 cursor-pointer rounded-lg text-white transition hover:bg-transparent hover:text-accent">
                          See Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
        {location.pathname === '/' && (
          <div className="mt-10 text-right">
            <Link
              to="/showcase"
              className="text-2xl hover:text-primary duration-300"
            >
              <button className="primary-button text-xl">
                <span>See All</span>
                <span>
                  <FiArrowRight />
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowCase;
