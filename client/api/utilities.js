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

const getNeighborhoodsForCity = (cityId) => {
  return axios.get(`${kBaseURL}/cities/${cityId}/neighborhoods`)
  .then(response => response.data)
  .catch(error => console.log(error))
}

const getCoffeeShopsForNeighborhood = (neighborhoodId) => {
  return axios.get(`${kBaseURL}/neighborhoods/${neighborhoodId}/coffee_shops`)
  .then(response => response.data)
  .catch(error => console.log(error))
}

export { getAllCoffeeShopsAPI, getAllCitiesAPI, getNeighborhoodsForCity, getCoffeeShopsForNeighborhood }