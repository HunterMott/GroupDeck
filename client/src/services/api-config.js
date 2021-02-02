import axios from 'axios';

// const baseUrl = 'http://localhost:3000'
const baseUrl = process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : 'https://groupdeck.herokuapp.com'

const api = axios.create({
  baseURL: baseUrl
})

export default api;