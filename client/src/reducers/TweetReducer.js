const tweetReducer= (
    state = { tweets:[] , loading:false , error:false , uploading:false},action
)=>{
    switch(action.type){
        //tweetshare.js
        case "UPLOAD_START":
            return {...state, uploading:true , error:false}
        case "UPLOAD_SUCCESS":
            return { ...state, tweets:[action.data , ...state.tweets], uploading:false ,error:false}
            
        case "UPLOAD_FAIL":
        return {...state , uploading:false , error:true}

       // timelinetweet
        case "RETREIVING_START":
            return {...state, loading :true , error:false}
        case "RETREIVING_SUCCESS":
            return { ...state, tweets:action.data , loading:false ,error:false}
        case "RETREIVING_FAIL":
        return {...state , loading:false , error:true}
            default : 
            return state
    }
}
export default tweetReducer