import React from "react";

export default function Payment() {
  return (
    <fragment>
      <div className="mb-3 flex justify-center content-center align-center">
        <img className="w-[30%]" src="src\assets\PosezFinal.png" alt="" />
      </div>
      <div className="container">
        <div>
          <h3 className="text-4xl mb-3 text-[#3C4048]">ชำระเงิน</h3>
        </div>
        <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1">
          <div className="flex justify-center content-center align-center">
            <div className="rounded-lg bg-[#FCFBF1] w-[80%] h-full shadow-xl shadow-gray-300">
              <div className="inline-flex gap-6 mt-4 ">
                <h3 className="text-2xl text-[#3C4048]">รวม: </h3>
                <h3 className="text-2xl text-[#3C4048]">312</h3>
              </div>
              <div className="border-b-2 border-gray-300 mx-5"></div>
              <div className="flex justify-center content-center align-center gap-5 m-5 ">
                <div className="inline-flex gap-6 justify-center content-center align-center">
                  <div className="grid grig-row-2">
                    <h3 className="text-2xl text-[#3C4048]">เงินสด</h3>
                    <img
                      className="w-[15rem] h-[15rem]shadow-xl shadow-gray-300"
                      src="https://cdn-icons-png.flaticon.com/512/2543/2543190.png"
                      alt=""
                    />
                  </div>
                  <div className="border-l-2 border-gray-500"></div>
                  <div className="grid grig-row-2">
                    <h3 className="text-2xl mb-3 text-[#3C4048]">สแกนจ่าย</h3>
                    <img
                      className="w-[15rem] h-[10rem] shadow-xl shadow-gray-300"
                      src="https://sv1.img.in.th/SK8dq.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="border-t-2 border-gray-300 mx-5 mb-3"></div>
              <div className="flex justify-center content-center align-center">
                <div class="mb-3">
                  <label for="formFileSm" class="form-label  text-[#3C4048]">
                    โปรดแนบหลักฐานการโอนเงิน
                  </label>
                  <div class="flex items-center  py-2">
                    <input
                      className="form-control appearance-none bg-white bg-clip-padding border-none w-full text-[#3C4048] mr-3 py-1 px-2 leading-tight focus:outline-none shadow-xl shadow-gray-300"
                      type="file"
                    />
                    <button
                      class="flex-shrink-0 bg-[#F5B449] hover:bg-[#CE3434] rounded-md shadow-xl shadow-gray-300 py-1 px-2 w-[20%] "
                      type="button"
                    >
                      ส่ง
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </fragment>
  );
}
