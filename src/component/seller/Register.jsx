import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <fragment>
      <div>
        <div className="mb-4 mt-12 flex justify-center content-center align-center ">
          <img className="w-1/5" src="src\assets\PosezFinal.png" alt="" />
        </div>
        <div className="grid grid-rows justify-center content-center align-center items-center">
          <h3 className="text-4xl mb-5 text-[#3C4048] text-center">
            ลงทะเบียน
          </h3>
          <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 ">
            <div className="rounded-lg bg-[#FCFBF1] w-[40rem] h-full shadow-xl shadow-gray-300 ">
              <div className="p-10 ">
                <div className="flex justify-center content-center align-center">
                  <img
                    className="w-36 h-36"
                    src="https://cdn-user-icons.flaticon.com/79635/79635141/1669121914580.svg?token=exp=1669122836~hmac=3e7a39ef593ec2a9f75f5c42b8d6b282"
                    alt=""
                  />
                </div>
                <form action="">
                  <div className="m-5">
                    <div className="flex text-white gap-2">
                      <div className="border-2 rounded-full border-[#8D201A] shadow-lg shadow-gray-300 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-edit"
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
                          <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                          <line x1="16" y1="5" x2="19" y2="8" />
                        </svg>
                      </div>
                      <input
                        placeholder="ชื่อ"
                        type="text"
                        className="block w-full p-2 text-[#3C4048] bg-white rounded-md  border-2 border-[#8D201A] shadow-lg  shadow-gray-400 text-base font-extralight"
                      ></input>
                    </div>
                  </div>

                  <div className="m-5">
                    <div className="flex text-white gap-2">
                      <div className="border-2 rounded-full border-[#8D201A] shadow-lg shadow-gray-300 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-edit"
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
                          <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                          <line x1="16" y1="5" x2="19" y2="8" />
                        </svg>
                      </div>
                      <input
                        placeholder="นามสกุล"
                        type="text"
                        className="block w-full p-2 text-[#3C4048] bg-white rounded-md  border-2 border-[#8D201A] shadow-lg  shadow-gray-400 text-base font-extralight"
                      ></input>
                    </div>
                  </div>

                  <div className="m-5">
                    <div className="flex text-white gap-2">
                      <div className="border-2 rounded-full border-[#8D201A] shadow-lg shadow-gray-300 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-mail"
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
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <polyline points="3 7 12 13 21 7" />
                        </svg>
                      </div>
                      <input
                        placeholder="อีเมล"
                        type="email"
                        className="block w-full p-2 text-[#3C4048] bg-white rounded-md  border-2 border-[#8D201A] shadow-lg  shadow-gray-400 text-base font-extralight"
                      ></input>
                    </div>
                  </div>

                  <div className="m-5">
                    <div className="flex text-white gap-2">
                      <div className="border-2 rounded-full border-[#8D201A] shadow-lg shadow-gray-300 p-1">
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
                        className="block w-full p-2 text-[#3C4048] bg-white rounded-md  border-2 border-[#8D201A] shadow-lg  shadow-gray-400 text-base font-extralight"
                      ></input>
                    </div>
                  </div>

                  <div className="flex  justify-center items-center">
                    <Link to="/login">
                      <button
                        type="submit"
                        to="/login"
                        className="m-3 bg-gray-500 hover:bg-gray-700 rounded-md shadow-xl shadow-gray-300 mb-3 w-32 h-[3rem] text-white"
                      >
                        ย้อนกลับ
                      </button>
                    </Link>

                    <Link to="/login">
                      <button
                        type="submit"
                        className="m-3 bg-[#CE3434] hover:bg-[#8D201A] rounded-md shadow-xl shadow-gray-300 mb-3 w-32 h-[3rem] text-white"
                      >
                        ลงทะเบียน
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </fragment>
  );
}
