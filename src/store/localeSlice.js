import { createSlice } from "@reduxjs/toolkit";

const initialState = { lng: JSON.parse(localStorage.getItem("lng")) || "en" };

const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    changeToFa(state) {
      state.lng = "fa";
      localStorage.setItem("lng", JSON.stringify("fa"));
    },
    changeToEn(state) {
      state.lng = "en";
      localStorage.setItem("lng", JSON.stringify("en"));
    },
  },
});

export default localeSlice;
