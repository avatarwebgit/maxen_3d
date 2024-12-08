import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Html, useProgress } from "@react-three/drei";

import { TV } from "../assets/3d_assets/Tv";
import Star from "./Star";
import ContentWrapper from "./ContentWrapper";

import classes from "./TvContent.module.css";
import Loader from "./Loader";
const TvContent = ({ windowSize }) => {
  const [scroll, setScroll] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { progress, total, loaded } = useProgress();
  useEffect(() => {
    console.log(progress, total, loaded);
    if (progress === 100) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [progress, total, loaded]);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isLoading]);

  return (
    <motion.div className={classes.main}>
      <Canvas className={classes.canvas} camera={{ zoom: 1, fov: 70 }}>
        <Star count={10000} color={"#043874"} />
        <Star count={100} color={"#0c427e"} />
        <Star count={100} color={"yellow"} />
        <Star count={1000} color={"#36619c"} />
        <Star count={1000} color={"#5074bf"} />
        <Star count={1000} color={"#8495d0"} />
        {isLoading ? (
          <Html>
            <Loader />
          </Html>
        ) : (
          <TV scroll={scroll} scale={0.05} />
        )}
      </Canvas>
      <ContentWrapper scrollAmount={scroll} windowSize={windowSize} />
    </motion.div>
  );
};

export default TvContent;
