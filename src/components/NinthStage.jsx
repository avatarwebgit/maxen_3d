import React from 'react';

import mainImage from '../assets/images/1213.png';
import CustomButton from './CustomButton';

import classes from './NinthStage.module.css';
const NinthStage = () => {
 return (
  <section className={classes.main}>
   <div className={classes.content}>
    <img src={mainImage} alt='' className={classes.img} />
    <h2 className={classes.title}>همه سایز ها</h2>
   </div>
   <a href='https://maxen.life/product-categories/1'>
    <CustomButton className={classes.all_tvs}>
     مشخصات تمام تلوزیون ها
    </CustomButton>
   </a>
   <a href='https://maxen.life/product-categories/1'>
    <CustomButton className={classes.more}>
        بیشتر
    </CustomButton>
   </a>
  </section>
 );
};

export default NinthStage;
