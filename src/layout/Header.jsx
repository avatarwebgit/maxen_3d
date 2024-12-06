import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button, IconButton } from "@mui/material";

import { useDispatch } from "react-redux";
import { drawerAction } from "../store/store";
import Drawer from "./Drawer";

import { timeTillContentVisiable } from "../utils/constants";

import classes from "./Header.module.css";
import { Menu } from "@mui/icons-material";
const Header = ({ scrollAmount }) => {
  const [isOffsetValid, setIsOffsetValid] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (scrollAmount < 500) {
      setIsOffsetValid(false);
    } else {
      setIsOffsetValid(true);
    }
  }, [scrollAmount]);

  const handleOpenDrawer = () => {
    dispatch(drawerAction.open());
  };

  const initialTitleState = {
    opacity: 0,
  };

  return (
    <header className={classes.header}>
      <span className={classes.links}>
        <motion.div
          className={classes.wrapper}
          initial={initialTitleState}
          animate={{ opacity: isOffsetValid ? 1 : 0 }}
          transition={{
            delay: isOffsetValid ? timeTillContentVisiable : 0,
            duration: isOffsetValid ? 1 : 0,
          }}
        >
          <a href="#">
            <Button className={classes.header_btn} type="button" size="small">
              تلوزیون
            </Button>
          </a>
          <a href="#">
            <Button className={classes.header_btn} type="button" size="small">
              لوازم خانگی
            </Button>
          </a>
          <a href="#">
            <Button className={classes.header_btn} type="button" size="small">
              تهویه مطبوع
            </Button>
          </a>
          <a href="#">
            <Button className={classes.header_btn} type="button" size="small">
              تجهیزات جانبی
            </Button>
          </a>
          <button className={classes.locale_btn}>FA</button>
          <IconButton
            className={classes.hamburger_menu}
            onClick={() => handleOpenDrawer()}
          >
            <Menu sx={{ color: "white" }} className={classes.menu_icon} />
          </IconButton>
        </motion.div>
      </span>
      <Drawer />
    </header>
  );
};

export default Header;
