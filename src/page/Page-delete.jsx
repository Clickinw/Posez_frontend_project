import React from "react";
import Navbar from "../component/seller/Navbar";
import Delete from "../component/seller/Delete";

export default function PageDelete() {
  return (
    <fragment>
      <div className="flex">
        <div className="pr-80 hidden sm:block">
          <Navbar />
        </div>
        <div className="p-5">
          <Delete />
        </div>
      </div>
    </fragment>
  );
}
