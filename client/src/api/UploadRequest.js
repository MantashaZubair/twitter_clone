import axios from "axios"

const API = axios.create({baseURL : "http://localhost:8080"})


API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const uploadImage= (data)=>API.post('/api/v1/upload/', data)

export const uploadTweet = (data)=> API.post('/api/v1/tweet/create-tweet', data)