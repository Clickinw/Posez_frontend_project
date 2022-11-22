import React from 'react';
import Navbar from './Navbar';
import data from '../../api/data';

export default function Delete() {
  return (
    <fragment>
      <div className='flex'>
        {/* <div className="pr-72 ">
          <Navbar />
        </div> */}
        <div className='grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1'>
          <div>
            <h3 className='text-4xl mb-5 mt-5 text-[#3C4048]'>รายการอาหาร</h3>
            <div className='grid grid-rows'>
              <div className='rounded-lg bg-[#FCFBF1] w-full h-full shadow-xl shadow-gray-300  text-[#3C4048]'>
                <div className='px-5 py-3 text-xl'>
                  <div className='grid grid-cols-4 gap-4 border-b-2'>
                    <span className='text-start'>ID</span>
                    <span className='text-start'>ชื่อ</span>
                    <span className='text-center'>ราคา</span>
                    <span className='text-center'>เพิ่มเติม</span>
                  </div>
                </div>
                {data.map((data) => (
                  <div className='px-5 text-[#3C4048]'>
                    <div className='grid grid-cols-4 gap-4 mb-2 border-b'>
                      <span className='text-start'>{data.id}</span>
                      <span className='text-start'>{data.title}</span>
                      <span className='text-center'>{data.price}</span>
                      <span className='text-center'>
                        <button
                          type='submit'
                          className=' bg-[#F5B449] hover:bg-gray-200  rounded-md shadow-xl shadow-gray-300 w-12 h-[1.5rem] mb-2 mx-2'
                        >
                          แก้ไข
                        </button>
                        <button
                          type='submit'
                          className=' bg-[#CE3434]  hover:bg-[#ED7072] rounded-md shadow-xl shadow-gray-300  w-12 h-[1.5rem] mb-2 mx-2 text-white'
                        >
                          ลบ
                        </button>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </fragment>
  );
}
