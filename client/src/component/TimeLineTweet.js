import React, { useEffect, useState } from 'react'
import Tweet from './Tweet'
import {useSelector } from "react-redux"
// import { getTimeLineTweet } from '../actions/TweetAction'
// import {useParams} from "react-router-dom"
import axios from 'axios'
const TimeLineTweet = () => {
  // const params = useParams()
  // const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.authReducer.authData) 
  // const {tweets,loading} = useSelector((state)=>state.timeLineReducer)
 
  
  // useEffect(()=>{
  //   dispatch(getTimeLineTweet(user._id))
  // },[])
  // if(!tweets)  return "No Tweets";
  // if(params.id)tweets = tweets.filter((tweet)=>tweet.userId ===params.id)

  const [timeLine,setTimeLine] = useState(null)

  const fetchData = async()=>{
    try {
      const timelineTweets = await axios.get(`http://localhost:8080/api/v1/tweet/${user._id}/timeline`);
      setTimeLine(timelineTweets.data)
    } catch (error) {
      console.log(error
        )
    }
  }

  useEffect(()=>{
   fetchData()
  },[user._id])
 
  return (
  
    <div className='container mt-2'>
    {timeLine &&
     timeLine.map((tweet,id)=>{
     
      return (
        <div  className='mb-2' key={id} >
        <Tweet  data={tweet}  setData= {setTimeLine} />
      </div>
      )
    })}
                 
    </div>

  )
}

export default TimeLineTweet