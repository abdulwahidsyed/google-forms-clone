import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../Redux/slices/questionnaire/questionnaire.api";

export const useFetchInitialData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchDataLocal();
  }, []);

  const fetchDataLocal = async () => {
    dispatch(fetchData());
  };
  return [];
};
