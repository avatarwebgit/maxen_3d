import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { calculateRotation } from '../utils/calculateRotation';

import CustomButton from './CustomButton';
import multiple from '../assets/svg/multiple.svg';

import ports from '../assets/svg/ports.svg';
import wifi from '../assets/svg/wifi.svg';

import classes from './SeventhStage.module.css';
const SeventhStage = props => {
  const { stage } = calculateRotation(props.scrollAmount);
  const [isInViewport, setIsInViewport] = useState(false);

  const initialTextState = {
    y: -100,
  };

  const initialImageState = {
    opacity: 0,
    scale: 0.5,
  };

  useEffect(() => {
    if (stage === 7) {
      setIsInViewport(true);
    } else {
      setIsInViewport(false);
    }
  }, [stage]);
  return (
    <motion.section className={classes.main}>
      <motion.div
        className={classes.content}
        initial={initialTextState}
        animate={{ y: isInViewport ? 0 : -100 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={classes.cap_wrapper}
          initial={initialImageState}
          animate={{
            opacity: isInViewport ? 1 : 0,
            scale: isInViewport ? 1 : 0.5,
          }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <img className={classes.cap_image} src={multiple} alt="" />
        </motion.div>
        <div className={classes.right_side}>
          <div className={classes.ports_wrapper}>
            <img className={classes.ports_image} src={ports} alt="ports" />
          </div>
          <div className={classes.text_wrapper}>
            <span className={classes.wifi_wrapper}>
              <img className={classes.wifi_icon} src={wifi} alt='' />
            </span>
            <p className={classes.first_title}>
              تلویزیون جدید شما نیاز به تناسب کامل دارد در خانه ی شما
            </p>
            <p className={classes.second_title}>
              هیجان انگیز تر
              <br /> در یک جو واقعی تر
            </p>
            <CustomButton className={classes.more_btn}>بیشتر</CustomButton>
          </div>
        </div>
      </motion.div>
      <a href="https://maxen.life/product-categories/1">
        <CustomButton className={classes.all_tvs}>
          مشخصات تمام تلوزیون ها
        </CustomButton>
      </a>
    </motion.section>
  );
};

export default SeventhStage;
