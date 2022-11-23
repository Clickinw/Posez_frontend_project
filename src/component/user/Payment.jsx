import React from "react";
import { Link } from "react-router-dom";

export default function Payment() {
  return (
    <fragment>
      <div>
        <div className="mb-4 mt-12 flex justify-center content-center align-center">
          <img className="w-1/5" src="src\assets\PosezFinal.png" alt="" />
        </div>
        <div className="grid grid-rows justify-center content-center align-center">
          <h3 className="text-5xl mb-5 text-[#3C4048] text-center">
            การชำระเงิน
          </h3>
          <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1">
            <div className="rounded-lg bg-[#FCFBF1] w-full h-full shadow-xl shadow-gray-300">
              <div className="m-3 px-10 py-5">
                <div className="grid grid-cols-2 justify-center content-center align-center mx-3 text-xl text-[#3C4048] border-b-2  border-gray-400">
                  <sapn className="text-end underline underline-offset-2 m-2">
                    รวม:{" "}
                  </sapn>
                  <span className="text-start m-2"> xxx บาท</span>
                </div>
                <div className="flex justify-center content-center align-center mt-3 mb-4">
                  <div className="inline-flex gap-6 justify-center content-center align-center">
                    <div className="grid grig-row-2">
                      <span className="text-2xl text-[#3C4048] text-center">
                        เงินสด
                      </span>
                      <img
                        className="w-[15rem] h-[15rem]shadow-xl shadow-gray-300"
                        src="https://cdn-icons-png.flaticon.com/512/2543/2543190.png"
                        alt=""
                      />
                    </div>
                    <div className="border-l-2 border-gray-400"></div>
                    <div className="grid grig-row-2">
                      <span className="text-2xl mb-3 text-[#3C4048] text-center">
                        สแกนจ่าย
                      </span>
                      <img
                        className="w-[15rem] h-[15rem] shadow-lg shadow-gray-300"
                        src="https://sv1.img.in.th/SK8dq.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center content-center align-center border-t-2  border-gray-400">
                  <div class="mb-3 mt-3">
                    <label for="formFileSm" class="form-label  text-[#3C4048]">
                      โปรดแนบหลักฐานการโอนเงิน
                    </label>
                    <div class="flex items-center py-2 gap-2">
                      <input
                        class="block w-full  text-sm border-2  border-[#8D201A] rounded-md text-white
                        cursor-pointer bg-[#AE2C26] shadowr"
                        required
                        type="file"
                      />
                      <Link to="/Thx">
                        <button
                          class="flex-shrink-0 bg-[#F5B449] hover:bg-[#CE3434] rounded-md shadow-xl shadow-gray-300 py-1 px-2 w-[4rem] "
                          type="button"
                        >
                          ส่ง
                        </button>
                      </Link>
                    </div>
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
