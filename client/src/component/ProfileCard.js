import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {MdOutlineDateRange,MdOutlineLocationOn} from "react-icons/md"
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import EditProfile from './EditProfile'


const ProfileCard = () => {
  const[modelopened,setModelOpened] = useState(false)
  const [userProfile,setUserProfile] = useState({})

  const {id} = useParams()
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
  const {user} = useSelector((state)=>state.authReducer.authData)

  //find all user 

 useEffect(()=>{
  const fetchUserProfile = async()=>{
    if(id===user._id){
      setUserProfile(user)
      
    }
    else{
      const userProfile = await axios.get(`http://localhost:8080/api/v1/user/get-user/${id}`);
      setUserProfile(userProfile?.data)
    }
  }
  fetchUserProfile()
 }, [user,id])

  return (
    <>
    
      <div className='card pb-4 shadow rounded-0 ' >
      <div className='row'>
       <div className='col-12'>
       
           <img src= {user.coverPicture? serverPublic + user.profilePicture : serverPublic + "background.jpg"} alt='coverImage' width="100%" height={"140px"}/>
           <div className='m-3'>
           <img src={user.coverPicture? serverPublic + user.profilePicture : serverPublic + "default.avif"} className=" mt-2 profile-pic" alt= "Profile" />
           {user._id===id ? (<div><button className='m-3 me-5 float-end' onClick={()=>setModelOpened(true)} >Edit</button>
           <EditProfile modelopened={modelopened} setModelOpened={setModelOpened} data={user}/> </div>):
           <button className='m-3 me-5 float-end'>Follow</button>}

           <p className='mt-2 ms-1 fs-5 '>{userProfile.name}</p>
           <p className=' ms-1 '>@{userProfile.username}</p>
           <div className='ms-2'>
             <span className='me-5'><MdOutlineDateRange className='me-2 fs-4'/>{userProfile.DOB ? user.DOB : "..." }</span>
             <span className='ms-5'><MdOutlineLocationOn className='me-2 fs-4'/>{userProfile.location ? user.location : "..." }</span>
             <p className='mt-3 '> Join <span className='ms-2'>-{userProfile.createdAt}</span></p>
           </div>
           </div>
       </div>
      </div>
   </div>
    
   </>
  )
}

export default ProfileCard