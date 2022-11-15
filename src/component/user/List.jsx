import React from "react";

export default function List() {
  return (
    <fragment>
      <div>
        <div className="mb-4 flex justify-center content-center align-center">
          <img className="w-[30%]" src="src\assets\PosezFinal.png" alt="" />
        </div>
        <div className="container">
          <div>
            <h3 className="text-4xl mb-5 text-[#3C4048]">รายการอาหาร</h3>
          </div>
          <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1">
            <div className="rounded-lg bg-[#FCFBF1] w-full h-full">
              <div className="p-10 flex justify-center content-center align-center">
                <table className="table-auto">
                  <thead>
                    <tr>
                      <th className="">รายการ</th>
                      <th className="">จำนวน</th>
                      <th className="">ตัวเลือก</th>
                      <th className="">ราคา</th>
                      <th className="">หมายเหตุ</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>ต้มยำกุ้ง</td>
                      <td>2</td>
                      <td></td>
                      <td>178</td>
                      <td>เผ็ดๆ</td>
                    </tr>
                    <tr>
                      <td>ปีกไก่ทอดน้ำปลา</td>
                      <td>1</td>
                      <td></td>
                      <td>49</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>กะเพราหมูสับ</td>
                      <td>2</td>
                      <td>ไข่ดาว</td>
                      <td>78</td>
                      <td>เผ็ดๆ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </fragment>
  );
}
