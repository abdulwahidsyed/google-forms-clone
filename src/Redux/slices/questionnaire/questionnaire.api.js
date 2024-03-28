import { createAsyncThunk } from "@reduxjs/toolkit";
import { generatePostHeaders } from "../../../api/api.utils";
import { toast } from "react-toastify";

export const fetchData = createAsyncThunk(
  "questionnaire/fetchData",
  async () => {
    try {
      const api = await fetch(`${process.env.REACT_APP_API_URL}/data`);
      if (!api.ok) {
        throw new Error();
      }
      const res = await api.json();
      toast.success("Successfully Fetched Data!");
      return res.data;
    } catch (error) {
      toast.error("Something went wrong!");
      console.log("Error", error);
    }
  }
);

export const postData = createAsyncThunk(
  "questionnaire/postData",
  async (data) => {
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
      toast.success("Successfully Posted Data!");
    } catch (error) {
      toast.error("Something went wrong!");
      console.log("Error", error);
    }
  }
);
