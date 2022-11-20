import React from "react";
import Navbar from "../component/seller/Navbar";
import History from "../component/seller/History";

export default function PageHistory() {
  return (
    <fragment>
      <div className="flex">
        <div className="pr-96">
          <Navbar />
        </div>
        <div>
          <History />
        </div>
      </div>
    </fragment>
  );
}
