import axios from 'axios'
const kBaseURL = 'http://127.0.0.1:3000'

const getAllCoffeeShopsAPI = () => {
  return axios.get(`${kBaseURL}/coffee_shops`)
  .then(response => response.data)
  .catch(error => console.log(error))
};

const getAllCitiesAPI = () => {
  return axios.get(`${kBaseURL}/cities`)
  .then(response => response.data)
  .catch(error => console.log(error))
}

const getAllNeighborhoodsAPI = () => {
  return axios.get(`${kBaseURL}/neighborhoods`)
}

export { getAllCoffeeShopsAPI, getAllCitiesAPI }