import React, { useEffect, useState } from 'react';
import Items from '../../utils/items';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import BottomLine from '../../components/bottom-line';
import {
  headingAnimation,
  sectionBodyAnimation,
} from '../../hooks/useAnimation';

const ShowCase = () => {
  const [items, setItems] = useState(Items);
  const [activeBtn, setActiveBtn] = useState('all');
  const location = useLocation();
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
    if (location.pathname === '/' && items.length > 6) {
      setItems(items.slice(0, 6));
    }
  }, [inView, animation, location, items]);

  const filterItem = (category) => {
    const filtered = Items.filter((item) => item.category === category);
    setItems(filtered);
    if (filtered.length > 6 && location.pathname === '/') {
      setItems(filtered.slice(0, 6));
    }
  };

  return (
    <div className={`${location.pathname !== '/' && 'pt-16'} bg-neutral`}>
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
              className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary duration-300 mx-3 my-3 sm:my-0 ${
                activeBtn === 'all' && 'active-btn'
              }`}
              onClick={() => {
                setActiveBtn('all');
                location.pathname === '/'
                  ? setItems(Items.slice(0, 6))
                  : setItems(Items);
              }}
            >
              All
            </button>
            <button
              className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:text-accent hover:border-primary duration-300 mx-3 my-3 sm:my-0 ${
                activeBtn === 'business' && 'active-btn'
              }`}
              onClick={() => {
                setActiveBtn('business');
                filterItem('business');
              }}
            >
              The Best
            </button>
            <button
              className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:text-accent  hover:border-primary duration-300 mx-3 my-3 sm:my-0 ${
                activeBtn === 'personal' && 'active-btn'
              }`}
              onClick={() => {
                setActiveBtn('personal');
                filterItem('personal');
              }}
            >
              Mobile
            </button>
            <button
              className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:text-accent  hover:border-primary duration-300 mx-3 my-3 sm:my-0 ${
                activeBtn === 'game' && 'active-btn'
              }`}
              onClick={() => {
                setActiveBtn('game');
                filterItem('game');
              }}
            >
              Web
            </button>
          </div>

          {/* Items Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <motion.div
                initial={{ x: 200, opacity: 0, scale: 0 }}
                animate={{
                  x: 0,
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
                key={item.id}
                className="item-container rounded-lg shadow-lg p-3 flex flex-col justify-between hover:shadow-primary duration-500 border-2 border-primary"
              >
                <div className="item h-full">
                  <img
                    className="rounded-lg h-full w-full"
                    src={item.mainImage}
                    alt={item.title || 'Item Image'}
                  />
                  <div className="overlay">
                    <h3 className="text-2xl text-primary font-semibold">
                      {item.title}
                    </h3>
                    <Link
                      to={`/showcase/${item.id}`}
                      className="mt-3 inline-block"
                    >
                      <button className="btn btn-sm border-2 border-transparent bg-primary hover:bg-transparent text-white hover:text-accent hover:border-primary duration-500">
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
              <button className="primary-button font-bold text-xl">
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
