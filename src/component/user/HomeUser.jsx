import React from "react";
import { Link } from "react-router-dom";

export default function HomeUser() {
  return (
    <fragment>
      <div>
        <div className="mb-4 mt-12 flex justify-center content-center align-center">
          <img className="w-1/5" src="src\assets\PosezFinal.png" alt="" />
        </div>

        <div className="grid grid-rows justify-center content-center align-center">
          <div>
            <h3 className="text-5xl mb-5 text-[#3C4048] text-center">
              กรุณาเลือก
            </h3>
            <div className="grid grid-rows-2 mt-10 gap-6">
              <Link to="/Takeaway">
                <button className="my-2 w-[30rem] h-[10rem] bg-[#CE3434] hover:bg-[#8D201A] flex  justify-center items-center rounded-md shadow-xl shadow-gray-300 mb-3">
                  <div className="bg-white rounded-full w-[3.75rem] h-[3.75rem] flex justify-center itmes-center">
                    <div className="mt-[0.4rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-package"
                        width="45"
                        height="45"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
                        <line x1="12" y1="12" x2="20" y2="7.5" />
                        <line x1="12" y1="12" x2="12" y2="21" />
                        <line x1="12" y1="12" x2="4" y2="7.5" />
                        <line x1="16" y1="5.25" x2="8" y2="9.75" />
                      </svg>
                    </div>
                  </div>
                  <div className="pl-2 text-[1.5rem] text-white">
                    รับที่ร้าน
                  </div>
                </button>
              </Link>

              <Link to="/AtRes">
                <button className="my-2 w-[30rem] h-[10rem] bg-[#ED7072] hover:bg-[#EBA78A] flex  justify-center items-center rounded-md shadow-xl shadow-gray-300">
                  <div className="bg-white rounded-full w-[3.75rem] h-[3.75rem] flex justify-center itmes-center">
                    <div className="mt-[0.4rem]">
                      <svg
                        className="pt-[13px]"
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-building-storer"
                        width="45"
                        height="45"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="3" y1="21" x2="21" y2="21" />
                        <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                        <line x1="5" y1="21" x2="5" y2="10.85" />
                        <line x1="19" y1="21" x2="19" y2="10.85" />
                        <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                      </svg>
                    </div>
                  </div>
                  <div className="pl-2 text-[1.5rem] text-white">
                    ทานที่ร้าน
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </fragment>
  );
}
