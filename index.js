const axios = require('axios');


const FIXER_API_KEY = 'sBn5cMR2StfNoSNP93Rmk6dvcWhAZwUl';
const FIXER_API = `http://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`;

// https://restcountries.eu
const REST_COUNTRIES_API = `https://restcountries.com/v3.1/currency/{currency}`;

// Fetch data about Currencies
const getExchangeRate = async (fromCurrency, toCurrency) => {
   const { data: { rates } } = await axios.get(FIXER_API);
   const euro = 1 / rates[fromCurrency];
   const exchangeRate = euro * rates[toCurrency];
   return exchangeRate; //?

}

getExchangeRate('USD', 'AUS'); //?


// Fetch data about countries
const getCountries = async (currencyCode) => {
   const response = await axios.get(`${REST_COUNTRIES_API}/${currencyCode}`);

}

getCountries('AUS')

// Output Data