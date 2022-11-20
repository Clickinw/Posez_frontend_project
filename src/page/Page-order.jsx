import React from "react";
import Order from "../component/seller/Order";
import Navbar from "../component/seller/Navbar";

export default function PageOrder() {
  return (
    <fragment>
      <div className="flex ">
        <div className="pr-96">
          <Navbar />
        </div>
        <div>
          <Order />
        </div>
      </div>
    </fragment>
  );
}
