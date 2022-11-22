import React from "react";

export default function Register() {
  return (
    <fragment>
      <div>
        <div className="mb-4 mt-12 flex justify-center content-center align-center ">
          <img className="w-1/5" src="src\assets\PosezFinal.png" alt="" />
        </div>
        <div className="grid grid-rows justify-center content-center align-center items-center">
          <h3 className="text-4xl mb-5 text-[#3C4048] text-center">
            ลงทะเบียน
          </h3>
          <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 ">
            <div className="rounded-lg bg-[#FCFBF1] w-[40rem] h-full shadow-xl shadow-gray-300 ">
              <div className="p-10 "></div>
            </div>
          </div>
        </div>
      </div>
    </fragment>
  );
}
