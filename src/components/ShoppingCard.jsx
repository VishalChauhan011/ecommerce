import React from "react";
import { favourite, rating_star, headphone } from "../assets";
import { useNavigate } from "react-router-dom";

const ShoppingCard = ({
  id,
  image,
  name,
  price,
  description,
  rating,
  reviews,
  colors,
}) => {
  const ratingStars = Array.from({ length: rating }, (_, index) => (
    <img key={index} src={rating_star} alt={`Star ${index}`} className="mr-1" />
  ));

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products", {
      state: {
        id,
        image,
        name,
        price,
        description,
        rating,
        reviews,
        colors: JSON.stringify(colors),
      },
    });
  };

  return (
    <div className="relative flex flex-col w-[296px] h-[364px] rounded-[10px] border-2 border-solid border-black px-4 py-4 cursor-pointer mb-[45px] ">
      <div className="flex w-[48px] h-[48px] rounded-full absolute top-3 left-3 items-center justify-center">
        <img
          src={favourite}
          className="w-1/2 h-1/2 object-contain"
          alt="Favourite"
        />
      </div>
      <img src={image} className="w-full h-[47%]" alt="Product" />
      <div className="flex flex-row items-center justify-between mt-8">
        <p className="font-manrope text-[16px] font-[700] tracking-[1.6px] leading-[23px]">
          {name}
        </p>
        <p className="font-manrope text-black/70 text-[16px] font-[700] tracking-[1.6px] leading-[23px]">
          &#8377;{price}
        </p>
      </div>
      <p className="font-manrope text-black/70 text-[12px] font-[700] tracking-[1px] leading-[14px] mt-[13px]">
        {description}
      </p>
      <div className="flex flex-row items-center my-[10px]">
        {ratingStars}
        <p className="font-manrope text-[12px] text-black/70 tracking-[1.2px] leading-[17px]">
          ({reviews})
        </p>
      </div>
      <div className='cursor-pointer relative w-[116px] h-[42px] mt-[20px] ml-[8px] '>
        <div className='flex w-[116px] h-[42px] bg-black relative left-[-8px] top-[-8px] z-10 rounded-[10px] items-center justify-center border-solid border-2 border-black cursor-pointer font-manrope overflow-hidden transition-left
                 transition-top duration-100 ease-in-out hover:translate-x-1 hover:translate-y-1 ' >
                    <p className="font-manrope text-[15px] font-[700] text-white">
            Shop Now
          </p> 
        </div>
        <span className='h-[100%] w-[100%] bg-white border-2 border-black border-solid rounded-[8px] absolute left-0 top-0 box-border opacity-100 transition-opacity hover:duration-1000 hover:ease-linear ' ></span>
      </div>
    </div>
  );
};

export default ShoppingCard;

{/* <p className="font-manrope text-[16px] font-[700] text-white">
            Shop Now
          </p> */}
