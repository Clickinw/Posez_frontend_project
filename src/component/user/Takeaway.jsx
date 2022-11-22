import React from "react";
import { Link } from "react-router-dom";

export default function Takeaway() {
  return (
    <fragment>
      <div>
        <div className="mb-4 mt-12 flex justify-center content-center align-center">
          <img className="w-1/5" src="src\assets\PosezFinal.png" alt="" />
        </div>

        <div className="grid grid-rows justify-center content-center align-center">
          <div>
            <h3 className="text-5xl mb-5 text-[#3C4048] text-center">
              รับที่ร้าน
            </h3>
            <div className="grid grid-rows-2 mt-10 gap-6">
              <Link to="/menu">
                <button
                  className="my-2 w-[30rem] h-[12rem] bg-[#CE3434] hover:bg-[#8D201A] flex  justify-center items-center rounded-md shadow-xl shadow-gray-300 mb-3"
                  onClick=""
                  type="submit"
                >
                  <div className="bg-white rounded-full w-[3.75rem] h-[3.75rem] flex justify-center itmes-center">
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
                  <div className="pl-2 text-[2rem] text-white">
                    พร้อมมารับอาหาร
                  </div>
                </button>
              </Link>

              <button
                className="my-2 w-[30rem] h-[12rem] bg-[#CE3434] hover:bg-[#8D201A] flex  justify-center items-center rounded-md shadow-xl shadow-gray-300 mb-3"
                onClick=""
              >
                <div className="text-[2rem] text-white mt-3">
                  <span className="m-3">เลือกเวลามารับอาหาร</span>
                  <div className="p-2">
                    <input
                      className="form-control appearance-none bg-clip-padding border-none w-full text-[#3C4048] mr-3 py-1 px-2 leading-tight focus:outline-none rounded-md"
                      type="time"
                      placeholder="เลือกเวลา..."
                    />
                  </div>
                  <Link to="/menu">
                    <button
                      type="submit"
                      className=" bg-[#F5B449] hover:bg-[#EBA78A] rounded-md  w-[5rem] h-[2rem] text-[1rem]  text-[#3C4048] mb-5"
                    >
                      ยืนยัน
                    </button>
                  </Link>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </fragment>
  );
}
