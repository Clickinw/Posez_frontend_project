import React from "react";
import data from "../../api/data";
import { FiCheckCircle } from "react-icons/Fi";

export default function History() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <fragment>
      <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1">
        <h3 className="text-4xl mb-5 mt-5 text-[#3C4048]">ประวัติออเดอร์</h3>
      </div>
      <div className="grid grid-rows-4 gap-6">
        <div className="rounded-lg bg-[#FCFBF1] w-full h-full shadow-xl shadow-gray-300">
          <div className="px-10 py-5 text-[#3C4048] text-xl">
            <div className="grid grid-rows ">
              <sapn className="  text-center ">โต๊ะ 1</sapn>
              <span className=" mt-1 text-sm border-b-2 text-center">
                {date}
              </span>
            </div>
          </div>
          <div className="px-10  text-xl text-[#3C4048] mb-4">
            <div className="grid grid-cols-5 gap-4">
              <span className="text-start">รายการ</span>
              <span className="text-center">จำนวน</span>
              <span className="text-center">ตัวเลือก</span>
              <span className="text-center">ราคา</span>
              <span className="text-center">หมายเหตุ</span>
            </div>
          </div>
          {data.map((data) => (
            <div className="px-10 text-[#3C4048] mt-2 text-base ">
              <div className="grid grid-cols-5 gap-4 mb-2">
                <sapn className="text-start">{data.title}</sapn>
                <span className="text-center">-</span>
                <span className="text-center"></span>
                <sapn className="text-center">{data.price}</sapn>
                <span className="text-center">-</span>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-2 justify-center content-center align-center mx-3 text-xl text-[#3C4048] border-t-2">
            <sapn className="text-end underline underline-offset-2 m-2">
              รวม:{" "}
            </sapn>
            <span className="text-start m-2"> xxx บาท</span>
          </div>
          <div className="flex justify-center content-center align-center">
            <button
              type="submit"
              className="m-3 bg-[#CE3434] rounded-full shadow-gray-300 mb-3 w-2/5 h-[2rem] cursor-not-allowed shadow-inner"
            >
              <div className="flex justify-center itmes-center">
                <div className="mt-1 mr-2">
                  <FiCheckCircle />
                </div>
                <div>สำเร็จ</div>
              </div>
            </button>
          </div>
        </div>

        <div className="rounded-lg bg-[#FCFBF1] w-full h-full shadow-xl shadow-gray-300">
          <div className="px-10 py-5 text-[#3C4048] text-xl">
            <div className="grid grid-rows ">
              <sapn className="  text-center ">โต๊ะ 2</sapn>
              <span className=" mt-1 text-sm border-b-2 text-center">
                {date}
              </span>
            </div>
          </div>
          <div className="px-10  text-xl text-[#3C4048] mb-4">
            <div className="grid grid-cols-5 gap-4">
              <span className="text-start">รายการ</span>
              <span className="text-center">จำนวน</span>
              <span className="text-center">ตัวเลือก</span>
              <span className="text-center">ราคา</span>
              <span className="text-center">หมายเหตุ</span>
            </div>
          </div>
          {data.map((data) => (
            <div className="px-10 text-[#3C4048] mt-2 text-base ">
              <div className="grid grid-cols-5 gap-4 mb-2">
                <sapn className="text-start">{data.title}</sapn>
                <span className="text-center">-</span>
                <span className="text-center"></span>
                <sapn className="text-center">{data.price}</sapn>
                <span className="text-center">-</span>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-2 justify-center content-center align-center mx-3 text-xl text-[#3C4048] border-t-2">
            <sapn className="text-end underline underline-offset-2 m-2">
              รวม:{" "}
            </sapn>
            <span className="text-start m-2"> xxx บาท</span>
          </div>
          <div className="flex justify-center content-center align-center">
            <button
              type="submit"
              className="m-3 bg-[#CE3434] rounded-full shadow-gray-300 mb-3 w-2/5 h-[2rem] cursor-not-allowed shadow-inner"
            >
              <div className="flex justify-center itmes-center">
                <div className="mt-1 mr-2">
                  <FiCheckCircle />
                </div>
                <div>สำเร็จ</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </fragment>
  );
}
