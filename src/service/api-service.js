import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const REACT_API_KEY = process.env.PUBLIC_URL;
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": REAct_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const ApiService = {
  async fetch(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  },
};
