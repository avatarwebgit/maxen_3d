import React from "react";
import { motion } from "framer-motion";

import earth from "../assets/svg/earth.svg";
import nonsense from "../assets/svg/nonsense.svg";

import classes from "./FirstStage.module.css";
import Card from "./Card";
import CustomButton from "./CustomButton";
const FirstStage = React.forwardRef((props, ref) => {
  return (
    <motion.section className={classes.main} {...props} >
      <div className={classes.dived_bot}>
        <div className={classes.earth}>
          <img src={earth} alt="" />
        </div>
        <div className={classes.text_wrapper}>
          <Card>
            <p className={classes.text}>
              Lg’s Open Cell Is A Technology Used In Some Of Its TV Models That
              Allow For Greater Flexibility And Customization In TV Design.
              Essentially, Open Cell Refers To A Type Of TV Panel That Is «Open»
              Or Unsealed, Allowing TV Manufacturers To Customize The Panel And
              Add Their Own Components.
            </p>
          </Card>
        </div>
        <div className={classes.shape}>
          <img src={nonsense} alt="" />
        </div>
        <div className={classes.enjoy}>
          <a href="#">
            <CustomButton className={classes.all_tvs}>مشخصات تمام تلوزیون ها</CustomButton>
          </a>
          <p className={classes.e_text}>
            لذت ببرید <br />
            از تماشا کردن
            <br /> جزییات
          </p>
        </div>
      </div>
    </motion.section>
  );
});

export default FirstStage;
