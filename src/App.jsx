import React from "react";
import "./App.css";
import "tw-elements";
import HomeUser from "./component/user/HomeUser";
import Menu from "./component/user/Menu";
import List from "./component/user/List";
import Wait from "./component/user/Wait";
import Success from "./component/user/Success";
import Payment from "./component/user/Payment";
import Modal from "./component/user/Modal";
import Takeaway from "./component/user/Takeaway";
import Res from "./component/user/Res";
import PageOrder from "./page/Page-order";
import PageAddProduct from "./page/Page-add";
import PageDelete from "./page/Page-delete";
import PageHistory from "./page/Page-his";
import NotFound from "./component/user/NotFound";
import Login from "./component/seller/Login";
import Register from "./component/seller/Register";
// import { Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeUser />} />
        <Route path="/home" element={<HomeUser />} />
        <Route path="/Takeaway" element={<Takeaway />} />
        <Route path="/AtRes" element={<Res />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/list" element={<List />} />
        <Route path="/Wait" element={<Wait />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/Payment" element={<Payment />} />

        <Route path="/order" element={<PageOrder />} />
        <Route path="/addProduct" element={<PageAddProduct />} />
        <Route path="/deleteProduct" element={<PageDelete />} />
        <Route path="/history" element={<PageHistory />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="modal" element={<Modal />} />
      </Routes>
    </>
  );
}

export default App;
