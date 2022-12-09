import logo from './logo.svg';
import './App.css';
import EmployeeListComponent from './Components/Employees/EmployeeList';
import LeaveListComponent from './Components/Leave/LeaveList';
import LoginParam from './Login/LoginPage';

import DashBoard from './Components/Dashboard/dashboard';



function App() {
  return (
    <div className="App">
      <h1>Leave Please!</h1>
      {/* <EmployeeListComponent></EmployeeListComponent>
      <LeaveListComponent></LeaveListComponent> */}
      
      <LoginParam></LoginParam>
    </div>
  );
}

export default App;