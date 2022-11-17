import React from 'react';
import './App.css';
import Logo from './component/Logo';
import HomeUser from './component/user/HomeUser';
import Menu from './component/user/Menu';
import List from './component/user/List';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<HomeUser />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/list' element={<List />} />
      </Routes>
    </>
  );
}

export default App;
