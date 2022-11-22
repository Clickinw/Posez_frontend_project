import { React } from 'react';
import cardList from '../../api/data';
import Select from 'react-select';
import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

export default function Menu() {
  const [counter, setCounter] = useState(0);

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function getmenu() {
      try {
        const menu = await axios.get(`http://localhost:8000/menu`);
        setMenu(menu.data);
      } catch (e) {
        console.error(e);
      }
    }
    getmenu();
  }, []);

  const [selectedOption, setSelectedOption] = useState(null);

  console.log(menu);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  const options = [
    { value: 'small', label: 'เล็ก' },
    { value: 'medium', label: 'กลาง' },
    { value: 'large', label: 'ใหญ่' },
    { value: 'jumbo', label: 'จัมโบ้' },
    ,
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  //create function onclick to send data to backend
  const onClick = async (e) => {
    e.preventDefault();
    const newMenu = {
      name: e.target.name,
      price: e.target.price,
      size: selectedOption.value,
      image: e.target.image,
    };
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = JSON.stringify(newMenu);
      const res = await axios.post('/menu', body, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <fragment>
      <div>
        <div className='mb-4 mt-12 flex justify-center content-center align-center '>
          <img className='w-1/5' src='src\assets\PosezFinal.png' alt='' />
        </div>
        <div className='grid grid-rows justify-center content-center align-center'>
          <div>
            <h3 className='text-5xl mb-8 mt-5 text-[#3C4048] text-center'>
              เมนู
            </h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
              {menu.map((card) => (
                <div className='shadow-lg rounded-lg border border-gray-100'>
                  <div className='flex justify-center content-center align-center'>
                    <img
                      className='mt-3 rounded-lg w-[80%] h-[8rem]'
                      src={card.image}
                      alt=''
                    />
                  </div>
                  <div className='pt-3 mb-0 grid grid-rows-2 text-center'>
                    <h5 className='text-xl text-[#3C4048]'>{card.name}</h5>
                    <h6 className='text-lg text-[#3C4048]'>
                      ราคา: {card.price}
                    </h6>
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
                      <span className='text-[#3C4048] text-center'>
                        {counter}
                      </span>
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
                      <span className=' text-sm text-[#3C4048]'>
                        ตัวเลือกเพิ่มเติม
                      </span>
                      <div
                        className={`grid grid-cols-1 w-56 rounded-md
                        `}
                      >
                        <Select
                          defaultValue={[options[3]]}
                          name='options'
                          options={options}
                          className={`w-full text-[#3C4048]`}
                        />
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
                      onClick={onClick}
                    >
                      เพิ่มลงรายการ
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className=' flex justify-center content-center align-center mt-3'>
              <button
                type='submit'
                className=' m-5 bg-[#F5B449] hover:bg-[#CE3434] rounded-md shadow-xl shadow-gray-300 mb-3 w-32 h-[3rem] text-[#3C4048] text-3xl text-center'
              >
                ส่ง
              </button>
            </div>
          </div>
        </div>
      </div>
    </fragment>
  );
}
