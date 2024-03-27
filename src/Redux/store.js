import { configureStore } from "@reduxjs/toolkit";
import home from "./slices/Home/home.slice";
import questionnaire from "./slices/questionnaire/questionnaire.slice";

export const store = configureStore({
  reducer: {
    home,
    questionnaire,
  },
});
