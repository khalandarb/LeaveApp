import React from "react";
import axios from "axios";
import MgrFooter from "../Dashboard-Manager/footer";
import MgrHeader from "../Dashboard-Manager/header";
import MgrMenu from "../Dashboard-Manager/menu";
import EmpHeader from "./header";

export default class AddEmp extends React.Component{
    constructor()

    {
        super();
        this.state={
           
            fname:'',
            lname:'',
            email:'',
            password:'',
            conPwd:'',
            date:'',
            gen:'',
            ph:'',
            manID:'',
            noOfLeaves:''
                         
        }
    }

    changefNameHandler=(e)=>
    {
       this.setState({fname:e.target.value})
    }

    changelNameHandler=(e)=>
    {
       this.setState({lname:e.target.value})
    }

    changeemailHandler=(e)=>
    {
        this.setState({email:e.target.value})
    }

    changePasswordHandler=(e)=>
    {
        this.setState({password:e.target.value})
    }

    changeConPasswordHandler=(e)=>
    {
        this.setState({conPwd:e.target.value})
    }

    changedateHandler=(e)=>
    {
        this.setState({date:e.target.value})
    }

    changegenHandler=(e)=>
    {
       this.setState({gen:e.target.value})
    }

    changeMobileNoHandler=(e)=>
    {
        this.setState({ph:e.target.value})
    }
    changeManIDHandler=(e)=>
    {
        this.setState({manID:e.target.value})
    }
    changeNoOfLeavesHandler=(e)=>
    {
        this.setState({noOfLeaves:e.target.value})
    }

    saveEmployee=(e)=>
    {
        e.preventDefault();
        console.log('Save Employee method called')
        console.log(this.state.fname,this.state.lname,this.state.ph,this.state.email,this.state.password,this.state.conPwd,this.state.date,this.state.gen,this.state.ph,this.state.ManID,this.state.noOfLeaves)
        const result=axios.post("http://localhost:46044/api/Employees",
        {
            "empId":0,
            "fname":this.state.fname,
            "lname":this.state.lname,
            "email":this.state.email,
            "password":this.state.password,
            "conPwd":this.state.conPwd,
            "date":this.state.date,
            "gen":this.state.gen,
            "ph":this.state.ph,
            "ManID":this.state.manID,
            "NoOfLeaves":this.state.noOfLeaves          
        });
        console.log(result)
        if(result){
            alert("Employee added succeessfully");
            window.location="/AddEmp";
        }else{
            alert("ERROR:Request Unprocessed!");
        }
    }

    render(){
        return(
<div>
    <EmpHeader/>
    <MgrMenu/>
     <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid"></div>
            <div className="container">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>First Name</label>
                            <input className="form-control" name="fname"
                            onChange={this.changefNameHandler}
                            value={this.state.fname}/>
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input className="form-control" name="lname"
                            onChange={this.changelNameHandler}
                            value={this.state.lname}/>
                        </div>


                        <div className="form-group">
                            <label>Email Id</label>
                            <input className="form-control" name="email"
                             onChange={this.changeemailHandler}
                            value={this.state.email}/>
                        </div>
                       
                        <div className="form-group">
                            <label>Enter Password</label>
                            <input className="form-control" name="password"
                            onChange={this.changePasswordHandler}
                            value={this.state.password}/>
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input className="form-control" name="conPwd"
                            onChange={this.changeConPasswordHandler}
                            value={this.state.conPwd}/>
                        </div>
                        <div className="form-group">
                            <label>Date of Joined</label>
                            <input className="form-control" name="date"
                            onChange={this.changedateHandler}
                            value={this.state.date}/>
                        </div>
                        <div className="form-group">
                           <label>Gender</label>
                            <input className="form-control" name="gen"
                            onChange={this.changegenHandler}
                            value={this.state.gen}/>
                        </div>
                        
                        <div className="form-group">
                            <label>Mobile No</label>
                            <input className="form-control" name="ph"
                            onChange={this.changeMobileNoHandler}
                            value={this.state.ph}/>                    
                        </div>
                        <div className="form-group">
                            <label>No Of Leaves</label>
                            <input className="form-control" name="noOfLeaves"
                            onChange={this.changeNoOfLeavesHandler}
                            value={this.state.noOfLeaves}/>

                        </div>
                        <div className="form-group">
                            <label>ManagerID</label>
                            <input className="form-control" name="manID"
                            onChange={this.changeManIDHandler}
                            value={this.state.manID}/>
                        </div>

                        <button className="btn btn-success" onClick={this.saveEmployee}> Submit </button>

                    </form>
                </div>
            </div>
        </div>
    </div>
    <MgrFooter/>
</div>
        )
    }
}