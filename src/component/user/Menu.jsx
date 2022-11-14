import React from 'react';
import cardList from '../../api/data';

export default function Menu() {
  return (
    <fragment>
      <div className='mb-4 bg-none mt-10'>
        <img src='src\assets\PosezFinal.png' alt='' />
      </div>
      <div className='container mx-auto py-36 px-8'>
        <div>
          <h3 className='text-4xl text-[#3C4048]'>เมนู</h3>
        </div>
        <div className='grid lg:grid-cols-3 gap-6'>
          {cardList.map((card) => (
            <div className='shadow-lg rounded-lg'>
              <img className='rounded-t-lg' src='{card.images}' alt='' />
              <div className='p-5'>
                <h5 className='text-xl text-[#3C4048]'>{card.title}</h5>
                <h6 className='text-lg text-[#3C4048]'>ราคา: {card.price}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </fragment>
  );
}
