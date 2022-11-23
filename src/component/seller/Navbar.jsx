import { React, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { GiCampCookingPot } from "react-icons/Gi";
import { BiTimer } from "react-icons/bi";
import { CgPlayListAdd } from "react-icons/Cg";
import { AiOutlineDelete } from "react-icons/Ai";
import { MdOutlineLogout } from "react-icons/Md";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    {
      title: "ออเดอร์",
      icon: <GiCampCookingPot />,
      Link: "/order",
    },
    {
      title: "ประวัติออเดอร์",
      icon: <BiTimer />,
      Link: "/history",
    },
    {
      title: "เพิ่มอาหาร",
      icon: <CgPlayListAdd />,
      Link: "/addProduct",
    },
    {
      title: "ลบอาหาร",
      icon: <AiOutlineDelete />,
      Link: "/deleteProduct",
    },
    {
      title: "ออกจากระบบ",
      icon: <MdOutlineLogout />,
      Link: "/login",
    },
  ];
  return (
    <fragment>
      {/* <div className={`flex visible xs:invisible`}> */}
      <aside className={`h-screen w-60 bg-[#AE2C26] shadow fixed `}>
        <div className="flex justify-center content-center align-center">
          <img
            className={`w-4/5 cursor-pointer block float-left duration-300`}
            src="https://cdn.discordapp.com/attachments/1038852761170739343/1043104384004919317/Posez_2.png"
            alt=""
          />
        </div>
        <ul className="mb-5">
          <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer hover:bg-[#8D201A] rounded-md mt-2 p-2 border-b ">
            <span className="text-2xl block duration-200">
              <BsPersonCircle />
            </span>
            <span
              className={`text-base font-medium flex-1
            `}
            >
              John Doe
            </span>
          </li>
        </ul>
        <ul className="pt-3">
          {Menus.map((menu, index) => (
            <>
              <Link to={`${menu.Link}`}>
                <li
                  key={index}
                  className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#8D201A] rounded-md mt-2 border-b"
                >
                  <span className="text-lg block">
                    {menu.icon ? menu.icon : <RiDashboardFill />}
                  </span>
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
