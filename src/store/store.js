import { configureStore } from "@reduxjs/toolkit";

import DrawerSlice from "./drawerSlice";

const store = configureStore({ reducer: { drawer: DrawerSlice.reducer } });

export const drawerAction = DrawerSlice.actions;

export default store;
