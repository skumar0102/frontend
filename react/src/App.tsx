import React from 'react';
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard';
import {Route,Routes} from 'react-router-dom';
import Payment from './Components/Payment/Payment';
import ViewOrders from './Components/Dashboard/ViewOrders';
import ViewPayments from './Components/Dashboard/ViewPayments';
import New from './Components/SignIn/Main';
import MakeOrder from './Components/Dashboard/MakeOrder';
import MakePayment from './Components/Dashboard/MakePayment';
import Cal from './Components/Dashboard/Cal';
import Page404 from './Components/Page404/Page404';
import ViewDetails from './Components/Dashboard/ViewDetails';
// import Noti from './Components/Noti/Noti';
import Call from './Components/Call'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<New />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/viewOrders' element={<ViewOrders/>} />
        <Route path='/viewPayments' element={<ViewPayments/>} />
        <Route path='/makeOrder' element={<MakeOrder/>} />
        <Route path='/makePayment' element={<MakePayment/>} />
        <Route path='/cal' element={<Cal/>} />
        <Route path='/viewDetails' element={<ViewDetails/>} />
        <Route path='/call' element={<Call/>} />
        <Route path='*' element={<Page404/>} />

        {/* <Route path='/noti' element={<Noti/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
