import React, { useState, useEffect } from "react";
import {motion } from 'framer-motion'

import { calculateRotation } from "../utils/calculateRotation";

import CustomButton from "../components/CustomButton";

import lgLogo from "../assets/images/Group 200.png";
import qoled from "../assets/images/QLED.png";
import mainImg_1 from "../assets/images/OLDE.webp";
import mainImg_2 from "../assets/images/qled tv -0.webp";
import qoledSvg from "../assets/svg/qoled.svg";

import classes from "./FourthStage.module.css";
import Card from "./Card";
const FourthStage = ({ windowSize, scrollAmount }) => {
  const [isFirstVisible, setIsFirstVisible] = useState(true);
  const [scroll, setScroll] = useState(0);

  const { stage } = calculateRotation(scroll);

  useEffect(() => {
    if (stage >= 4.5) {
      setIsFirstVisible(false);
    }
    if (stage < 4.5 && stage >= 4) {
      setIsFirstVisible(true);
    }
  }, [stage, scroll]);

  useEffect(() => {
    setScroll(scrollAmount);
  }, [scrollAmount]);

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
    <section className={classes.main}>
      <div className={classes.content}>
        {isFirstVisible ? (
          <div className={classes.step_one}>
            <div className={classes.content_wrapper}>
              <span className={classes.right_side}>
                <img className={classes.main_img} src={mainImg_1} alt="TV layers" />
                <img className={classes.main_logo} src={lgLogo} alt="LG" />
              </span>
              <span className={classes.left_side}>
                <span className={classes.qoled_logo_wrapper}>
                  <img className={classes.qoled_logo} src={qoled} alt="QOLED" />
                </span>
                <p className={classes.title}>
                  QUANTUM <br />
                  DOT
                </p>
                <CustomButton>بیشتر</CustomButton>
                <Card className={classes.text}>
                  Lg’s Open Cell Is A Technology Used In Some Of Its TV Models
                  That Allow For Greater Flexibility And Customization In TV
                  Design. Essentially, Open Cell Refers To A Type Of TV Panel
                  That Is «Open» Or Unsealed, Allowing TV Manufacturers To
                  Customize The Panel And Add Their Own Components
                </Card>
              </span>
            </div>
          </div>
        ) : (
          <div className={classes.step_two}>
            <div className={classes.content_wrapper}>
              <div className={classes.right_side_2}>
                <div className={classes.qoledSvg_wrapper}>
                  <img
                    className={classes.qoled_svg_logo}
                    src={qoledSvg}
                    alt=""
                  />
                </div>
                <p>
                  دﻗﺖرﻧگ <br />
                  ﻫﺎی ﺗﻠﻮﯾﺰﯾﻮن QLED کﻨﻨﺪ. ﻣی اﺳﺘﻔﺎده دﻗﯿﻖ ﺑﺴﯿﺎر ﻫﺎی ﺗﻮﻟﯿﺪرﻧگ
                  ﺑﺮای کﻮاﻧﺘﻮﻣی ﻧﻘﺎط از ﻫﺎی ﺗﻠﻮﯾﺰﯾﻮن از ﺗﺮ وزﻧﺪه ﺗﺮ ﻧﻤﺎﯾﺶزﻧﺪه
                  ﺻﻔﺤﻪ ﺗﺼﺎوﯾﺮروی کﻪ اﺳﺖ ﻣﻌﻨی ﺑﺪان اﯾﻦ LCD پﺲزﻣﯿﻨﻪ ﻧﻮر ﺑﺎ
                  ﻣیرﺳﻨﺪLed ﻧﻈﺮ ﺑﻪ .ﻣﻌﻤﻮﻟی
                </p>
                <p>
                  روشنایی
                  <br />
                  میتوانندتصاویربسیارروشنیتولیدکنندکهبهویژهبرایتماشایQLEDتلویزیونهای
                  (محدودهدینامیکیبا)مفیداست.اینبدانمعناستکهشمامیتوانیدHDRمحتوای
                  .جزئیاتبیشتریرادرمناطقروشنصفحه،حتیدریکاتاقبانورروشنببینید
                </p>
                <p>
                  ماندگاری
                  <br />
                  ازنقاطکوانتومیمعدنیاستفادهمیکنند،نسبتبهQLEDازآنجاییکهتلویزیونهای
                  زمانیاتفاقمیافتدکهIn-Burn.کمترمستعدسوختنهستندOLEDتلویزیونهای
                  تصاویرثابت،مانندلوگوهایانوارهایمنو،برایمدتزمانطونیرویصفحهنمایش
                  .«دادهمیشوندوباعثمیشوندکهآنهادرصفحهنمایش«سوختهشوند
                </p>
                <p>
                  بهرهوریانرژی
                  <br />
                  عموماًنسبتبهتلویزیونهایپسماازنظرانرژیکارآمدترهستندوQLEDتلویزیونهای
                  ازنظرانرژیکارآمدترباشند،بهخصوصاگرLCDمیتوانندنسبتبهبرخیتلویزیونهای
                  ازفناوریکاهشنورمحلیاستفادهکنند.اینمیتوانددرطولزماندرهزینهقبضبرق
                  .شمافهجوییکند
                </p>
                <p>
                  مقرونبهفهتر
                  <br />
                  ارزانترهستند،وبرایکسانیکهOLEDنسبتبهتلویزیونهایQLEDتلویزیونهای
                  میخواهندتلویزیونیباکیفیتبابارنگهایدقیقوسطحروشناییباداشتهباشند،
                  .گزینهایمقرونبهفهترهستند
                </p>
                </div>
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
              <span className={classes.left_side_2}>
                <img src={mainImg_2} alt="" />
              </span>
            </div>
          </div>
        )}
      </div>
      <a href="https://maxen.life/product-categories/1">
        <CustomButton className={classes.all_tvs}>
          مشخصات تمام تلوزیون ها
        </CustomButton>
      </a>
    </section>
  );
};

export default FourthStage;
