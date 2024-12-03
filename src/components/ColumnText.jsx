import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { calculateRotation } from "../utils/calculateRotation";

import sharedStyles from "../style/shared.css";
import classes from "./ColumnText.module.css";
const ColumnText = (props, { className, lng }) => {
  const [rtl, setRtl] = useState(false);
  const [scroll, setScroll] = useState(0);

  const { stage } = calculateRotation(scroll);

  useEffect(() => {
    if (lng === "fa") {
      setRtl(true);
    } else {
      setRtl(false);
    }
  }, [lng]);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

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
        onClick={() => handleScrollToStage(0)}
      >
        طرح
      </button>
      <div className={classes.divider} />
      <button
        className={`${classes.text} ${stage === 1 ? classes.active : ""}`}
        onClick={() => handleScrollToStage(100)}
      >
        فن آوری
        <br />
        تصویر
      </button>
      <div className={classes.divider} />
      <button
        className={`${classes.text} ${stage === 2 ? classes.active : ""}`}
        onClick={() => handleScrollToStage(2000)}
      >
        فن آوری
        <br />
        صدا
      </button>
      <div className={classes.divider} />
      <button
        className={`${classes.text} ${stage === 3 ? classes.active : ""}`}
        onClick={() => handleScrollToStage(2900)}
      >
        پردازنده
      </button>
      <div className={classes.divider} />
      <button
        className={`${classes.text} ${stage === 4 ? classes.active : ""}`}
        onClick={() => handleScrollToStage(3900)}
      >
        امکانات
      </button>
      <div className={classes.divider} />
      <button
        className={`${classes.text} ${stage === 5 ? classes.active : ""}`}
        onClick={() => handleScrollToStage(5900)}
      >
        ممکن ها
      </button>
      <div className={classes.divider} />
      <button
        className={`${classes.text} ${stage === 6 ? classes.active : ""}`}
        onClick={() => handleScrollToStage(6500)}
      >
        اشتراک
        <br />
        صفحه نمایش
      </button>
      <div className={classes.divider} />
      <button
        className={`${classes.text} ${stage === 7 ? classes.active : ""}`}
        onClick={() => handleScrollToStage(7500)}
      >
        پایه تلوزیون
      </button>
    </motion.div>
  );
};

export default ColumnText;
