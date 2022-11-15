import React from "react";

export default function Wait() {
  return (
    <fragment>
      <div>
        <div className="mb-4 flex justify-center content-center align-center">
          <img className="w-[30%]" src="src\assets\PosezFinal.png" alt="" />
        </div>
        <div className="container">
          <div>
            <h3 className="text-4xl mb-5 text-[#3C4048] ">สถานะคำสั่งซื้อ</h3>
          </div>
          <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1">
            {/* <div className="flex justify-center content-center align-center"> */}
            <div className="rounded-lg bg-[#FCFBF1] w-full h-full shadow-xl shadow-gray-300">
              <div className="m-3">
                <div className="flex justify-center content-center align-center">
                  <img
                    className="w-[50%] "
                    src="https://cdn-icons-png.flaticon.com/512/1027/1027230.png"
                    alt=""
                  />
                </div>

                <h5 className="text-4xl mt-3 text-[#3C4048] ">กำลังทำอาหาร</h5>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </fragment>
  );
}
