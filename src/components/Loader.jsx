import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import classes from "./Loader.module.css";
const Loader = () => {
  const [locale, setLocale] = useState("");
//   const lng = useSelector((state) => state.localeStore.lng);

//   useEffect(() => {
//     if (lng) {
//       setLocale(lng);
//     }
//   }, [lng]);

  return (
    <div className={classes.loader_wrapper}>
      <div className={classes.loader} />
      <p className={classes.loader_text}>
        {locale === "fa" ? "...در حال بارگیری محتوا" : "Loading some content..."}
      </p>
    </div>
  );
};

export default Loader;
