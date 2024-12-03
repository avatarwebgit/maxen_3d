import { createSlice } from "@reduxjs/toolkit";

const initialState = { openDrawer: false }

const DrawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        open(state) {
            state.openDrawer = true;
        },
        close(state) {
            state.openDrawer = false;
        }
    }
})

export default DrawerSlice;