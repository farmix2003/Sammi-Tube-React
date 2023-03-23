import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const REACT_APP_API = process.env.REACT_APP_PUBLIC_API;
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": REACT_APP_API,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const ApiService = {
  async fetch(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  },
};
