import React, { useEffect, useState } from 'react'
import {AiFillHeart, AiOutlineComment ,AiOutlineHeart} from "react-icons/ai"
import { useSelector } from 'react-redux'
// import { likeTweet } from '../api/TweetRequest'
import formatDistance from "date-fns/formatDistance";
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios';

const Tweet = ({data , setData}) => {
  const [userdata,setUserData]= useState()
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
  const {user} = useSelector((state)=>state.authReducer.authData)
  const dataStr = formatDistance(new Date(data.createdAt), new Date())
  const location = useLocation().pathname


  //find all user 

 useEffect(()=>{
  const fetchdata = async()=>{
    try {
     const findUser = await axios.get(`/api/v1/user/get-user/${data.userId}`);
     setUserData(findUser.data)
    } catch (error) {
     console.log(error)
    }
  }
  fetchdata()
 }, [data.userId,data.likes])


 //for like user 
 
const handleLike = async(e)=>{
 e.preventDefault()
try {
  await axios.put(`http://localhost:8080/api/v1/tweet/${data._id}/like`,{
    id:user._id
  })

  if(location.includes("profile")){
     const newData = await axios.get(`http://localhost:8080/api/v1/tweet/get-tweet/${user._id}`)
     setData(newData.data)
  
  }else if(location.includes("explore")){
    const newData = await axios.get(`http://localhost:8080/api/v1/tweet/explore`)
    setData(newData.data)
 }
  else{
    const newData = await axios.get(`http://localhost:8080/api/v1/tweet/${user._id}/timeline`)
    setData(newData.data)
  }
} catch (error) {
  console.log(error)
}
}


  return (
  <>

   {userdata && <div className='card rounded-0'>
    <div className='row  px-3 pt-3 '>
    <div className='col-12 d-flex'>
        <img src={user.coverPicture? serverPublic + user.profilePicture : serverPublic + "default.avif"} className=" profile-pic" alt= "Profile" />
        <Link to = {`/profile/${userdata?.otherDetails?._id}`} style={{textDecoration:"none"}}>
        <p className=' ms-3 mt-3 text-dark'>@{userdata?.otherDetails?.username}</p>
       
        </Link>
        <p className=' ms-3 mt-3 text-muted'> -{dataStr}</p>

    </div>
    <div className='ms-4'>
    <div className='col-12'>
    <h6 className='ms-2 w-75' style={{color:"#3a3636"}}>{data.content}</h6>
     <img src={data.image? process.env.REACT_APP_PUBLIC_FOLDER + data.image :""} alt="..."  width={"75%"} height="250px"></img>
    </div>

     
    <div className='col-12  ' style={{cursor:"pointer"}}  >
   <span onClick={handleLike}>{data.likes.includes(user._id)? <AiFillHeart className='text-danger fs-4'/> : <AiOutlineHeart className='fs-4' />}</span>
   <AiOutlineComment className='ms-3 fs-3'/>
   <p >{data.likes.length} likes</p> 
    </div>
    </div>
    </div>
    </div>
   } 
   </>        
  )
}

export default Tweet