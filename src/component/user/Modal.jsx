import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t text-[#3C4048]">
                  <h3 className="text-3xl">กรุณากรอกรายละเอียด</h3>
                  <button
                    className="p-1 pl-20 ml-auto bg-transparent border-0 text-[#3C4048] float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    {/* <span className="bg-transparent text-black opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-square-x"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#3C4048"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <path d="M10 10l4 4m0 -4l-4 4" />
                    </svg>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form>
                    <div>
                      <div className="mb-3">
                        <label>
                          <span className="text-gray-700">ชื่อ</span>
                          <input
                            type="text"
                            className="block w-full px-4 py-1  text-white bg-[#AE2C26] rounded-md  border-2  border-[#8D201A] shadow"
                            required
                          />
                        </label>
                      </div>
                      <div className="mb-3">
                        <label>
                          <span className="text-gray-700">เบอร์โทรศัพท์</span>
                          <input
                            type="number"
                            className="block w-full px-4 py-1  text-white bg-[#AE2C26] rounded-md  border-2  border-[#8D201A] shadow"
                            required
                          />
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent text-base  px-6 py-2  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    ปิด
                  </button>
                  <button
                    className="bg-[#F5B449] hover:bg-[#CE3434] text-[#3C4048] active:bg-[#CE3434] text-base px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    ส่ง
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
