import { React } from "react";
import cardList from "../../api/data";
import Select from "react-select";
import { Fragment, useState, useEffect } from "react";
import axios from "axios";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [selectValue, setSelectValue] = useState("");

  const [value, setValue] = useState(0);

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

  console.log(menu);

  const handleChange2 = (e) => {
    console.log(value);
  };

  const options = ["small", "medium", "large", "jumbo"];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption.value);
  };

  //create function onclick to send data to backend
  const onClick = async (e, price, name) => {
    console.log(selectValue);
    try {
      axios.post(`http://localhost:8000/order`, {
        name: name,
        price: price[0],
        size: selectValue,
        quantity: value,
      });
      x;
    } catch (e) {
      console.error(e);
    }
    setSelectValue("");
  };

  const x = (event) => {
    setSelectValue(event.target.value);
  };

  const xx = (event) => {
    setValue(event.target.value);
  };

  return (
    <Fragment>
      <div>
        <div className="mb-4 mt-12 flex justify-center content-center align-center ">
          <img className="w-1/5" src="src\assets\PosezFinal.png" alt="" />
        </div>
        <div className="grid grid-rows justify-center content-center align-center">
          <div>
            <h3 className="text-5xl mb-8 mt-5 text-[#3C4048] text-center">
              เมนู
            </h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
              {menu.map((card) => (
                <div className="shadow-lg rounded-lg border border-gray-100">
                  <div className="flex justify-center content-center align-center">
                    <img
                      className="mt-3 rounded-lg w-[80%] h-[8rem]"
                      src={card.image}
                      alt=""
                    />
                  </div>
                  <div className="pt-3 mb-0 grid grid-rows-2 text-center">
                    <h5 className="text-xl text-[#3C4048]">{card.name}</h5>
                    <h6 className="text-lg text-[#3C4048]">
                      ราคา: {card.price}
                    </h6>
                  </div>
                  <div className="grid grid-cols gap-1 mt-1">
                    <div class="flex justify-center content-center align-center">
                      <span className="text-[#3C4048] text-center">
                        <input
                          min={0}
                          onChange={xx}
                          type="number"
                          class="
        form-control
        block
        w-20
        px-3
        py-1.5
        text-base
        text-[#3C4048]
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-md
        transition
        ease-in-out
        m-0
        focus:text-[#3C4048] focus:bg-white focus:border-blue-600 focus:outline-none
      "
                          id="quantity"
                          placeholder="Number input"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-rows justify-center content-center align-center mb-1">
                    <div className="w-full">
                      <span className=" text-sm text-[#3C4048]">
                        ตัวเลือกเพิ่มเติม
                      </span>
                      <div
                        className={`grid grid-cols-1 w-56 rounded-md
                        `}
                      >
                        <select
                          className="border-2 rounded-md text-[#3C4048]"
                          onChange={x}
                        >
                          <option value="">เลือก size</option>
                          {options.map((option) => (
                            <option value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="px-6">
                    <label className="mt-2">
                      <span className=" text-sm font-medium text-[#3C4048]">
                        หมายเหตุ
                      </span>
                      <input
                        type="text"
                        name="text"
                        className=" px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-[#3C4048]"
                        placeholder="เผ็ด/ไม่เผ็ด"
                      />
                    </label>
                  </div>
                  <div className=" flex justify-center content-center align-center text-sm">
                    <button
                      type="submit"
                      className=" m-5 bg-[#ED7072] hover:bg-[#CE3434] rounded-md shadow-md shadow-gray-300 mb-3 w-24 h-[2rem] text-[#3C4048]"
                      onClick={(e) => onClick(e, card.price, card.name)}
                    >
                      เพิ่มลงรายการ
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className=" flex justify-center content-center align-center mt-3">
              <button
                type="submit"
                className=" m-5 bg-[#F5B449] hover:bg-[#CE3434] rounded-md shadow-xl shadow-gray-300 mb-3 w-32 h-[3rem] text-[#3C4048] text-3xl text-center"
              >
                ส่ง
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
