import React from "react";
import Navbar from "./Navbar";
import data from "../../api/data";

export default function Delete() {
  return (
    <fragment>
      <div className="flex">
        {/* <div className="pr-72 ">
          <Navbar />
        </div> */}
        <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1">
          <div>
            <h3 className="text-3xl mb-5 mt-5 text-[#3C4048]">รายการอาหาร</h3>
            <div className="grid grid-rows">
              <div className="rounded-lg bg-[#FCFBF1] w-full h-full shadow-xl shadow-gray-300  text-[#3C4048]">
                <div className="px-5 py-3 text-xl">
                  <div className="grid grid-cols-4 gap-4 border-b-2">
                    <div>ID</div>
                    <div>ชื่อ</div>
                    <div>ราคา</div>
                    <div>เพิ่มเติม</div>
                  </div>
                </div>
                {data.map((data) => (
                  <div className="px-5 text-[#3C4048]">
                    <div className="grid grid-cols-4 gap-4 mb-2 justify-center content-center align-center border-b">
                      <div>{data.id}</div>
                      <div>{data.title}</div>
                      <div>{data.price}</div>
                      <div>
                        <button
                          type="submit"
                          className=" bg-[#F5B449] hover:bg-gray-200  rounded-md shadow-xl shadow-gray-300 w-12 h-[1.5rem] mb-2 mx-2"
                        >
                          แก้ไข
                        </button>
                        <button
                          type="submit"
                          className=" bg-[#CE3434]  hover:bg-[#ED7072] rounded-md shadow-xl shadow-gray-300  w-12 h-[1.5rem] mb-2 mx-2"
                        >
                          ลบ
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </fragment>
  );
}
