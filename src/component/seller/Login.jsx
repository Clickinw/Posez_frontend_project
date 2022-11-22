import React from "react";

export default function Login() {
  return (
    <fragment>
      <div>
        <div className="mb-4 mt-12 flex justify-center content-center align-center ">
          <img className="w-1/5" src="src\assets\PosezFinal.png" alt="" />
        </div>
        <div className="grid grid-rows justify-center content-center align-center">
          <h3 className="text-5xl mb-5 text-[#3C4048] text-center">
            เข้าสู่ระบบ
          </h3>
          <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1">
            <div className="rounded-lg bg-[#FCFBF1] w-full h-full shadow-xl shadow-gray-300">
              <div className="mb-2 text-sm">
                <label className="">
                  <span className="block text-[#3C4048]">ชื่อผู้ใช้งาน</span>
                  <input
                    type="text"
                    className="block w-full p-2  text-white bg-[#AE2C26] rounded-md  border-2 opacity-100 border-[#8D201A] shadow"
                  ></input>
                </label>
              </div>

              <div className="mb-2 text-sm">
                <label className="">
                  <span className="block text-[#3C4048]">รหัสผ่าน</span>
                  <input
                    type="text"
                    className="block w-full px-4 py-1  text-white bg-[#AE2C26] rounded-md  border-2 border-[#8D201A] shadow"
                  ></input>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </fragment>
  );
}
