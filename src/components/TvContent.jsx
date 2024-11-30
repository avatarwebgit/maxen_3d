import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";

import { TV } from "../assets/3d_assets/Tv";
import logo from "../assets/images/maxen_logo_trasnsparent.png";

import classes from "./TvContent.module.css";
import Star from "./Star";
const TvContent = () => {
  const [scroll, setScroll] = useState(0);
  const [isLogoSmall, setIsLogoSmall] = useState(false);

  const meshRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    scroll < 200 ? setIsLogoSmall(false) : setIsLogoSmall(true);
    console.log(scroll);
  }, [scroll]);

  useEffect(() => {
    console.log(isLogoSmall);
  }, [isLogoSmall]);

  return (
    <div className={classes.main}>
      <Canvas className={classes.canvas} camera={{ zoom: 1, fov: 70 }}>
        <Star count={10000} color={"#043874"} />
        <Star count={100} color={"#0c427e"} />
        <Star count={100} color={"yellow"} />
        <Star count={1000} color={"	#36619c"} />
        <Star count={1000} color={"#5074bf"} />
        <Star count={1000} color={"	#8495d0"} />
        <TV scroll={scroll} ref={meshRef} scale={0.05} />
      </Canvas>
      <div className={classes.html_content}>
        <div
          className={classes.logo_wrapper}
          style={{
            animationName: `${
              isLogoSmall ? "make_small_logo" : "make_large_logo"
            }`,
          }}
        >
          <img className={classes.logo} src={logo} alt="maxen logo" />
        </div>
        <section className={classes.first_stage_content}>
          <span className=""></span>
        </section>
        <section className={classes.second_stage_content}>
          <span className=""></span>
        </section>
        <section className={classes.third_stage_content}>
          <span className=""></span>
        </section>
        <section className={classes.fourth_stage_content}>
          <span className=""></span>
        </section>
        <section className={classes.fifth_stage_content}>
          <span className=""></span>
        </section>
      </div>
    </div>
  );
};

export default TvContent;
