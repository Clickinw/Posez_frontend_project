import React from "react";
import Order from "../component/seller/Order";
import Navbar from "../component/seller/Navbar";

export default function PageOrder() {
  return (
    <fragment>
      <div className="flex">
        <Navbar />
        <div className="flex">
          <Order />
        </div>
      </div>
    </fragment>
  );
}
