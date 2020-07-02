import { useState, useEffect } from "react";
import gitGifs from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    gitGifs(category).then((imges) => {
      setstate({
        data: imges,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
