import { React } from 'react';
import cardList from '../../api/data';
import Select from 'react-select';
import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

//create xcard component
export default function xCard({ x }) {
  const options = ['small', 'medium', 'large', 'jumbo'];
  const [selectValue, setSelectValue] = useState('');

  console.log(x);

  const y = (event) => {
    setSelectValue(event.target.value);
  };

  const xx = () => {
    console.log(x.price);
    console.log(x.name);
    console.log(x);
  };

  return (
    <>
      <div className='shadow-lg rounded-lg border border-gray-100'>
        <div className='flex justify-center content-center align-center'>
          <img
            className='mt-3 rounded-lg w-[80%] h-[8rem]'
            src={x.image}
            alt=''
          />
        </div>
        <div className='pt-3 mb-0 grid grid-rows-2 text-center'>
          <h5 className='text-xl text-[#3C4048]'>{x.name}</h5>
          <h6 className='text-lg text-[#3C4048]'>ราคา: {x.price}</h6>
        </div>
        <div className='grid grid-cols-3 gap-1 counter'>
          <div className='flex justify-center content-center align-center'>
            <button className='' onClick={decrease}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='icon icon-tabler icon-tabler-circle-minus'
                width='30'
                height='30'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='#3C4048'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <circle cx='12' cy='12' r='9' />
                <line x1='9' y1='12' x2='15' y2='12' />
              </svg>
            </button>
          </div>

          <div class='py-1 border-2 border-neutral-100 shadow-inner rounded-lg flex justify-center content-center align-center'>
            <span className='text-[#3C4048] text-center'>{counter}</span>
          </div>

          <div className='flex justify-center content-center align-center p-1'>
            <button className='' onClick={increase}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='icon icon-tabler icon-tabler-circle-plus'
                width='30'
                height='30'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='#3C4048'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <circle cx='12' cy='12' r='9' />
                <line x1='9' y1='12' x2='15' y2='12' />
                <line x1='12' y1='9' x2='12' y2='15' />
              </svg>
            </button>
          </div>
        </div>
        <div className='mt-3 grid grid-rows justify-center content-center align-center mb-1'>
          <div className='w-full'>
            <span className=' text-sm text-[#3C4048]'>ตัวเลือกเพิ่มเติม</span>
            <div
              className={`grid grid-cols-1 w-56 rounded-md
                        `}
            >
              <select onChange={y}>
                <option>Size</option>
                {options.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className='px-6'>
          <label className='mt-2'>
            <span className=' text-sm font-medium text-[#3C4048]'>
              หมายเหตุ
            </span>
            <input
              type='text'
              name='text'
              className=' px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-[#3C4048]'
              placeholder='เผ็ด/ไม่เผ็ด'
            />
          </label>
        </div>
        <div className=' flex justify-center content-center align-center text-sm'>
          <button
            type='submit'
            className=' m-5 bg-[#ED7072] hover:bg-[#CE3434] rounded-md shadow-md shadow-gray-300 mb-3 w-24 h-[2rem] text-[#3C4048]'
            onClick={xx}
          >
            เพิ่มลงรายการ
          </button>
        </div>
      </div>
    </>
  );
}
