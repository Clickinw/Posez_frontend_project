import React from "react";
import AddProduct from "../component/seller/AddProduct";
import Navbar from "../component/seller/Navbar";

export default function PageAddProduct() {
  return (
    <fragment>
      <div className="flex">
        <div className="pr-[30rem] hidden sm:block">
          <Navbar />
        </div>
        <div className="p-5">
          <AddProduct />
        </div>
      </div>
    </fragment>
  );
}
