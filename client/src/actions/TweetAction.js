import * as TweetApi from "../api/TweetRequest"

export const getTimeLineTweet = (id) => async(dispatch)=>{
    dispatch({type:"RETREIVING_START"})
    try {
     const {data}= await TweetApi.getTimeLineTweet(id);
     dispatch({type:"RETREIVING_SUCCESS" , data : data})
    
    } catch (error) {
        dispatch({type:"RETREIVING_FAIL"})
        console.log(error)
    }
}