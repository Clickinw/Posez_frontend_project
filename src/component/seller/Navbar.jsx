import { React, useState } from "react";
import { BsArrowLeftShort, BsPersonCircle } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { GiCampCookingPot } from "react-icons/Gi";
import { BiTimer } from "react-icons/bi";
import { CgPlayListAdd } from "react-icons/Cg";
import { AiOutlineDelete } from "react-icons/Ai";
import { MdOutlineLogout } from "react-icons/Md";

export default function Navbar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "ออเดอร์", icon: <GiCampCookingPot /> },
    { title: "ประวัติออเดอร์", icon: <BiTimer /> },
    { title: "เพิ่มอาหาร", icon: <CgPlayListAdd /> },
    { title: "ลบอาหาร", icon: <AiOutlineDelete /> },
    { title: "ออกจากระบบ", icon: <MdOutlineLogout /> },
  ];
  return (
    <fragment>
      <div className="flex">
        <div
          className={`h-screen  bg-[#AE2C26] shadow 
          ${open ? "w-60" : "w-20"} duration-300 relative`}
        >
          <BsArrowLeftShort
            className={`bg-white mt-2 text-[#3C4048] text-3xl rounded-full absolute -right-3 top-9 border border-[#AE2C26] cursor-pointer ${
              open && "rotate-180"
            } `}
            onClick={() => setOpen(!open)}
          />
          <div className="flex justify-center content-center align-center">
            <img
              className={`w-[80%] cursor-pointer block float-left duration-200`}
              src="https://cdn.discordapp.com/attachments/1038852761170739343/1043104384004919317/Posez_2.png"
              alt=""
            />
          </div>
          <ul className="">
            <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#8D201A] rounded-md mt-2 mr-4 border-b">
              <span className="text-2xl block duration-200">
                <BsPersonCircle />
              </span>
              <span
                className={`text-base font-medium flex-1 duration-200 ${
                  !open && "hidden"
                }`}
              >
                John Doe
              </span>
            </li>
          </ul>
          <ul className="pt-3">
            {Menus.map((menu, index) => (
              <>
                <li
                  key={index}
                  className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#8D201A] rounded-md mt-2 mr-4 border-b"
                >
                  <span className="text-2xl block duration-200">
                    {menu.icon ? menu.icon : <RiDashboardFill />}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 duration-200 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </fragment>
  );
}
