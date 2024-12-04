import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { calculateRotation } from "../utils/calculateRotation";

import classes from "./SixthStage.module.css";
const SixthStage = (props) => {
  const { stage } = calculateRotation(props.scrollAmount);
  const [isInViewport, setIsInViewport] = useState(false);
  const [windowSize, setWindowSize] = useState('')

  const initialTextState = {
    y: 250,
  };

  const returnAnimationProps = () => {
    if (windowSize === "l" || windowSize === "xl") {
      return {
        y: `${isInViewport ? 150 : 250}`,
      };
    } else {
      return {
        y: `${isInViewport ? 100 : 250}`,
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
    setWindowSize(props.windowSize)
  }, [props.windowSize]);

  return (
    <motion.section {...props} className={classes.main}>
      <motion.p
        className={classes.text}
        initial={initialTextState}
        animate={returnAnimationProps}
        transition={{ duration: 1 }}
      >
        FRAMELESS TV's
      </motion.p>
    </motion.section>
  );
};

export default SixthStage;
