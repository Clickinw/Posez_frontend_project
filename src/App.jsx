import React from "react";
import "./App.css";
import Logo from "./component/Logo";
import HomeUser from "./component/user/HomeUser";
import Menu from "./component/user/Menu";
import List from "./component/user/List";
import Wait from "./component/user/Wait";
import Payment from "./component/user/Payment";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomeUser />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/list" element={<List />} />
        <Route path="/Wait" element={<Wait />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
