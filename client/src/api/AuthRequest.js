import axios from "axios"

const API = axios.create({baseURL : "http://localhost:8080"})

export const login = (formData) => API.post('/api/v1/auth/login',formData)
export const register = (formData) => API.post('/api/v1/auth/register',formData)
