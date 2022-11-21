import React from 'react';

export default function List() {
  return (
    <fragment>
      <div>
        <div className='mb-4 flex justify-center content-center align-center'>
          <img className='w-[30%]' src='src\assets\PosezFinal.png' alt='' />
        </div>
        <div className='container'>
          <div>
            <h3 className='text-4xl mb-5 text-[#3C4048] '>รายการอาหาร</h3>
          </div>
          <div className='grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1'>
            <div className='rounded-lg bg-[#FCFBF1] w-full h-full shadow-xl shadow-gray-300'>
              <div className='px-10 py-5 flex justify-center content-center align-center text-[#3C4048] text-sm'>
                <table class='table-fixed'>
                  <thead>
                    <tr>
                      <th className='px-4 pb-4'>รายการ</th>
                      <th className='px-4 pb-4'>จำนวน</th>
                      <th className='px-4 pb-4'>ตัวเลือก</th>
                      <th className='px-4 pb-4'>ราคา</th>
                      <th className='px-4 pb-4'>หมายเหตุ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='px-4 pb-2'>ต้มยำกุ้ง</td>
                      <td className='px-4 pb-2'>1</td>
                      <td className='px-4 pb-2'></td>
                      <td className='px-4 pb-2'>89</td>
                      <td className='px-4 pb-2'></td>
                    </tr>
                    <tr>
                      <td className='px-4 pb-2'>ปีกไก่ทอดน้ำปลา</td>
                      <td className='px-4 pb-2'>1</td>
                      <td className='px-4 pb-2'></td>
                      <td className='px-4 pb-2'>49</td>
                      <td className='px-4 pb-2'></td>
                    </tr>
                    <tr>
                      <td className='px-4 pb-2'>กะเพราหมูสับ</td>
                      <td className='px-4 pb-2'>1</td>
                      <td className='px-4 pb-2'>ไข่ดาว</td>
                      <td className='px-4 pb-2'>39</td>
                      <td className='px-4 pb-2'></td>
                    </tr>
                    <tr>
                      <td className='px-4 pb-2'>ไข่เจียวหมูสับ</td>
                      <td className='px-4 pb-2'></td>
                      <td className='px-4 pb-2'></td>
                      <td className='px-4 pb-2'>39</td>
                      <td className='px-4 pb-2'></td>
                    </tr>
                    <tr>
                      <td className='px-4 pb-2'>ต้มจืด</td>
                      <td className='px-4 pb-2'>1</td>
                      <td className='px-4 pb-2'></td>
                      <td className='px-4 pb-2'>49</td>
                      <td className='px-4 pb-2'></td>
                    </tr>
                    <tr>
                      <td className='px-4 pb-2'>ข้าวผัดทะเล</td>
                      <td className='px-4 pb-2'>1</td>
                      <td className='px-4 pb-2'></td>
                      <td className='px-4 pb-2'>69</td>
                      <td className='px-4 pb-2'></td>
                    </tr>
                    <tr>
                      <td className='px-4 pt-3'></td>
                      <td className='px-4 pt-3'></td>
                      <td className='px-4 pt-3'>รวม</td>
                      <td className='px-4 pt-3'>334</td>
                      <td className='px-4 pt-3'></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='mt-3'>
              <button
                type='submit'
                className='m-3 bg-[#ED7072] hover:bg-[#EBA78A] rounded-md shadow-xl shadow-gray-300 mb-3 w-[20%] h-[2rem]'
              >
                ย้อนกลับ
              </button>
              <button
                type='submit'
                className='m-3 bg-[#F5B449] hover:bg-[#CE3434] rounded-md shadow-xl shadow-gray-300 mb-3 w-[20%] h-[2rem]'
              >
                ยืนยันออเดอร์
              </button>
            </div>
          </div>
        </div>
      </div>
    </fragment>
  );
}
