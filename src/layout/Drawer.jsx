import React, { useEffect, useState } from "react";
import { useSelect } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";

import { drawerAction } from "../store/store";

import classes from "./Drawer.module.css";
const Drawer = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false)

  const dispatch = useDispatch();

  const drawerState = useSelector((state) => state.drawerStore.openDrawer);

  const handleCloseDrawer = () => {
    dispatch(drawerAction.close());
  };

  useEffect(() => {
    if (drawerState) {
      setIsDrawerOpen(true);
      setIsContentOpen(true)
    } else {
      setIsContentOpen(false)
      setTimeout(() => {
        setIsDrawerOpen(false);
      }, 250);
    }
  }, [drawerState]);

  return (
    <section
      className={classes.main}
      style={{
        width: `${isDrawerOpen ? "100%" : "0%"}`,
      }}
    >
      <section
        className={classes.content}
        style={{
          width: `${isContentOpen ? "40%" : "0%"}`,
        }}
      >
        {children}
      </section>
      <div
        className={classes.backdrop}
        onClick={() => handleCloseDrawer()}
        style={{ width: `${isDrawerOpen ? "100%" : 0}` }}
      />
    </section>
  );
};

export default Drawer;
