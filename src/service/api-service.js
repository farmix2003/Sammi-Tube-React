import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const REACT_API_KEY = process.env.REACT_APP_API_KEY;
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "753509cc76mshc1eb82eaadf9ca1p115b84jsnfe7e733e7e61",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const ApiService = {
  async fetch(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  },
};
