const timeLineReducer= (
    state = { tweets:null , loading:false , error:false},action
)=>{
    switch(action.type){
      
        //timelinetweet
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
export default timeLineReducer