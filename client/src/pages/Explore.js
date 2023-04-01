import React from 'react'
import LeftSidebar from '../component/LeftSidebar'

import RightSidebar from '../component/RightSidebar'
import MainExplore from '../component/MainExplore'

const Explore = () => {
  return (
    <div className='container'>
      <div className='row '>
         <div className='col-lg-3 mt-4'>
            <LeftSidebar/>
         </div>
         <div className='col-lg-6  mt-1'>
            <MainExplore/>
         </div>
         <div className='col-lg-3 text-center  mt-4'>
            <RightSidebar/>
         </div>
      </div>
    </div>
  )
}

export default Explore