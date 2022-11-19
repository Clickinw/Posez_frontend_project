import React, { useState, Component } from "react";
import Select from "react-select";

export default function Select1() {
  const options = [
    { value: "1", label: "ไข่ดาว" },
    { value: "2", label: "ไข่เจียว" },
    { value: "3", label: "ไข่ต้ม" },
    { value: "4", label: "เพิ่มหมู" },
    { value: "5", label: "เพิ่มเนื้อ" },
  ];
  const [selectedOptions, setSelectedOptions] = useState(null);

  const setHandle = (e) => {
    setSelectedOptions(
      Array.isArray(e) ? e.map((options) => options.label) : []
    );
  };

  return (
    <div className="mx-auto container py-8">
      <div className="flex flex-wrap items-center lg:justify-between justify-center">
        <div className=" px-2	">
          <span className="text-base text-[#3C4048]">ตัวเลือกเพิ่มเติม</span>
          <Select options={options} onChange={setHandle} isMulti />
        </div>
      </div>
    </div>
  );
}
