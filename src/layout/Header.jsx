import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button, IconButton } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { drawerAction, localeAction } from "../store/store";
import Drawer from "./Drawer";

import { timeTillContentVisiable } from "../utils/constants";
import { getLocaleFile } from "../services/api";

import classes from "./Header.module.css";
import { Menu } from "@mui/icons-material";
const Header = ({ scrollAmount }) => {
  const [isOffsetValid, setIsOffsetValid] = useState(false);
  const [menu, setMenu] = useState(null);

  const dispatch = useDispatch();
  const lng = useSelector((state) => state.localeStore.lng);

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

  const handleChangeLng = () => {
    if (lng === "fa") {
      dispatch(localeAction.changeToEn());
    } else {
      dispatch(localeAction.changeToFa());
    }
  };

  const fetchLocaleFile = async (lng) => {
    const serverRes = await getLocaleFile(lng);
    if (serverRes?.response.ok) {
      setMenu(serverRes.result);
    }
  };

  useEffect(() => {
    fetchLocaleFile(lng);
  }, [lng]);

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
          {menu &&
            menu.map((elem) => {
              return (
                <a href={elem.url}>
                  <Button
                    className={classes.header_btn}
                    type="button"
                    size="small"
                  >
                    {elem.title}
                    <div className={classes.sublinks_wrapper}>
                      {elem.children &&
                        elem.children.map((child) => {
                          return (
                            
                                <a className={classes.sublink} href={child.url}>
                                  {child.title}
                                </a>
                            
                          );
                        })}
                    </div>
                  </Button>
                </a>
              );
            })}
          <button
            onClick={() => handleChangeLng()}
            className={classes.locale_btn}
          >
            {lng === "fa" ? "FA" : "EN"}
          </button>
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
