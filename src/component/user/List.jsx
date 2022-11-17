import React from "react";
import data from "../../api/data";

export default function List() {
  return (
    <fragment>
      <div>
        <div className="mb-4 flex justify-center content-center align-center">
          <img className="w-[30%]" src="src\assets\PosezFinal.png" alt="" />
        </div>
        <div className="container">
          <div>
            <h3 className="text-4xl text-[#3C4048] ">รายการอาหาร</h3>
          </div>
          <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1">
            <div className="rounded-lg bg-[#FCFBF1] w-full h-full shadow-xl shadow-gray-300">
              <div className="px-10 py-3 text-xl text-[#3C4048]">
                <div className="grid grid-cols-5 gap-4">
                  <div>รายการ</div>
                  <div>จำนวน</div>
                  <div>ตัวเลือก</div>
                  <div>ราคา</div>
                  <div>หมายเหตุ</div>
                </div>
              </div>
              {data.map((data) => (
                <div className="px-10 text-[#3C4048]">
                  <div className="grid grid-cols-5 gap-4 mb-2 justify-center content-center align-center">
                    <div>{data.title}</div>
                    <div>-</div>
                    <div></div>
                    <div>{data.price}</div>
                    <div>-</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3">
            <button
              type="submit"
              className="m-3 bg-[#ED7072] hover:bg-[#EBA78A] rounded-md shadow-xl shadow-gray-300 mb-3 w-[20%] h-[2rem]"
            >
              ย้อนกลับ
            </button>
            <button
              type="submit"
              className="m-3 bg-[#F5B449] hover:bg-[#CE3434] rounded-md shadow-xl shadow-gray-300 mb-3 w-[20%] h-[2rem]"
            >
              ยืนยันออเดอร์
            </button>
          </div>
        </div>
      </div>
    </fragment>
  );
}
