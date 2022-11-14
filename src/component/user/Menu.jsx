import React from "react";
import cardList from "../../api/data";

export default function Menu() {
  return (
    <fragment>
      <div className="flex align-center justify-center content-center">
        <img src="https://sv1.picz.in.th/images/2022/11/14/vMSOIn.png" alt="" />
      </div>
      <div className="container px-8">
        <div>
          <h3 className="text-4xl text-[#3C4048]">เมนู</h3>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {cardList.map((card) => (
            <div className="shadow-lg rounded-lg ">
              <div className="flex justify-center content-center align-center">
                <img
                  className="mt-3 rounded-lg w-[80%] h-[7rem] "
                  src={card.images}
                  alt=""
                />
              </div>

              <div className="p-4">
                <h5 className="text-xl text-[#3C4048]">{card.title}</h5>
                <h6 className="text-lg text-[#3C4048]">ราคา: {card.price}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </fragment>
  );
}
