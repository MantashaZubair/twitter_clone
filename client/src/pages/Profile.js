import React from 'react'
import LeftSidebar from '../component/LeftSidebar'
import ProfileCard from '../component/ProfileCard'
import {MdOutlineStarRate} from "react-icons/md"

const Profile = () => {
  return (
    <div className='container'>
    <div className='row '>
       <div className='col-lg-3 mt-4'>
          <LeftSidebar/>
       </div>
       <div className='col-lg-6  mt-1'>
       <div className='card card-tweet'>
        <div className='container'>
        <p className='fs-5 fw-bold mt-3 ms-2'>Profile <MdOutlineStarRate className='float-end fs-4'/></p>
              <ProfileCard />
        </div>
        </div>
       </div>
       <div className='col-lg-3 text-center  mt-4'>
          Right
       </div>
    </div>
  </div>
)
  }

export default Profile