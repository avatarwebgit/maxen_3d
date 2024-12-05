import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { calculateRotation } from '../utils/calculateRotation';

import classes from './SixthStage.module.css';
const SixthStage = ({ windowSize, scrollAmount }) => {
  const { stage } = calculateRotation(scrollAmount);
  const [isInViewport, setIsInViewport] = useState(false);
  const [size, setSize] = useState('');

  const initialTextState = {
    y: 250,
  };

  const returnAnimationProps = e => {
    if (e === 'l' || e === 'xl') {
      return {
        y: isInViewport ? 150 : 250,
      };
    } else {
      return {
        y: isInViewport ? 65 : 250,
      };
    }
  };

  useEffect(() => {
    if (stage === 6) {
      setIsInViewport(true);
    } else {
      setIsInViewport(false);
    }
  }, [stage]);

  useEffect(() => {
    setSize(windowSize);
  }, [windowSize]);

  return (
    <motion.section className={classes.main}>
      <motion.p
        className={classes.text}
        initial={initialTextState}
        animate={returnAnimationProps(size)}
        transition={{ duration: 1 }}
      >
        FRAMELESS TV's
      </motion.p>
    </motion.section>
  );
};

export default SixthStage;
