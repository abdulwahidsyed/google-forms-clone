import { createSlice } from "@reduxjs/toolkit";
import { sectionMock } from "./questionnaire.helper";

const initialState = {
  sections: [{ ...sectionMock }],
  data: [],
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    updateQuestions: (state, action) => {
      state.sections = action.payload;
    },
  },
});

export const { updateQuestions } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
