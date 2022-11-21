import React from 'react';
import './App.css';
import 'tw-elements';
import Logo from './component/Logo';
import HomeUser from './component/user/HomeUser';
import Menu from './component/user/Menu';
import List from './component/user/List';
import Wait from './component/user/Wait';
import Payment from './component/user/Payment';
import Modal from './component/user/Modal';
import Takeaway from './component/user/Takeaway';
import Res from './component/user/Res';
import Navbar from './component/seller/Navbar';
import Order from './component/seller/Order';
import Select1 from './component/Select1';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<HomeUser />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/list' element={<List />} />
        <Route path='/Wait' element={<Wait />} />
        <Route path='/Payment' element={<Payment />} />
        <Route path='/Modal' element={<Modal />} />
        <Route path='/Takeaway' element={<Takeaway />} />
        <Route path='/Res' element={<Res />} />
        <Route path='/Navbar' element={<Navbar />} />
        <Route path='/Order' element={<Order />} />
        <Route path='/Select1' element={<Select1 />} />
      </Routes>
      <Order />
    </>
  );
}

export default App;
