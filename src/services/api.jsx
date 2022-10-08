import axios from "axios";

const api = axios.create({
  baseURL: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
  }
});
export default api;

export const flagUrl = 'https://countryflagsapi.com/png/'

//Fetching data for all the countries
export const getReport = async ()=>{
  return api.get('');
  }
