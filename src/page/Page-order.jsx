import React from "react";
import Order from "../component/seller/Order";
import Navbar from "../component/seller/Navbar";

export default function PageOrder() {
  return (
    <fragment>
      <div className="flex">
        <div className="pr-80 hidden sm:block">
          <Navbar />
        </div>
        <div className="p-5">
          <Order />
        </div>
      </div>
    </fragment>
  );
}
