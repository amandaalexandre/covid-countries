import axios from "axios";
import { apiKey } from "./apiKeys";

const api = axios.create({
  baseURL: 'https://covid-19-statistics.p.rapidapi.com/reports',
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
  }
});
export default api;

//url flag
export const flagUrl = 'https://countryflagsapi.com/png/'

export const getReport = async ()=>{
  return api.get('');
  }
