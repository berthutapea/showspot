import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { sectionBodyAnimation } from '../../hooks/useAnimation';
import BottomLine from '../bottom-line';

const AboutUs = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);
  return (
    <div className="parent">
      <div className="py-20">
        <motion.div
          className="mb-6"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: 'spring' },
          }}
        >
          <h3 className="text-center text-accent">What is Show Spot?</h3>
          <h1 className="text-4xl font-semibold text-center text-accent">
            About <span className="text-primary">Us</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="items-center px-5 pt-4 text-center sm:px-20">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={viewDiv && 'visible'}
            variants={sectionBodyAnimation}
          >
            <p className="font-medium text-accent">
              Show Spot is an innovative step from Infinite Learning to simplify
              and speed up the process of managing student projects with a high
              level of data security. The platform not only provides solutions
              to existing problems, but also provides a better and efficient
              user experience for mentors and students.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
