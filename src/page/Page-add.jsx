import React from "react";
import AddProduct from "../component/seller/AddProduct";
import Navbar from "../component/seller/Navbar";

export default function PageAddProduct() {
  return (
    <fragment>
      <div className="flex">
        <div className="pr-96">
          <Navbar />
        </div>
        <div>
          <AddProduct />
        </div>
      </div>
    </fragment>
  );
}
