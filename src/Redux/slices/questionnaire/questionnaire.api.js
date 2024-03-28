import { createAsyncThunk } from "@reduxjs/toolkit";
import { generatePostHeaders } from "../../../api/api.utils";

export const fetchData = createAsyncThunk(
  "questionnaire/fetchData",
  async () => {
    try {
      const api = await fetch(`${process.env.REACT_APP_API_URL}/data`);
      if (!api.ok) {
        throw new Error();
      }
      const res = await api.json();
      debugger;
      return res.data;
    } catch (error) {
      debugger;
    }
  }
);

export const postData = createAsyncThunk(
  "questionnaire/postData",
  async (data) => {
    //   const body = JSON.stringify({ data });
    debugger;
    try {
      const requestOptions = generatePostHeaders(data);

      const api = await fetch(
        "https://google-forms-clone-be-k.vercel.app/data",
        requestOptions
      );

      await api.json();
      if (!api.ok) {
        throw new Error();
      }
    } catch (error) {
      debugger;
    }
  }
);
