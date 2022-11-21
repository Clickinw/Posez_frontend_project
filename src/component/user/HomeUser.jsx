import React from "react";

export default function HomeUser() {
  return (
    <fragment>
      <div className="mb-4 flex justify-center content-center align-center">
        <img className="w-[30%]" src="src\assets\PosezFinal.png" alt="" />
      </div>
      <div className="container ">
        <div>
          <h3 className="text-4xl mb-5 text-[#3C4048] text-center">
            กรุณาเลือก
          </h3>
        </div>
        <div className="grid grid-rows-2 w-full h-full justify-center content-center items-center mt-10"></div>
      </div>
    </fragment>
  );
}
