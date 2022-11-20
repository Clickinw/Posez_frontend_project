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
        <h3 className="text-2xl mb-5 mt-5 text-[#3C4048]">ประวัติออเดอร์</h3>
      </div>
      <div className="grid grid-rows-4 gap-6">
        <div className="rounded-lg bg-[#FCFBF1] w-full h-full shadow-xl shadow-gray-300">
          <div className="px-10 py-3 text-[#3C4048]">
            <div className=" text-xl ">โต๊ะ 1</div>
            <div className=" mt-1 text-sm border-b-2">{date}</div>
            <div className="grid grid-cols-5 gap-4 text-xl mb-2">
              <div className="mt-2">รายการ</div>
              <div className="mt-2">จำนวน</div>
              <div className="mt-2">ตัวเลือก</div>
              <div className="mt-2">ราคา</div>
              <div className="mt-2">หมายเหตุ</div>
            </div>
            {data.map((data) => (
              <div className=" text-[#3C4048]">
                <div className="grid grid-cols-5 gap-4 mb-2 text-sm">
                  <div>{data.title}</div>
                  <div>-</div>
                  <div></div>
                  <div>{data.price}</div>
                  <div>-</div>
                </div>
              </div>
            ))}
            <div className="grid grid-cols-2 justify-center content-center align-center m-3 text-xl text-[#3C4048]">
              <div className="grid justify-end content-end align-end underline underline-offset-2">
                รวม:{" "}
              </div>
              <div className="grid justify-center content-center align-center">
                {" "}
                xxx บาท
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="m-3 bg-[#CE3434] rounded-full shadow-inner mb-3 w-2/5 h-[2rem] cursor-not-allowed"
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

        <div className="rounded-lg bg-[#FCFBF1] w-full h-full shadow-xl shadow-gray-300">
          <div className="px-10 py-3 text-[#3C4048]">
            <div className=" text-xl ">โต๊ะ 2</div>
            <div className=" mt-1 text-sm border-b-2">{date}</div>
            <div className="grid grid-cols-5 gap-4 text-xl mb-2">
              <div className="mt-2">รายการ</div>
              <div className="mt-2">จำนวน</div>
              <div className="mt-2">ตัวเลือก</div>
              <div className="mt-2">ราคา</div>
              <div className="mt-2">หมายเหตุ</div>
            </div>
            {data.map((data) => (
              <div className=" text-[#3C4048]">
                <div className="grid grid-cols-5 gap-4 mb-2 text-sm">
                  <div>{data.title}</div>
                  <div>-</div>
                  <div></div>
                  <div>{data.price}</div>
                  <div>-</div>
                </div>
              </div>
            ))}
            <div className="grid grid-cols-2 justify-center content-center align-center m-3 text-xl text-[#3C4048]">
              <div className="grid justify-end content-end align-end underline underline-offset-2">
                รวม:{" "}
              </div>
              <div className="grid justify-center content-center align-center">
                {" "}
                xxx บาท
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="m-3 bg-[#CE3434] rounded-full shadow-inner mb-3 w-2/5 h-[2rem] cursor-not-allowed"
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
      </div>
    </fragment>
  );
}
