import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import CustomButton from "./CustomButton";


import edge from '../assets/svg/edge.svg';
import classes from './FifthStage.module.css';

const FifthStage = props => {
  let variants = {
    initial: { y: 0 },
    scrollDown: { y: -100 },
    scrollUp: { y: 0 },
  };

  const [animationState, setAnimationState] = useState('initial');

  useEffect(() => {
    const animateScroll = async () => {
      setAnimationState('initial');
      await new Promise(resolve => setTimeout(resolve, 600));
      setAnimationState('scrollDown');
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAnimationState('scrollUp');
      await new Promise(resolve => setTimeout(resolve, 600));
    };

    animateScroll();
  }, []);

  return (
    <motion.section className={classes.main}>
      <div className={classes.content_wrapper}>
        <span className={classes.svg_wrapper}>
          <img src={edge} alt="Thin edge" />
        </span>
        <div className={classes.text_wrapper}>
          <motion.div
            initial="initial"
            animate={animationState}
            transition={{ duration: 0.5, type: "tween" }}
            variants={variants}
            className={classes.text}
          >
            <p>
              1. تجربه تماشای فراگیرتر: تلویزیون های بدون فریم با به حداقل
              رساندن حواس پرتی و تمرکز بر محتوا، تجربه تماشای فراگیرتری را ارائه
              می دهند. بدون قاب یا قاب ضخیم در اطراف صفحه نمایش، بینندگان می
              توانند تجربه تماشای بدون درز و طبیعی تری را تجربه کنند.
            </p>
            <br />
            <p>
              2. طراحی شیک و مدرن: تلویزیون های فریم لس طراحی شیک و مدرنی دارند
              که می توانند به خوبی با دکوراسیون معاصر هماهنگ شوند. زیبایی
              مینیمالیستی یک تلویزیون بدون قاب همچنین می‌تواند به کاهش شلوغی و
              ایجاد فضای بزرگ‌تر در اتاق کمک کند.
            </p>
            <br />
            <p>
              3. اندازه صفحه نمایش بزرگتر درک شده: با یک تلویزیون بدون قاب، صفحه
              نمایش می تواند بزرگتر از آنچه هست ظاهر شود، زیرا هیچ قاب یا قابی
              برای شکستن تصویر وجود ندارد. این می تواند تجربه تماشا را بیشتر
              سینمایی و غوطه ورتر کند.
            </p>
            <br />
            <p>
              4. بهبود تنظیمات چند صفحه‌نمایش: تلویزیون‌های بدون فریم می‌توانند
              به‌ویژه در تنظیمات چند صفحه‌نمایش مانند دیوارهای ویدئویی یا
              نمایشگرهای علامت دیجیتال مفید باشند. با حذف قاب یا قاب بین
              صفحه‌نمایش، تلویزیون‌های بدون فریم می‌توانند نمایشگری یکپارچه‌تر و
              یکدست‌تر ایجاد کنند.
            </p>
            <br />
            <p>
              5. برای بازی و ورزش بهتر است: تلویزیون‌های بدون فریم همچنین
              می‌توانند برای بازی و تماشای ورزش مفید باشند، جایی که نمایشگر
              بزرگ‌تر و همه‌جانبه‌تر می‌تواند تجربه را افزایش دهد. با یک
              تلویزیون بدون قاب، بدون هیچ گونه حواس پرتی از قاب یا قاب، می
              توانید عمل را فوری تر و جذاب تر احساس کنید.
            </p>
          </motion.div>
        </div>
      </div>
      <a href="https://maxen.life/product-categories/1">
        <CustomButton className={classes.all_tvs}>
          مشخصات تمام تلوزیون ها
        </CustomButton>
      </a>
    </motion.section>
  );
};

export default FifthStage;
