import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { vr, arrow_right, star } from '../assets'
import { navlinks } from '../constants'

const Icon = ({ name, icon, path, isActive, disabled, handleClick, styles }) => {
    return (
        <div className={`flex flex-row w-[190px] h-[61px] items-center p-2 ${isActive && isActive === name && "bg-[#B4AFF0] rounded-full border-b-8 border-solid border-black "} ${!disabled && "cursor-pointer"} ${styles} `} onClick={handleClick} >
            <img src={icon} className='w-1/2 h-1/2' />
            <p className={`font-manrope text-[20px] text-black/50 ${isActive && isActive === name && "!text-black font-bold"}`}>{name}</p>
        </div>
    )
}

const Sidebar = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState("home");

    return (
        <div className="flex flex-col w-[310px] h-full items-center py-10 gap-2 " >
            {navlinks.map((link) => (
                <Icon
                    key={link.name}
                    {...link}
                    isActive={isActive}
                handleClick={() => {
                    if (!link.disabled) {
                        setIsActive(link.name);
                        navigate(link.path);
                    }
                }}
                />
            ))}
            <div className="w-[63%] h-[226px] bg-[#D6E35E] rounded-[20px] mt-[40px] relative ">
                <img src={star} className="absolute top-[-35px] right-[-25px] " />
                <p className="font-manrope text-[26px] font-bold ml-[20px] ">TREND PRODUCTS</p>
                <img src={vr} className="absolute right-[17px] top-[75px] " />
                <div className="flex w-[33px] h-[33px] rounded-full bg-black absolute right-4 bottom-4 items-center justify-center " >
                    <img src={arrow_right} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
