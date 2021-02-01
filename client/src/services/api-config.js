import axios from 'axios';

const baseUrl = 'http://localhost:3000'
//https://groupdeck.herokuapp.com
const api = axios.create({
  baseURL: baseUrl
})

export default api;