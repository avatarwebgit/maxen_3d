import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { calculateRotation } from "../utils/calculateRotation";

import classes from "./SixthStage.module.css";
const SixthStage = (props) => {
  const { stage } = calculateRotation(props.scrollAmount);
  const [isInViewport, setIsInViewport] = useState(false);

  const initialTextState = {
    y: 250,
  };

  useEffect(() => {
    if (stage === 6) {
      setIsInViewport(true);
    } else {
      setIsInViewport(false);
    }
  }, [stage]);

  return (
    <motion.section {...props} className={classes.main}>
      <motion.p
        className={classes.text}
        initial={initialTextState}
        animate={{ y: isInViewport ? 150 : 250 }}
        transition={{ duration: 1 }}
      >
        FRAMELESS TV's
      </motion.p>
    </motion.section>
  );
};

export default SixthStage;
