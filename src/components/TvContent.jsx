import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";

import { TV } from "../assets/3d_assets/Tv";

import classes from "./TvContent.module.css";
import Star from "./Star";
import ContentWrapper from "./ContentWrapper";
const TvContent = ({ windowSize }) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div className={classes.main}>
      <Canvas className={classes.canvas} camera={{ zoom: 1, fov: 70 }}>
        <Star count={10000} color={"#043874"} />
        <Star count={100} color={"#0c427e"} />
        <Star count={100} color={"yellow"} />
        <Star count={1000} color={"#36619c"} />
        <Star count={1000} color={"#5074bf"} />
        <Star count={1000} color={"#8495d0"} />
        <TV scroll={scroll} scale={0.05} />
      </Canvas>
      <ContentWrapper scrollAmount={scroll} windowSize={windowSize} />
    </motion.div>
  );
};

export default TvContent;
