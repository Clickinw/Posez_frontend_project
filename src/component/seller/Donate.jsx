import React from "react";
import { Link } from "react-router-dom";

export default function Donate() {
  return (
    <fragment>
      <div>
        <div className="mb-4 mt-12 flex justify-center content-center align-center">
          <img className="w-1/5" src="src\assets\PosezFinal.png" alt="" />
        </div>
        <div className="grid grid-rows justify-center content-center align-center">
          <h3 className="text-5xl mb-5 text-[#3C4048] text-center">
            การบริจาค
          </h3>
          <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1">
            <div className="rounded-lg w-full h-full shadow-xl shadow-gray-300 border-2  text-[#3C4048]">
              <div className="m-3 px-10 py-5 ">
                <div className="grid grid-rows text-[#3C4048]S">
                  <span className="text-center text-2xl">
                    ขณะนี้ท่านกำลังบริจาคกับ...
                  </span>
                  <span className="text-center text-xl">
                    โครงการซื้ออุปกรณ์สอนกู้ชีพ CPR
                  </span>
                </div>
                <div className="flex justify-center content-center align-center mt-2">
                  <img
                    className="w-1/4 h-1/4"
                    src="https://www.ramafoundation.or.th/give/media/uploads/content/OC005-CPRWebsite_Final-01.jpg"
                    alt=""
                  />
                </div>
                <div className="flex justify-center content-center align-center mt-3 gap-4">
                  <div className="text-2xl mt-3 text-[#3C4048] ">จำนวน</div>
                  <div className="text-2xl mt-3 text-[#3C4048] ">
                    xxxxxx บาท
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex  justify-center items-center">
              {/* <Link to="/payment"> */}
              <button
                type="submit"
                className=" m-5 bg-[#F5B449] hover:bg-[#CE3434] rounded-md shadow-xl shadow-gray-300 mb-3 w-32 h-[3rem] text-[#3C4048] text-3xl text-center"
              >
                ตกลง
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </fragment>
  );
}
