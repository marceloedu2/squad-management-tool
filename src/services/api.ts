import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})
api.defaults.headers = {
  'x-rapidapi-host': process.env.NEXT_PUBLIC_API_HOST,
  'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY
}

export default api
