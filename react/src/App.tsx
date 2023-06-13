import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import {Route,Routes} from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/SignIn/Login';
import Payment from './Components/Payment/Payment';
import ViewOrders from './Components/Dashboard/ViewOrders';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/viewOrders' element={<ViewOrders/>} />
      </Routes>
    </div>
  );
}

export default App;
