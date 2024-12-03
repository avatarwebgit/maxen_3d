import React from "react";

import classes from "./Card.module.css";
const Card = ({ className, children }) => {
  return <div className={`${classes.main} ${className}`}>{children}</div>;
};

export default Card;
