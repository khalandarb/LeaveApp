import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/LoginPage';



function App() {
  return (
    <div className="wrapper">
      <h1>Leave Please!</h1>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
      </Routes>
      <Login></Login>
    </div>
  );
}

export default App;