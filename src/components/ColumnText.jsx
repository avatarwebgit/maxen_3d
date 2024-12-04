import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { calculateRotation } from "../utils/calculateRotation";

import sharedStyles from "../style/shared.css";
import classes from "./ColumnText.module.css";
const ColumnText = (props, { className, lng }) => {
  const [rtl, setRtl] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [stageStep, setStageStep] = useState(0);

  const { stage } = calculateRotation(scroll);

  const stages = [0, 100, 2000, 2900, 4000, 5900, 6500, 7500];

  useEffect(() => {
    handleScrollToStage(stages[stage]);
    setStageStep(stage);
  }, []);

  const handleKeyDown = (event) => {
    let newStageStep = stageStep;

    switch (event.key) {
      case "ArrowUp":
        newStageStep = Math.max(stageStep - 1, 0);
        break;
      case "ArrowDown":
        newStageStep = Math.min(stageStep + 1, stages.length - 1);
        break;
      default:
        return;
    }

    setStageStep(newStageStep);
    handleScrollToStage(stages.at(newStageStep));
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [stageStep]);

  useEffect(() => {
    handleScrollToStage(stages.at(stageStep));
  }, [stageStep]);

  useEffect(() => {
    if (lng === "fa") {
      setRtl(true);
    } else {
      setRtl(false);
    }
  }, [lng, stage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToStage = (y) => {
    window.scrollTo(0, y);
  };

  return (
    <motion.div
      className={`${classes.main} ${className} ${
        rtl ? sharedStyles.rtl : sharedStyles.ltr
      }`}
      {...props}
    >
      <div className={classes.divider} />
      <button
        className={`${classes.text} ${stage === 0 ? classes.active : ""}`}
        onClick={() => handleScrollToStage(stages.at(0))}
      >
        طرح
      </button>
      <div className={classes.divider} />
      <button
        className={`${classes.text} ${stage === 1 ? classes.active : ""}`}
        onClick={() => handleScrollToStage(stages.at(1))}
      >
        فن آوری
        <br />
        تصویر
      </button>
      <div className={classes.divider} />
      <button
        className={`${classes.text} ${stage === 2 ? classes.active : ""}`}
        onClick={() => handleScrollToStage(stages.at(2))}
      >
        فن آوری
        <br />
        صدا
      </button>
      <div className={classes.divider} />
      <button
        className={`${classes.text} ${stage === 3 ? classes.active : ""}`}
        onClick={() => handleScrollToStage(stages.at(3))}
      >
        پردازنده
      </button>
      <div className={classes.divider} />
      <button
        className={`${classes.text} ${stage === 4 ? classes.active : ""}`}
        onClick={() => handleScrollToStage(stages.at(4))}
      >
        امکانات
      </button>
      <div className={classes.divider} />
      <button
        className={`${classes.text} ${stage === 5 ? classes.active : ""}`}
        onClick={() => handleScrollToStage(stages.at(5))}
      >
        ممکن ها
      </button>
      <div className={classes.divider} />
      <button
        className={`${classes.text} ${stage === 6 ? classes.active : ""}`}
        onClick={() => handleScrollToStage(stages.at(6))}
      >
        اشتراک
        <br />
        صفحه نمایش
      </button>
      <div className={classes.divider} />
      <button
        className={`${classes.text} ${stage === 7 ? classes.active : ""}`}
        onClick={() => handleScrollToStage(stages.at(7))}
      >
        پایه تلوزیون
      </button>
    </motion.div>
  );
};

export default ColumnText;
