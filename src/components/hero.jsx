"use client"

import Select from "react-select";
import Image from "next/image"
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const options = [
    { value: "tashkent", label: "Ташкент" },
    { value: "samarkand", label: "Самарканд" },
    { value: "bukhara", label: "Бухара" },
  ];

function Hero() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
  return (
    <section className="py-[68px] px-5 md:px-10">
        <div className="max-w-[1240px] mx-auto" >
        <h1 className="font-[700] leading-[126%] text-[42px] text-[#202126] mb-[18px]">Путешествуйте вместе с SAYOHATCHI</h1>
        <p className="font-[400] leading-[128%] text-[20px] text-[#202126] mb-8">Небольшой подзаголовок, если есть в две строки максимум</p>
            <div className="bg-[#164C96] rounded-[8px] py-8 px-15">
                <form className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-2 ">
                    <label htmlFor="location" className="flex col-span-2 gap-2 items-center py-[15px] px-[18px] bg-[#fff] border-[#CACACA] border-[1px] rounded-[8px] h-[55px]">
                        <Image src={'/main/Location.svg'} alt="location" width={15} height={18}/>
                        <Select
                            options={options}
                            value={selectedOption}
                            onChange={setSelectedOption}
                            placeholder="Куда?"
                            isClearable
                            classNamePrefix="react-select"
                            className="pl-2 border-none outline-none"
                        />
                    </label>
                    <label htmlFor="date" className="flex col-span-2 gap-2 items-center py-[15px] px-[18px] bg-[#fff] border-[#CACACA] border-[1px] rounded-[8px]">
                        <Image src={'/main/data.svg'} alt="location" width={15} height={18}/>
                        <DatePicker
                            selectsRange
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(update) => {
                            setStartDate(update[0]);
                            setEndDate(update[1]);
                            }}
                            id="date"
                            className="outline-none p-[0] m-0 w-full"
                            isClearable={true}
                            placeholderText="Дата заезда - Дата съезда"
                        />
                    </label>
                    <label htmlFor="user" className="flex col-span-2 gap-2 items-center py-[15px] px-[18px] bg-[#fff] border-[#CACACA] border-[1px] rounded-[8px]">
                        <Image src={'/main/user.svg'} alt="location" width={15} height={18}/>
                        <input type="text" placeholder="Номер - Гостей" className="text-[#65666B] font-[400] leading-[126%] text-[16px] outline-none" />
                    </label>
                    <button type="submit" className="py-[14px] px-12 rounded-[8px] cursor-pointer font-[600] text-[#fff] text-[16px] leading-[126%] bg-[#2F74D0]">Искать</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Hero