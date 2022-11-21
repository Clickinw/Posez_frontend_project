import React from "react";

export default function Wait() {
  return (
    <fragment>
      <div>
        <div className="mb-4 mt-12 flex justify-center content-center align-center">
          <img className="w-1/5" src="src\assets\PosezFinal.png" alt="" />
        </div>
        <div className="grid grid-rows justify-center content-center align-center">
          <h3 className="text-5xl mb-5 text-[#3C4048] text-center">
            สถานะคำสั่งซื้อ
          </h3>
          <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1">
            <div className="rounded-lg bg-[#FCFBF1] w-full h-full shadow-xl shadow-gray-300">
              <div className="m-3 px-10 py-5">
                <div className="flex justify-center content-center align-center">
                  <img
                    className="w-3/5 "
                    src="https://cdn-icons-png.flaticon.com/512/1027/1027230.png"
                    alt=""
                  />
                </div>
                <div className="flex justify-center content-center align-center mt-3">
                  <div className="text-4xl mt-3 text-[#3C4048] ">
                    กำลังทำอาหาร
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </fragment>
  );
}
