import React from 'react';
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard';
import {Route,Routes} from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/SignIn/Login';
import Payment from './Components/Payment/Payment';
import ViewOrders from './Components/Dashboard/ViewOrders';
import ViewPayments from './Components/Dashboard/ViewPayments';
import New from './Components/SignIn/Main';
// import Noti from './Components/Noti/Noti';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<New />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/viewOrders' element={<ViewOrders/>} />
        <Route path='/viewPayments' element={<ViewPayments/>} />
        <Route path='/new' element={<SignUp/>} />

        {/* <Route path='/noti' element={<Noti/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
