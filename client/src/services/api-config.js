import axios from 'axios';

const baseUrl = 'https://groupdeck.herokuapp.com'

const api = axios.create({
  baseURL: baseUrl
})

export default api;