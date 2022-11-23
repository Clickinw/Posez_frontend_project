import { React, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    {
      title: 'ออเดอร์',

      Link: '/order',
    },
    {
      title: 'ประวัติออเดอร์',
      Link: '/history',
    },
    {
      title: 'เพิ่มอาหาร',
      Link: '/addProduct',
    },
    {
      title: 'ลบอาหาร',
      Link: '/deleteProduct',
    },
    {
      title: 'ออกจากระบบ',
      Link: '/login',
    },
  ];
  return (
    <fragment>
      {/* <div className={`flex visible xs:invisible`}> */}
      <aside className={`h-screen w-60 bg-[#AE2C26] shadow fixed `}>
        <div className='flex justify-center content-center align-center'>
          <img
            className={`w-4/5 cursor-pointer block float-left duration-300`}
            src='https://cdn.discordapp.com/attachments/1038852761170739343/1043104384004919317/Posez_2.png'
            alt=''
          />
        </div>
        <ul className='mb-5'>
          <li className='text-white text-sm flex items-center gap-x-4 cursor-pointer hover:bg-[#8D201A] rounded-md mt-2 p-2 border-b '>
            <span
              className={`text-base font-medium flex-1
            `}
            >
              John Doe
            </span>
          </li>
        </ul>
        <ul className='pt-3'>
          {Menus.map((menu, index) => (
            <>
              <Link to={`${menu.Link}`}>
                <li
                  key={index}
                  className='text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#8D201A] rounded-md mt-2 border-b'
                >
                  <span className={`text-base font-medium flex-1`}>
                    {menu.title}
                  </span>
                </li>
              </Link>
            </>
          ))}
        </ul>
      </aside>
      {/* </div> */}
    </fragment>
  );
}
