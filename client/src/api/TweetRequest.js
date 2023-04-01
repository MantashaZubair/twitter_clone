import axios from "axios"

const API = axios.create({baseURL : "http://localhost:8080"})


export const getTimeLineTweet = (id) => API.get(`/api/v1/tweet/${id}/timeline`)
// export const likeTweet = (id,userId) =>API.put(`/api/v1/tweet/${id}/like` , {userId:userId})