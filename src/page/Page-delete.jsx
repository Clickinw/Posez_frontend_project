import React from "react";
import Navbar from "../component/seller/Navbar";
import Delete from "../component/seller/Delete";

export default function PageDelete() {
  return (
    <fragment>
      <div className="flex">
        <div className="pr-72">
          <Navbar />
        </div>
        <div>
          <Delete />
        </div>
      </div>
    </fragment>
  );
}
