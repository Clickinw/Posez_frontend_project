import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <fragment>
      <div>
        <div className="mb-4 mt-12 flex justify-center content-center align-center ">
          <img className="w-1/5" src="src\assets\PosezFinal.png" alt="" />
        </div>
        <div className="grid grid-rows justify-center content-center align-center items-center">
          <h3 className="text-4xl mb-5 text-[#3C4048] text-center">
            เข้าสู่ระบบ
          </h3>
          <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 ">
            <div className="rounded-lg bg-[#FCFBF1] w-[40rem] h-full shadow-xl shadow-gray-300">
              <div className="flex justify-center content-center align-center pt-5">
                <img
                  className="w-2/5 h-2/5"
                  src="https://cdn-user-icons.flaticon.com/79635/79635141/1669106777841.svg?token=exp=1669107679~hmac=12fd66b66fd0ae9494af46cd8fbf6a87"
                  alt=""
                />
              </div>
              <form
                action=""
                className="px-10 py-10 text-xl grid grid-rows content-center align-center items-center"
              >
                <div className="mb-8 mt-3">
                  <label className="">
                    <div className="flex text-white gap-2">
                      <div className="border-2 rounded-full border-[#8D201A] shadow-lg shadow-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-user"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#8D201A"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="12" cy="7" r="4" />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                      </div>

                      <input
                        placeholder="อีเมล"
                        type="email"
                        className="block w-full p-2 text-[#3C4048] bg-white rounded-md  border-2 border-[#8D201A] shadow-lg  shadow-gray-400 text-base font-extralight"
                      ></input>
                    </div>
                  </label>
                </div>

                <div className="mb-8 mt-3">
                  <label className="">
                    <div className="flex text-white gap-2">
                      <div className="border-2 rounded-full border-[#8D201A] shadow-lg shadow-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-lock"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#8D201A"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <rect x="5" y="11" width="14" height="10" rx="2" />
                          <circle cx="12" cy="16" r="1" />
                          <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                        </svg>
                      </div>

                      <input
                        placeholder="รหัสผ่าน"
                        type="password"
                        className="block w-full p-2 text-[#3C4048] bg-white rounded-md  border-2 border-[#8D201A] shadow-lg  shadow-gray-400  text-base font-extralight"
                      ></input>
                    </div>
                  </label>
                </div>

                <div className="flex  justify-center items-center">
                  <Link to="/order">
                    <button
                      type="submit"
                      className="m-3 bg-[#CE3434] hover:bg-[#8D201A] rounded-md shadow-xl shadow-gray-300 mb-3 w-32 h-[3rem] text-white"
                    >
                      เข้าสู่ระบบ
                    </button>
                  </Link>
                </div>
                <div className="flex justify-center content-center align-center gap-2 text-[#3C4048] mt-3">
                  <span>หากยังไม่มีบัญชี</span>
                  <Link to="/register" className="text-[#8D201A]">
                    ลงทะเบียนที่นี่
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </fragment>
  );
}
