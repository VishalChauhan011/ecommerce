import React from "react";
import {
  filter_icon,
  dropdown,
  headphone,
  space_grey,
  pink,
  green,
  silver,
  skyblue,
} from "../assets";
import ShoppingCard from "../components/ShoppingCard";
import { dummyData } from "../constants";

const Home = () => {
  return (
    <div className=" flex-1 flex-col  divide-y-2 divide-solid divide-black ">
      <div className="flex flex-row px-[104px] py-6 items-center justify-between">
        <p className="font-manrope text-[40px] font-[600]  ">
          <span className="block">Our</span>
          <span className="block">Products</span>
        </p>
        <div className="flex flex-row w-[399px] h-[52px] divide-x-2 divide-solid divide-black rounded-full border-2 border-b-4 border-solid border-black items-center justify-evenly">
          <div className="flex flex-row items-center ">
            <p className="font-manrope text-[20px] font-[400] text-center">
              All Filters
            </p>
            <img src={filter_icon} className="ml-[10px] " />
          </div>
          <div className="flex flex-row items center ">
            <p className="font-manrope text-[20px] font-[400] ml-[63px] text-center">
              Sort
            </p>
            <img src={dropdown} className="ml-[10px] " />
          </div>
        </div>
      </div>
      <div className="px-[103px] py-16 flex flex-wrap gap-[21px] items-center justify-center">
        {dummyData.map((item) => (
          <ShoppingCard
            key={item.key}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            description={item.description}
            rating={item.rating}
            reviews={item.reviews}
            colors={item.colors}
            moreImages={item.moreImages}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
