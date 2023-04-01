import React from 'react'
import {MdOutlineStarRate} from "react-icons/md"
import TimeLineTweet from './TimeLineTweet'
import TweetShare from './TweetShare'
import "./MainTweet.css"
const MainTweet = () => {
  return (
    <div className='card card-tweet'>
    <div className='container'>
    <p className='fs-5 fw-bold mt-3 ms-2'>Home <MdOutlineStarRate className='float-end fs-4'/></p>
    <div className='mt-4'>
      <TweetShare/>
      <TimeLineTweet/>
    </div>
     
    </div>
     
    </div>
  )
}

export default MainTweet