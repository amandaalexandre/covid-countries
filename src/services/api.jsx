import axios from "axios";

const api = axios.create({
  baseURL: 'https://covid-19-statistics.p.rapidapi.com/reports',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
  }
});
export default api;

//url flag
export const flagUrl = 'https://countryflagsapi.com/png/'

export const getReport = async ()=>{
  return api.get('');
  }
