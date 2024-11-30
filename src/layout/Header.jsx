import React from "react";

import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <span className={classes.logo}>
        <h1></h1>
      </span>
      <span className={classes.links}>
        <div className={classes.wrapper}>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </span>
    </header>
  );
};

export default Header;
