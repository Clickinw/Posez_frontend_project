import React from "react";
import { Select } from "@mantine/core";

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
              <button
                className="my-2 w-[30rem] h-[12rem] bg-[#CE3434] hover:bg-[#8D201A] flex  justify-center items-center rounded-md shadow-xl shadow-gray-300 mb-3"
                onClick=""
                type="submit"
              >
                <div className="bg-white rounded-full w-[3.75rem] h-[3.75rem] flex justify-center itmes-center">
                  <div className="mt-[0.4rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-receipt"
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
                      <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" />
                    </svg>
                  </div>
                </div>
                <div className="pl-2 text-[2rem] text-white">
                  พร้อมสั่งอาหาร
                </div>
              </button>

              <button
                className="my-2 w-[30rem] h-[12rem] bg-[#CE3434] hover:bg-[#8D201A] flex  justify-center items-center rounded-md shadow-xl shadow-gray-300 mb-3"
                onClick=""
              >
                <div className="text-[2rem] text-white mt-3">
                  เลือกเวลามารับอาหาร
                  <Select
                    placeholder="เลือกเวลา..."
                    data={[
                      { value: "10.00-10.30", label: "10.00-10.30" },
                      { value: "10.30-11.00", label: "10.30-11.00" },
                      { value: "11.00-11.30", label: "11.00-11.30" },
                      { value: "11.30-12.00", label: "11.30-12.00" },
                      { value: "12.00-12.30", label: "12.00-12.30" },
                      { value: "12.30-13.00", label: "12.30-13.00" },
                      { value: "13.30-14.00", label: "13.30-14.00" },
                      { value: "14.00-14.30", label: "14.00-14.30" },
                      { value: "14.30-15.00", label: "14.30-15.00" },
                      { value: "15.00-15.30", label: "15.00-15.30" },
                      { value: "15.30-16.00", label: "15.30-16.00" },
                      { value: "16.00-16.30", label: "16.00-16.30" },
                      { value: "16.30-17.00", label: "16.30-17.00" },
                      { value: "17.00-17.30", label: "17.00-17.30" },
                      { value: "17.30-18.00", label: "17.30-18.00" },
                      { value: "18.00-18.30", label: "18.00-18.30" },
                      { value: "18.30-19.00", label: "18.30-19.00" },
                    ]}
                  />
                  <button
                    type="submit"
                    className=" bg-[#F5B449] hover:bg-[#EBA78A] rounded-md  w-[5rem] h-[2rem] text-[1rem]  text-[#3C4048] mb-5"
                  >
                    ยืนยัน
                  </button>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </fragment>
  );
}
