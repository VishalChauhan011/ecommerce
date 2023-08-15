import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { vr, arrow_right, star } from "../assets";
import { navlinks } from "../constants";

const Icon = ({
  name,
  icon,
  path,
  isActive,
  disabled,
  handleClick,
  styles,
}) => {
  return (
    <div
      className={`flex flex-row w-[190px] h-[61px] items-center p-2 ${
        isActive &&
        isActive === name &&
        "bg-[#B4AFF0] rounded-full border-b-8 border-solid border-black "
      } ${!disabled && "cursor-pointer"} ${styles} `}
      onClick={handleClick}
    >
      <img src={icon} className="w-1/2 h-1/2" />
      <p
        className={`font-manrope text-[20px] text-black/50 ${
          isActive && isActive === name && "!text-black font-bold"
        }`}
      >
        {name}
      </p>
    </div>
  );
};

const Sidebar = () => {
  const navigate = useNavigate();

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_ACTIVE":
        return action.payload;
      default:
        return state;
    }
  };
  const [isActive, dispatch] = useReducer(reducer, "home");
  return (
    <div className="flex flex-col ml-[100px] h-full items-center  pr-[30px] gap-2 ">
      <div className="flex flex-col pt-[56px]">
        {navlinks.map((link) => (
          <Icon
            key={link.name}
            {...link}
            isActive={isActive}
            handleClick={() => {
              if (!link.disabled) {
                dispatch({ type: "SET_ACTIVE", payload: link.name });
                navigate(link.path);
              }
            }}
          />
        ))}
      </div>
      <div className="w-[190px] h-[226px] bg-[#D6E35E] rounded-[20px] mt-[40px] relative ">
        <img src={star} className="absolute top-[-50px] right-[-30px] " />
        <p className="font-manrope text-[26px] font-bold ml-[20px] ">
          TREND PRODUCTS
        </p>
        <img src={vr} className="absolute right-[17px] top-[75px] " />
        <div className="flex w-[33px] h-[33px] rounded-full bg-black absolute right-4 bottom-4 items-center justify-center ">
          <img src={arrow_right} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
