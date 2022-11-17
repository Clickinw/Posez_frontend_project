import React from "react";

export default function Takeaway() {
  return (
    <fragment>
      <div className="flex justify-center content-center align-center">
        <img className="w-[80%]" src="src\assets\PosezFinal.png" alt="" />
      </div>
      <div className="container">
        <div className="flex justify-center content-center align-center">
          <h3 className="text-4xl text-[#3C4048] ">รับที่ร้าน</h3>
        </div>
        <div className="flex flex-col w-full h-full justify-center content-center items-center mt-3">
          <button
            className="my-2 w-[75%] h-[8rem] bg-[#CE3434] hover:bg-[#8D201A] flex  justify-center items-center rounded-md shadow-xl shadow-gray-300 mb-3"
            onClick=""
            type="submit"
          >
            <div className="bg-white rounded-full w-[60px] h-[60px] flex justify-center itmes-center">
              <div className="mt-[0.4rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-car"
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="7" cy="17" r="2" />
                  <circle cx="17" cy="17" r="2" />
                  <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                </svg>
              </div>
            </div>
            <div className="pl-2 text-[1.5rem] text-white">พร้อมมารับอาหาร</div>
          </button>

          <button
            className="my-2 w-[75%] h-[8rem] bg-[#CE3434] hover:bg-[#8D201A] flex  justify-center items-center rounded-md shadow-xl shadow-gray-300 mb-3"
            onClick=""
          >
            <div className="text-[1.5rem] text-white mt-3">
              เลือกเวลามารับอาหาร
              <input
                className="form-control appearance-none bg-clip-padding border-none w-full text-[#3C4048] mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="time"
                placeholder="เลือกเวลา..."
              />
              <button
                type="submit"
                className="mt-2 bg-[#F5B449] hover:bg-[#EBA78A] rounded-md  w-[20%] h-[2rem] text-sm  text-[#3C4048] mb-3"
              >
                ยืนยัน
              </button>
            </div>
          </button>
        </div>
        <div></div>
      </div>
    </fragment>
  );
}
