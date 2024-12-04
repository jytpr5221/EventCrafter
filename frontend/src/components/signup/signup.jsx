import React, { useState } from "react";
import registerUser from "../../controllers/registerUser";



function Signup() {

  let [company,setCompany] = useState('')
  let [email,setEmail] = useState('')
  let [password,setPassword] = useState('')
  let [address,setAddress] = useState('')
  let [contact,setContact] = useState('')
  let [error,setError] = useState('')

  async function registerNewUser(){

    await registerUser({company,email,password,address,contact,})
  }

  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Company
          </label>
          <input
            type="text"
            value={company}
            onChange={()=>setCompany(e.target.value)}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={email}
            class="form-control"
            id="exampleInputEmail1"
            onChange={()=>setEmail(e.target.value)}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            class="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={()=>setPassword(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            name="address"
            value={address}
            onChange={()=>setAddress(e.target.value)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Contact
          </label>
          <input
            type="number"
            class="form-control"
            name="contact"
            value={contact}
            onChange={()=>setContact(e.target.value)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
