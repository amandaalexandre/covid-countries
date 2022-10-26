import axios from "axios";

//Creating axios instance
export const api = axios.create({
  baseURL: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
  }
});

//Fetching consolidated data for the world
export const getWorldData = {
  method: 'GET',
  url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
  }
};


//Fetching data for each continent
export function getDataByContinent (region) {
  const regionRequested = region.toLowerCase()

  return (
    {
    method: 'GET',
  url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/${regionRequested}`,
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
      }
    }
  )  
};

//Fetching data by country
/* export function getDataByCountry (countryName) {
  //capitalize first letter
  //get three-letter code

  return (
    {
    method: 'GET',
  url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/${countryName}/${countryCode}`,
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
      }
    }
  )  
}; */

export const flagUrl = 'https://countryflagsapi.com/png/'

