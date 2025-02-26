import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import CustomButton from './CustomButton';

import mainImage from '../assets/images/Group1671.png';
import mainImage2 from '../assets/images/1212.png';

import classes from './EigthStage.module.css';

const EigthStage = () => {
 const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
 const [isAnimationActive, setIsAnimationActive] = useState(false);
 const imageRef = useRef(null);

 const initial = { opacity: 0, scale: 0 };
 const animate = { opacity: 1, scale: 1 };
 const initialText = { opacity: 0, y: 50 };
 const animateText = { opacity: 1, y: 0 };

 useEffect(() => {
  const delayTimeout = setTimeout(() => {
   setIsAnimationActive(true);
  }, 2000);

  return () => clearTimeout(delayTimeout);
 }, []);

 useEffect(() => {
  if (!isAnimationActive) return;

  const handleMouseMove = event => {
   if (imageRef.current) {
    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;

    setMousePosition({ x: deltaX, y: deltaY });
   }
  };

  window.addEventListener('mousemove', handleMouseMove);

  return () => {
   window.removeEventListener('mousemove', handleMouseMove);
  };
 }, [isAnimationActive]);

 const rotationX = isAnimationActive ? mousePosition.y * 0.03 : 0;
 const rotationY = isAnimationActive ? mousePosition.x * 0.004 : 0;

 return (
  <section className={classes.main}>
   <div className={classes.content}>
    <motion.img
     initial={initial}
     animate={animate}
     transition={{ duration: 0.9, delay: 0.25 }}
     src={mainImage2}
     alt=''
     className={classes.img_top}
    />
    <div style={{ perspective: '5000px' }}>
     <motion.img
      ref={imageRef}
      initial={initial}
      animate={animate}
      transition={{ duration: 1.2, delay: 0.5 }}
      src={mainImage}
      alt=''
      className={classes.img}
      style={{
       transformStyle: 'preserve-3d',
       rotateX: `${-rotationX}deg`,
       rotateY: `${rotationY}deg`,
      }}
     />
    </div>
    <div className={classes.bottom_wrapper}>
     <motion.div
      className={classes.title}
      initial={initialText}
      animate={animateText}
      transition={{ duration: 0.5, delay: 0.5 }}>
      <strong>DYNAMIC TONE</strong>
      <br />
      MAPPING EXPERTIS
     </motion.div>
     <motion.div
      className={classes.main_text}
      initial={initialText}
      animate={animateText}
      transition={{ duration: 0.5, delay: 0.75 }}>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
      طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
     </motion.div>
     <motion.div
      className={classes.range}
      initial={initialText}
      animate={animateText}
      transition={{ duration: 0.5, delay: 1 }}>
      1.07 میلیارد رنگ
     </motion.div>{' '}
     <a href='https://maxen.life/product-categories/1'>
      <CustomButton className={classes.all_tvs}>
       مشخصات تمام تلوزیون ها
      </CustomButton>
     </a>
    </div>
   </div>
  </section>
 );
};

export default EigthStage;
