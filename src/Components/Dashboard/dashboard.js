import React from 'react';
import "./dash.css";
import { useNavigate,Redirect } from "react-router-dom";


const DashBoard = () => {

 
  let navigate = useNavigate(); 

 if(sessionStorage.getItem('email')!==null){
  
  return (
    
    <div className='outerdivv'>
     
             
      

      <div className='outer-card'>
        <div  className='card-1'><h2 onClick={()=>navigate('/ShowAllEmployees')}>ShowAllEmployees</h2></div>
        <div className='card-2'><h2 onClick={()=>navigate('/ShowAllManagers')}>ShowAllManagers</h2></div>
        <div className='card-3'><h2 onClick={()=>navigate('/Applyleave')}>Applyleave</h2></div>
        <div className='card-4'><h2 onClick={()=>navigate('/ShowAllLeaveDeatails')}>ShowAllLeaveDeatails</h2></div>
      </div>
    </div>
  )
}
else{
  window.location="/";
}}

export default DashBoard