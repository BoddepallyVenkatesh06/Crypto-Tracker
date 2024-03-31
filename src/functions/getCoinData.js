import axios from "axios";
import { API_URL } from "../constants";

export const getCoinData = (id) => {
  const coinData = axios
    .get(`${API_URL}/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("ERROR>>>", error);
    });

  if (coinData) return coinData;
  else return;
};
