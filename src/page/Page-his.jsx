import React from "react";
import Navbar from "../component/seller/Navbar";
import History from "../component/seller/History";

export default function PageHistory() {
  return (
    <fragment>
      <div className="flex">
        <div className="pr-[30rem] hidden sm:block">
          <Navbar />
        </div>
        <div className="p-5">
          <History />
        </div>
      </div>
    </fragment>
  );
}
