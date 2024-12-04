import React, { useContext, useState } from 'react'
import { OrganizerContext } from '../../context/orgcontext'
import getUser from '../../controllers/getuser'

function Signin() {
  
  let [error,setError]=useState('')
  const {setOrg} = useContext(OrganizerContext)
  const getUserData= async (e)=>{
      e.preventDefault()
      setError(null)
    try {
      
      const user=getUser()
      setOrg(user)
    } catch (error) {
      setError(error.message)
    }

  }


  return (
    <div>

      {error !=null ?
        <div class="alert alert-danger" role="alert">
           {error}
        </div>
      :<div></div>}
      <div className=' m-auto flex-column justify-content-center align-items-center'>
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1"  class="form-label">Email address</label>
    <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name='password' class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" class="btn btn-primary"
   onClick={getUserData}
  >Sign In</button>
</form>


      </div>
    </div>
  )
}

export default Signin
