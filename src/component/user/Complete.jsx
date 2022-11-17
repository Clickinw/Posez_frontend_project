import React from "react";

export default function Complete() {
  return (
    <fragment>
      <div className="mb-4 flex justify-center content-center align-center">
        <img className="w-[30%]" src="src\assets\PosezFinal.png" alt="" />
      </div>
      <div className="container">
        <div>
          <h3 className="text-4xl text-[#3C4048] ">สถานะคำสั่งซื้อ</h3>
        </div>
        <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1">
          <div className="rounded-lg bg-[#FCFBF1] w-full h-full shadow-xl shadow-gray-300">
            <div className="m-3">
              <div className="flex justify-center content-center align-center">
                <img
                  className="w-[50%] "
                  src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                  alt=""
                />
              </div>

              <h5 className="text-3xl mt-3 text-[#3C4048] ">ทำเสร็จแล้ว</h5>
            </div>
          </div>
          <div className="mt-1">
            <button
              type="submit"
              className="m-3 bg-[#F5B449] hover:bg-[#CE3434] rounded-md shadow-xl shadow-gray-300  w-[20%] h-[2rem]"
            >
              เช็คบิล
            </button>
          </div>
        </div>
      </div>
    </fragment>
  );
}
