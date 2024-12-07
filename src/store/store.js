import { configureStore } from "@reduxjs/toolkit";

import DrawerSlice from "./drawerSlice";
import localeSlice from "./localeSlice";

const store = configureStore({
  reducer: { drawerStore: DrawerSlice.reducer, localeStore: localeSlice.reducer },
});

export const drawerAction = DrawerSlice.actions;
export const localeAction = localeSlice.actions;

export default store;
