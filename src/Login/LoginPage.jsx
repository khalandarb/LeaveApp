import {React} from "react";
//import Redirect from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import DashBoard from "../Components/Dashboard/dashboard";
import { Navigate } from "react-router-dom";

export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [role, setRole] = useState("Employee");
const [data, setData] = useState("");
function validateForm() {

  return email.length > 0 && password.length > 0;

}

async function handleSubmit(event){
console.log('handle submit called')
  event.preventDefault();

  console.log(email,password,role);
 const result= await axios.post('http://localhost:46044/api/Logins',
   {"email":email,"password":password,"role":role})
   .then(res=> {
       console.log(res.data);
   return res.data;
   });
   //alert(result)
    if(result===true)
    {
      alert("Login Successsful");
         window.location= DashBoard;
     
    }
    else{
       
        alert('invalid Credetials')
    
    }
}


return (
    
<div>
    

    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input type="text" name="email" value={email}
             onChange={(e) =>setEmail(e.target.value)}             
            className="form-control"></input>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input type="text" name="password" value={password}
             onChange={(e) =>setPassword(e.target.value)}             
            className="form-control"></input>
          </div>
          <div className="form-group mt-3">
            <label>Role</label>
            <select name="role" value={role} onChange={(e) =>setRole(e.target.value)}             
            className="form-control">
                <option value="Employee">Employee</option>
                <option value="Manager">Manager</option>
            </select>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
</div>
  


);

}