import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import VisionMissionItems from '../vision-mission/vision-mission-items';
import {
  headingAnimation,
  sectionBodyAnimation,
} from '../../hooks/useAnimation';
import BottomLine from '../bottom-line';

const VisionMission = () => {
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
    <div className="py-10 parent">
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && 'visible'}
        variants={headingAnimation}
      >
        <h3 className="text-center text-accent">Goals and Direction</h3>
        <h1 className="text-4xl font-semibold text-center text-accent">
          Vision <span className="text-primary">& Mission</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && 'visible'}
        variants={sectionBodyAnimation}
      >
        {VisionMissionItems?.map((VisionMissionItems) => (
          <div
            key={VisionMissionItems.id}
            className={`${
              VisionMissionItems.id % 2 === 0
                ? 'bg-base-100 impactfull-card shadow-lg border-2 border-primary'
                : 'bg-base-100 impactfull-card shadow-lg border-2 border-primary'
            } rounded-lg p-6 duration-300`}
          >
            <div className="w-40 mx-auto mb-4 text-center">
              {VisionMissionItems.icon}
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-center text-accent">
              {VisionMissionItems.title}
            </h2>
            <p className="text-accent">{VisionMissionItems.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default VisionMission;
