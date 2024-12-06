import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from '@mui/material';

import logo from '../assets/images/maxen_logo_trasnsparent.png';
import gear from '../assets/svg/gear.svg';
import contact from '../assets/svg/contact.svg';

import { calculateRotation } from '../utils/calculateRotation';
import { timeTillContentVisiable } from '../utils/constants';

import FirstStage from './FirstStage';
import SecondStage from './SecondStage';
import ThirdStage from './ThirdStage';

import ColumnText from './ColumnText';

import classes from './ContentWrapper.module.css';
import FourthStage from './FourthStage';
import FifthStage from './FifthStage';
import SixthStage from './SixthStage';
import SeventhStage from './SeventhStage';
const ContentWrapper = ({ scrollAmount, windowSize }) => {
  const [isLogoSmall, setIsLogoSmall] = useState(false);
  const [visiableStage, setVisiableStage] = useState({
    firstStage: false,
    secondStage: false,
    thirdStage: false,
    fourthStage: false,
    fifthStage: false,
    sixthStage: false,
    seventhStage: false,
  });

  const updateVisibleStage = stage => {
    setVisiableStage({
      firstStage: stage === 1 || stage === 0 || stage === 1.5,
      secondStage: stage === 2,
      thirdStage: stage === 3,
      fourthStage: stage === 4,
      fifthStage: stage === 5,
      sixthStage: stage === 6,
      seventhStage: stage === 7,
    });
  };

  const { stage } = calculateRotation(scrollAmount);

  useEffect(() => {
    if (scrollAmount < 500) {
      setIsLogoSmall(false);
    } else {
      setIsLogoSmall(true);
    }
  }, [scrollAmount]);

  const initialFloatBtnState = {
    right: '8%',
    top: '40%',
  };

  const initialStageState = {
    opacity: 0,
  };

  const returnAnimationProps = () => {
    if (windowSize === 'l' || windowSize === 'xl') {
      return {
        left: `${isLogoSmall ? '5%' : '7.5%'}`,
        top: `${isLogoSmall ? '50%' : '40%'}`,
      };
    } else {
      return {
        left: `${isLogoSmall ? '5%' : '7.5%'}`,
        top: `${isLogoSmall ? '35%' : '45%'}`,
      };
    }
  };

  useEffect(() => {
    updateVisibleStage(stage);
  }, [stage]);

  const initialState = {
    right: '-10%',
  };

  return (
    <div className={classes.main}>
      <div
        className={`${classes.logo_wrapper} ${
          isLogoSmall ? classes.logo_height_small : classes.logo_height_big
        }`}
      >
        <img className={classes.logo} src={logo} alt='maxen logo' />
        <motion.p
          className={classes.title_text}
          initial={initialStageState}
          animate={{ opacity: isLogoSmall ? 1 : 0 }}
          transition={{
            delay: !isLogoSmall ? 0 : timeTillContentVisiable,
            duration: isLogoSmall ? 1 : 0,
          }}
        >
          Lifestyle Solution
        </motion.p>
      </div>

      {stage &&
        windowSize === 'xl' &&
        windowSize === 'l' &&
        windowSize === 'm' >= 1 && (
          <>
            <motion.div
              className={`${classes.float_btn_wrapper}`}
              initial={initialFloatBtnState}
              animate={returnAnimationProps}
              transition={{ duration: 0.25, type: 'tween' }}
            >
              <Tooltip title={'خدمات پس از فروش'} placement='top' arrow>
                <button className={`${classes.float_button} ${classes.gear}`}>
                  <img src={gear} alt='' className={classes.float_btn_img} />
                </button>
              </Tooltip>
              <Tooltip title={'021-58736'} placement='top' arrow>
                <button
                  className={`${classes.float_button} ${classes.contact}`}
                >
                  <img src={contact} alt='' className={classes.float_btn_img} />
                </button>
              </Tooltip>
            </motion.div>
            <ColumnText
              className={classes.column_text}
              lng={'en'}
              initial={initialState}
              animate={{ right: '1%' }}
              transition={{ duration: 0.25, type: 'tween' }}
            />
          </>
        )}

      {visiableStage.firstStage && (
        <motion.div
          initial={initialStageState}
          animate={{ opacity: visiableStage.firstStage ? 1 : 0 }}
          transition={{ duration: 2 }}
          className={classes.stage_wrapper}
        >
          <FirstStage />
        </motion.div>
      )}

      {visiableStage.secondStage && (
        <motion.div
          initial={initialStageState}
          animate={{ opacity: visiableStage.secondStage ? 1 : 0 }}
          transition={{ duration: 2 }}
          className={classes.stage_wrapper}
        >
          <SecondStage />
        </motion.div>
      )}

      {visiableStage.thirdStage && (
        <motion.div
          initial={initialStageState}
          animate={{ opacity: visiableStage.thirdStage ? 1 : 0 }}
          transition={{ duration: 2 }}
          className={classes.stage_wrapper}
        >
          <ThirdStage />
        </motion.div>
      )}

      {visiableStage.fourthStage && (
        <motion.div
          initial={initialStageState}
          animate={{ opacity: visiableStage.fourthStage ? 1 : 0 }}
          transition={{ duration: 2 }}
          className={classes.stage_wrapper}
        >
          <FourthStage />
        </motion.div>
      )}

      {visiableStage.fifthStage && (
        <motion.div
          initial={initialStageState}
          animate={{ opacity: visiableStage.fifthStage ? 1 : 0 }}
          transition={{ duration: 2 }}
          className={classes.stage_wrapper}
        >
          <FifthStage windowSize={windowSize} />
        </motion.div>
      )}

      {visiableStage.sixthStage && (
        <motion.div
          initial={initialStageState}
          animate={{ opacity: visiableStage.sixthStage ? 1 : 0 }}
          transition={{ duration: 2 }}
          className={classes.stage_wrapper}
        >
          <SixthStage scrollAmount={scrollAmount} windowSize={windowSize} />
        </motion.div>
      )}

      {visiableStage.seventhStage && (
        <motion.div
          initial={initialStageState}
          animate={{ opacity: visiableStage.seventhStage ? 1 : 0 }}
          transition={{ duration: 2 }}
          className={classes.stage_wrapper}
        >
          <SeventhStage scrollAmount={scrollAmount} />
        </motion.div>
      )}
    </div>
  );
};

export default ContentWrapper;
