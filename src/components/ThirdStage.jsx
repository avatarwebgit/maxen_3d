import React from "react";
import { motion } from "framer-motion";

import edge from "../assets/svg/edge.svg";

import classes from "./ThirdStage.module.css";
const ThirdStage = ({ props }) => {
  return (
    <motion.section className={classes.main} {...props}>
      <div className={classes.content_wrapper}>
        <span className={classes.svg_wrapper}>
          <img src={edge} alt="Thin edge" />
        </span>
        <span className={classes.text_wrapper}>
          <p className={classes.text }>
            تلویزیون‌های بدون فریم که به عنوان تلویزیون‌های بدون حاشیه یا لبه‌به
            لبه نیز شناخته می‌شوند، تلویزیون‌هایی هستند که حاشیه‌های بسیار نازک
            یا بدون حاشیه در اطراف صفحه‌نمایش دارند و ظاهر یک نمایشگر بدون حاشیه
            را نشان می‌دهند.
          </p>
        </span>
      </div>
    </motion.section>
  );
};

export default ThirdStage;
