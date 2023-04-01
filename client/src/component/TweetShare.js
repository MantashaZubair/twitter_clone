import React, {  useState } from 'react'
import "./MainTweet.css"
import {RxCross1} from "react-icons/rx"
import {useDispatch, useSelector} from "react-redux"
import { uploadImage,uploadTweet } from '../actions/UploadAction'


const TweetShare = () => {
  // loading....
  const loading = useSelector((state)=> state.tweetReducer.uploading)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
  const [photo , setphoto] = useState(null)
  const [content,setContent ] = useState()
  // const content = useRef()
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.authReducer.authData)


  //for tweetPost 
  const handleUpload = (e)=>{
    e.preventDefault();
    const newTweet ={
      userId: user._id,
      content:  content,

    }
    if(photo){
      const data = new FormData()
      const filename = Date.now() + photo.name;
      data.append("name", filename)
      data.append("file",photo)
      newTweet.image = filename;
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error)
      }
    }
    dispatch(uploadTweet(newTweet))
    // window.location.reload()
    reset()
  }

   // reset 
    const reset = ()=>{
      setphoto(null);
      setContent("")
     
    }
  return (
    <div className='container'>
    <div className='card p-3 rounded-0'>
    <div className='row    '>
    <div className='col-12 d-flex '>
        <img src={user.coverPicture? serverPublic + user.profilePicture : serverPublic + "default.avif"} className=" profile-pic" alt= "Profile" />
        <p className='fs-5 ms-3 mt-2 text-dark'>@{user.username}</p>
    </div>
    <div className='col-12 mt-2'>
    <textarea type="text"
    value= {content}
    onChange={(e)=>setContent(e.target.value)}
    //  ref={content}
        placeholder="write a description"
        required
     />
    </div>
    
    <div className='mt-2'>
    <button className="btn btn-primary"  onClick={handleUpload} disabled={loading}>{loading? "uploading..." : "Tweet"}</button>
       <div className='float-end  text-success'>  
                    <label  className='btn btn-outline-secondary'>
                      {photo ? photo.name :"uploade photo"}
                    <input type="file" name='photo' accept='image/*' onChange={(e)=>setphoto(e.target.files[0])} hidden />
                    </label>
                  </div>
                  <div className="mb-3">
                      {photo && (
                        <>
                        <div className='ms-5 fs-4 fw-bold mt-2'>
                        <RxCross1 onClick={()=>setphoto(null)}/>
                        </div>
                        <div className='text-center mt-2'>
                         <img src={URL.createObjectURL(photo)} alt= "product" height={"200px"}  width="80%"
                         className="img img-responsive"/>
                        </div>
                        </>
                      )}
                  </div></div>
    </div>
    </div>
    </div>

  )
}

export default TweetShare