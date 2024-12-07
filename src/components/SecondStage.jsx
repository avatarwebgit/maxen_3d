import React from "react";
import { motion } from "framer-motion";

import CustomButton from "../components/CustomButton";

import classes from "./SecondStage.module.css";
const SecondStage = (props) => {
  return (
    <motion.section className={classes.main} {...props}>
      <div className={classes.content_wrapper}>
        <p className={classes.text}>
          ﻃﺮاحی ﻣﯿﻨﯿﻤﺎل و <br />
          ﻫﻮﺷﻤﻨﺪ ﺑﺮای <br />
          زﻧﺪگی ﻣﺪرن
        </p>
        <CustomButton className={classes.more_btn} href={"#"}>
          بیشتر
        </CustomButton>
      </div>
      <div className={classes.c_text_werapper}></div>
      <a href="https://maxen.life/product-categories/1">
        <CustomButton className={classes.all_tvs}>
          مشخصات تمام تلوزیون ها
        </CustomButton>
      </a>
    </motion.section>
  );
};

export default SecondStage;
