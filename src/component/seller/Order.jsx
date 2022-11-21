import React from "react";
import Navbar from "./Navbar";
import data from "../../api/data";
import { Select } from "@mantine/core";
import { FiCheckCircle } from "react-icons/Fi";

export default function Order() {
  const options = [
    { value: "1", label: "รับออเดอร์แล้ว" },
    { value: "2", label: "กำลังทำอาหาร" },
    { value: "3", label: "กำลังเสิร์ฟ" },
    { value: "4", label: "สำเร็จ" },
  ];
  const setHandle = (e) => {
    setSelectedOptions(
      Array.isArray(e) ? e.map((options) => options.label) : []
    );
  };
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <fragment>
      <div className="flex">
        <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1">
          <div className="">
            <h3 className="text-2xl mb-5 mt-5 text-[#3C4048]">
              ออเดอร์ปัจจุบัน
            </h3>
            <div className="grid grid-rows-4 gap-6">
              {/* <div className="flex justify-center content-center align-center"> */}
              <div className="rounded-lg bg-[#FCFBF1] w-full h-full shadow-xl shadow-gray-300">
                <div className="px-8 py-3 text-[#3C4048]">
                  <div className=" text-xl ">โต๊ะ 1</div>
                  <div className=" mt-1 text-sm border-b-2">{date}</div>
                  <div className="mt-3 grid justify-center content-center align-center text-[#3C4048]">
                    <div className="px-2 mb-3">
                      <span className="mb-2">สถานะคำสั่งซื้อ</span>
                      <div className="rounded-lg drop-shadow-md shadow-gray-300">
                        <Select
                          className="text-[#3C4048]  "
                          placeholder="เลือกสถานะ"
                          clearable
                          data={[
                            { value: "1", label: "รับออเดอร์แล้ว" },
                            { value: "2", label: "กำลังทำอาหาร" },
                            { value: "3", label: "กำลังเสิร์ฟ" },
                            { value: "4", label: "สำเร็จ" },
                          ]}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-4 text-lg mb-2 border-t-2">
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
                      className="m-3 bg-[#F5B449] hover:bg-[#CE3434] rounded-full shadow-xl shadow-gray-300 mb-3 w-2/5 h-[2rem]"
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
                  <div className=" text-xl ">โต๊ะ 1</div>
                  <div className=" mt-1 text-sm border-b-2">{date}</div>
                  <div className="mt-3 grid justify-center content-center align-center text-[#3C4048]">
                    <div className="px-2 mb-3">
                      <span className="mb-2">สถานะคำสั่งซื้อ</span>
                      <div className="rounded-lg drop-shadow-md shadow-gray-300">
                        <Select
                          className="text-[#3C4048]  "
                          placeholder="เลือกสถานะ"
                          clearable
                          data={[
                            { value: "1", label: "รับออเดอร์แล้ว" },
                            { value: "2", label: "กำลังทำอาหาร" },
                            { value: "3", label: "กำลังเสิร์ฟ" },
                            { value: "4", label: "สำเร็จ" },
                          ]}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-4 text-xl mb-2 border-t-2">
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
                      className="m-3 bg-[#F5B449] hover:bg-[#CE3434] rounded-full shadow-xl shadow-gray-300 mb-3 w-2/5 h-[2rem]"
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
                  <div className=" text-xl ">โต๊ะ 1</div>
                  <div className=" mt-1 text-sm border-b-2">{date}</div>
                  <div className="mt-3 grid justify-center content-center align-center text-[#3C4048]">
                    <div className="px-2 mb-3">
                      <span className="mb-2">สถานะคำสั่งซื้อ</span>
                      <div className="rounded-lg drop-shadow-md shadow-gray-300">
                        <Select
                          className="text-[#3C4048]  "
                          placeholder="เลือกสถานะ"
                          clearable
                          data={[
                            { value: "1", label: "รับออเดอร์แล้ว" },
                            { value: "2", label: "กำลังทำอาหาร" },
                            { value: "3", label: "กำลังเสิร์ฟ" },
                            { value: "4", label: "สำเร็จ" },
                          ]}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-4 text-xl mb-2 border-t-2">
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
                      className="m-3 bg-[#F5B449] hover:bg-[#CE3434] rounded-full shadow-xl shadow-gray-300 mb-3 w-2/5 h-[2rem]"
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
          </div>
        </div>
      </div>
      {/* </div> */}
    </fragment>
  );
}
