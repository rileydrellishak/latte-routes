import axios from 'axios'
const kBaseURL = 'http://127.0.0.1:3000'

const getAllRoutesAPI = () => {
  return axios.get(`${kBaseURL}/routes`)
  .then(response => response.data)
  .catch(error => console.log(error))
};

export { getAllRoutesAPI }