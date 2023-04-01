import React from 'react'
import LeftSidebar from '../component/LeftSidebar'
import MainTweet from '../component/MainTweet'
import RightSidebar from '../component/RightSidebar'

const Home = () => {
  return (
    <div className='container'>
      <div className='row '>
         <div className='col-lg-3 mt-4'>
            <LeftSidebar/>
         </div>
         <div className='col-lg-6  mt-1'>
            <MainTweet/>
         </div>
         <div className='col-lg-3 text-center  mt-4'>
            <RightSidebar/>
         </div>
      </div>
    </div>
  )
}

export default Home