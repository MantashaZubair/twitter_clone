import axios from "axios"

const API = axios.create({baseURL : "http://localhost:8080"})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const updateUser= (id,formData)=>API.put(`/api/v1/user/update-profile/${id}`,formData)