import { React } from 'react';
import cardList from '../../api/data';
import Select from 'react-select';
import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

export default function List() {
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function getOrder() {
      try {
        const order = await axios.get(`http://localhost:8000/order`);
        setOrder(order.data);
      } catch (e) {
        console.error(e);
      }
    }
    getOrder();
  }, []);

  const x = order.map((a) => a.price);

  console.log(x);

  const sum = x.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  //create function to summarize the order price and quantity and size of each item

  return (
    <Fragment>
      <div>
        <div className='mb-4 mt-12 flex justify-center content-center align-center'>
          <img className='w-1/5' src='src\assets\PosezFinal.png' alt='' />
        </div>

        <div className='grid grid-rows justify-center content-center align-center'>
          <div>
            <h3 className='text-5xl mb-5 text-[#3C4048] text-center'>
              รายการอาหาร
            </h3>
            <div className='grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1'>
              <div className='rounded-lg bg-[#FCFBF1] w-full h-full shadow-xl shadow-gray-300'>
                <div className='px-10 py-5 text-xl text-[#3C4048]'>
                  <div className='grid grid-cols-5 gap-4 border-b-2'>
                    <span className='text-start'>รายการ</span>
                    <span className='text-center'>จำนวน</span>
                    <span className='text-center'>ตัวเลือก</span>
                    <span className='text-center'>ราคา</span>
                    <span className='text-center'>หมายเหตุ</span>
                  </div>
                </div>
                {order.map((data) => (
                  <div className='px-10 text-[#3C4048] mt-1'>
                    <div className='grid grid-cols-5 gap-4 mb-2'>
                      <sapn className='text-start'>{data.name}</sapn>
                      <span className='text-center'>{data.quantity}</span>
                      <span className='text-center'>{data.size}</span>
                      <sapn className='text-center'>{data.price}</sapn>
                      <span className='text-center'>-</span>
                    </div>
                  </div>
                ))}
                <div className='grid grid-cols-2 justify-center content-center align-center mx-3 text-xl text-[#3C4048] border-t-2'>
                  <sapn className='text-end underline underline-offset-2 m-2'>
                    รวม:{' '}
                  </sapn>
                  <span className='text-start m-2'>
                    {x.length > 0 ? sum : 0}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-3 flex  justify-center items-center'>
            <button
              type='submit'
              className='m-3 bg-[#ED7072] hover:bg-[#EBA78A] rounded-md shadow-xl shadow-gray-300 mb-3 w-32 h-[2rem] '
            >
              ย้อนกลับ
            </button>
            <button
              type='submit'
              className='m-3 bg-[#F5B449] hover:bg-[#CE3434] rounded-md shadow-xl shadow-gray-300 mb-3 w-32 h-[2rem]'
            >
              ยืนยันออเดอร์
            </button>
          <div className="mt-3 flex  justify-center items-center">
            <Link to="/menu">
              <button
                type="submit"
                className="m-3 bg-[#ED7072] hover:bg-[#EBA78A] rounded-md shadow-xl shadow-gray-300 mb-3 w-32 h-[2rem] "
              >
                ย้อนกลับ
              </button>
            </Link>

            <Link to="/wait">
              <button
                type="submit"
                className="m-3 bg-[#F5B449] hover:bg-[#CE3434] rounded-md shadow-xl shadow-gray-300 mb-3 w-32 h-[2rem]"
              >
                ยืนยันออเดอร์
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
