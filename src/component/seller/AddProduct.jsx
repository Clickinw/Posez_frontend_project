import React from "react";

export default function AddProduct() {
  return (
    <fragment>
      <div className="flex">
        <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1">
          <div className="">
            <h3 className="text-2xl mb-5 mt-5 text-[#3C4048]">
              เพิ่มรายการอาหาร
            </h3>
            <div className="grid grid-rows-1">
              <div className="rounded-lg bg-[#FCFBF1] w-[30rem] h-[30rem] shadow-xl shadow-gray-300  text-[#3C4048]">
                <div className="px-10 py-2">
                  <form className="mt-6">
                    <div className="mb-2">
                      <label>
                        <span className="block">เพิ่มรูปภาพ</span>
                        <input
                          class="block w-full  text-sm border-2  border-[#8D201A] rounded-lg text-white
                        cursor-pointer bg-[#AE2C26] shadowr"
                          required
                          type="file"
                        />
                      </label>
                    </div>
                    <div className="mb-2">
                      <label>
                        <span className="text-gray-700">ชื่ออาหาร</span>
                        <input
                          type="text"
                          className="block w-full px-4 py-1 mt-2 text-white bg-[#AE2C26] rounded-md  border-2  border-[#8D201A] shadow"
                          required
                        />
                      </label>
                    </div>
                    <div className="mb-2">
                      <label>
                        <span className="">ราคา</span>
                        <input
                          type="number"
                          className="block w-full px-4 py-1 mt-2 text-white bg-[#AE2C26] border-2  border-[#8D201A] rounded-md shadow"
                          required
                        />
                      </label>
                    </div>
                    <div className="mb-2">
                      <label>
                        <span class="">รายละเอียด</span>
                        <textarea
                          name="message"
                          className="
                        block w-full
                        px-4 mt-2
                         text-white bg-[#AE2C26] border-2  border-[#8D201A] rounded-md shadow"
                          rows="5"
                          required
                        ></textarea>
                      </label>
                    </div>

                    <div className="flex justify-end content-end align-end mb-2">
                      <button
                        type="submit"
                        className=" m-5 bg-[#F5B449] hover:bg-[#CE3434] rounded-md shadow-xl shadow-gray-300 w-1/4 h-[2rem]  text-[#3C4048]"
                      >
                        ส่ง
                      </button>
                    </div>
                    <div></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </fragment>
  );
}
