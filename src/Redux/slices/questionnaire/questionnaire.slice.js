import { createSlice } from "@reduxjs/toolkit";
import { sectionMock } from "./questionnaire.helper";
import { fetchData, postData } from "./questionnaire.api";

const initialState = {
  sections: [{ ...sectionMock }],
  data: [],

  // api related variables
  loading: false,
  apiData: null,
  isError: false,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    updateQuestions: (state, action) => {
      state.sections = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.isError = null;
        state.sections = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
        state.isError = true;
      });

    builder
      .addCase(postData.pending, (state) => {
        state.loading = true;
      })
      .addCase(postData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(postData.rejected, (state) => {
        state.loading = false;
        state.isError = true;
      });
  },
});

export const { updateQuestions } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
