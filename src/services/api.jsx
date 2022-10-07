import axios from "axios";

const api = axios.create({
  baseURL: 'https://covid-19-statistics.p.rapidapi.com/reports',
  headers: {
    'X-RapidAPI-Key': '544e91f2f5msh1a9039d9cc66f8cp1615e1jsnb8617ad35383',
    'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
  }
});
export default api;

//url flag
export const flagUrl = 'https://countryflagsapi.com/png/'

export const getReport = async ()=>{
  return api.get('');
  }
