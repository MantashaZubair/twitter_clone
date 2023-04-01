 import * as UploadApi from '../api/UploadRequest'
 import toast from 'react-hot-toast';
export const uploadImage = (data)=>async(dispatch) =>{
    try {
      await UploadApi.uploadImage(data)  
    } catch (error) {
       console.log(error) 
    }
}

export const uploadTweet = (data)=>async(dispatch)=>{
    dispatch({type:"UPLOAD_START"})
    try {
       const newTweet = await UploadApi.uploadTweet(data)
       dispatch({type:"UPLOAD_SUCCESS", data: newTweet.data})
        toast.success("successfull tweet")
        window.location.reload()
    } catch (error) {
        console.log(error)
        dispatch({type:"UPLOAD_FAIL"})
        toast.error("please write Description")
    }
}