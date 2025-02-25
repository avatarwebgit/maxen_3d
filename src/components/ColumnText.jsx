import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import { calculateRotation } from '../utils/calculateRotation';

import sharedStyles from '../style/shared.css';
import classes from './ColumnText.module.css';
const ColumnText = (props, { className }) => {
 const [rtl, setRtl] = useState(false);
 const [scroll, setScroll] = useState(0);
 const [stageStep, setStageStep] = useState(0);

 const { stage } = calculateRotation(scroll);

 const stages = [9, 100, 1500, 2250, 3000, 4000, 5000, 6000, 7500, 9000, 10500];

 const lng = useSelector(state => state.localeStore.lng);

 useEffect(() => {
  handleScrollToStage(stages[stage]);
 }, []);

 const handleKeyDown = event => {
    let newStageStep = stageStep;

    switch (event.key) {
        case 'ArrowUp':
            newStageStep = Math.max(stageStep - 1, 0);
            break;
        case 'ArrowDown':
            newStageStep = Math.min(stageStep + 1, stages.length - 1);
            break;
        default:
            return;
    }

    setStageStep(newStageStep);

  setStageStep(newStageStep);
  handleScrollToStage(stages.at(newStageStep));
 };

 const handleScroll = () => {
  setScroll(window.scrollY);
 };

 useEffect(() => {
  window.addEventListener('keydown', handleKeyDown);

  return () => {
   window.removeEventListener('keydown', handleKeyDown);
  };
 }, [stageStep]);

 useEffect(() => {
  handleScrollToStage(stages.at(stageStep));
 }, [stageStep]);

 useEffect(() => {
  if (lng === 'fa') {
   setRtl(true);
  } else {
   setRtl(false);
  }
 }, [lng, stage]);

 useEffect(() => {
  window.addEventListener('scroll', handleScroll);

  return () => {
   window.removeEventListener('scroll', handleScroll);
  };
 }, []);

 const handleScrollToStage = y => {
  window.scrollTo(0, y);
 };

 return (
  <motion.div
   className={`${classes.main} ${className} ${
    rtl ? sharedStyles.rtl : sharedStyles.ltr
   }`}
   {...props}>
   <div className={classes.divider} />
   <button
    className={`${classes.text} ${stage === 0 ? classes.active : ''}`}
    onClick={() => handleScrollToStage(stages.at(0))}>
    {lng === 'fa' ? 'طرح' : 'Design'}{' '}
   </button>
   <div className={classes.divider} />
   <button
    className={`${classes.text} ${stage === 1 ? classes.active : ''}`}
    onClick={() => handleScrollToStage(stages.at(1))}>
    {lng === 'fa' ? (
     <>
      فن آوری
      <br />
      تصویر
     </>
    ) : (
     <>
      Image
      <br />
      Technology
     </>
    )}
   </button>
   <div className={classes.divider} />
   <button
    className={`${classes.text} ${stage === 2 ? classes.active : ''}`}
    onClick={() => handleScrollToStage(stages.at(2))}>
    {lng === 'fa' ? (
     <>
      فن آوری
      <br />
      صدا
     </>
    ) : (
     <>
      Sound
      <br />
      Technology
     </>
    )}
   </button>
   <div className={classes.divider} />
   <button
    className={`${classes.text} ${stage === 3 ? classes.active : ''}`}
    onClick={() => handleScrollToStage(stages.at(3))}>
    {lng === 'fa' ? <>پردازنده</> : <>Processor</>}
   </button>
   <div className={classes.divider} />
   <button
    className={`${classes.text} ${stage === 4 ? classes.active : ''}`}
    onClick={() => handleScrollToStage(stages.at(4))}>
    {lng === 'fa' ? <> امکانات</> : <>Facilities</>}
   </button>
   <div className={classes.divider} />
   <button
    className={`${classes.text} ${stage === 4.5 ? classes.active : ''}`}
    onClick={() => handleScrollToStage(stages.at(5))}>
    {lng === 'fa' ? <> امکانات</> : <>IMPORT TEXT</>}
   </button>
   <div className={classes.divider} />
   <button
    className={`${classes.text} ${stage === 5 ? classes.active : ''}`}
    onClick={() => handleScrollToStage(stages.at(6))}>
    {lng === 'fa' ? <> ممکن ها</> : <>Possibilities</>}
   </button>
   <div className={classes.divider} />
   <button
    className={`${classes.text} ${stage === 6 ? classes.active : ''}`}
    onClick={() => handleScrollToStage(stages.at(7))}>
    {lng === 'fa' ? (
     <>
      اشتراک
      <br />
      صفحه نمایش
     </>
    ) : (
     <>
      Screen
      <br />
      Share
     </>
    )}
   </button>
   <div className={classes.divider} />
   <button
    className={`${classes.text} ${stage === 7 ? classes.active : ''}`}
    onClick={() => handleScrollToStage(stages.at(8))}>
    {lng === 'fa' ? (
     <>پایه تلوزیون</>
    ) : (
     <>
      TV
      <br />
      Stand
     </>
    )}
   </button>
   <div className={classes.divider}></div>
   <button
    className={`${classes.text} ${stage === 8 ? classes.active : ''}`}
    onClick={() => handleScrollToStage(stages.at(9))}>
    {lng === 'fa' ? (
     <>
      اشتراک
      <br />
      صفحه نمایش
     </>
    ) : (
     <>
      Screen
      <br />
      Share
     </>
    )}
   </button>
   <div className={classes.divider} />
   <button
    className={`${classes.text} ${stage === 9 ? classes.active : ''}`}
    onClick={() => handleScrollToStage(stages.at(10))}>
    {lng === 'fa' ? (
     <>
      اشتراک
      <br />
      صفحه نمایش
     </>
    ) : (
     <>
      Screen
      <br />
      Share
     </>
    )}
   </button>
  </motion.div>
 );
};

export default ColumnText;
