import { toast } from "react-hot-toast"
import * as AuthApi from "../api/AuthRequest"

//  login action
export const login = (formData) => async(dispatch) => {
    dispatch({type : "AUTH_START"})
    try {
        const {data}= await AuthApi.login(formData)
        dispatch({type : "AUTH_SUCCESS" , data:data}) 
        toast.success("successfull tweet")
    } catch (error) {
       console.log(error) 
       dispatch({type : "AUTH_FAIL"}) 
       toast.error("something went wrong")
    }
}

//signup action
export const register = (formData) => async(dispatch) => {
    dispatch({type : "AUTH_START"})
    try {
        const {data}= await AuthApi.register(formData) 
        dispatch({type : "AUTH_SUCCESS", data:data})
        
    } catch (error) {
       console.log(error) 
       dispatch({type : "AUTH_FAIL"}) 
    }
}

//logout action 
export const logout = ()=> async(dispatch)=>{
    dispatch({type:"LOG_OUT"})
}
