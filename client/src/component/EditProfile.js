import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';
import { updateUser } from '../actions/UserAction';
import { useDispatch } from 'react-redux';

const EditProfile = ({modelopened,setModelOpened,data}) => {
  const {password, ...other} = data
  console.log(other)
  const dispatch = useDispatch()
  const param = useParams()
  const [formData, setFormData] = useState(other)
  const handleChange = (e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    
     dispatch(updateUser(param.id, formData))
     setModelOpened(false)
  }
  return (
    <div>
       
        <Modal show={modelopened} onHide={()=>{setModelOpened(false)}} size="md"   >
        <Modal.Header closeButton>
         <Modal.Title>
         <h3>Edit Profile</h3>
         </Modal.Title>
         </Modal.Header>
          <Modal.Body>
         
          <form>
            <div>
            <div className="mb-3">
              <input type="text"
              name="name"
              value={formData.name}
               className="form-control"
               placeholder='enter your name'
               onChange={handleChange}
               required
              />
            </div>
            <div className="mb-3">
              <input type="text"
               name="location"
              value={formData.location}
               className="form-control"
                placeholder='enter your location'
                onChange={handleChange}
                required
               />
            </div>
            <div className="mb-3">
              <input type="date"
               name="DOB"
              value={formData.DOB}
               className="form-control"
                placeholder='enter your dob'
                onChange={handleChange}
                required
               />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update</button>
            </div>
            </form>
         
          </Modal.Body>
         
       
        </Modal>

        </div>
       
  )
}

export default EditProfile