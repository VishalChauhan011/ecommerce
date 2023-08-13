import React from 'react';
import { favourite, rating_star, headphone } from '../assets';
import { useNavigate } from "react-router-dom";

const ShoppingCard = ({ image, name, price, description, rating, reviews }) => {
  const ratingStars = Array.from({ length: rating }, (_, index) => (
    <img key={index} src={rating_star} alt={`Star ${index}`} className='mr-1' />
  ));

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/product', {
      state: {
        image,
        name,
        price,
        description,
        rating,
        reviews
      }
    });
  };

  return (
    <div className='relative flex flex-col w-[296px] h-[364px] rounded-[10px] border border-solid border-black px-4 py-6 cursor-pointer mb-[45px] '>
      <div className='flex w-[48px] h-[48px] rounded-full absolute top-3 left-3 items-center justify-center'>
        <img src={favourite} className='w-1/2 h-1/2 object-contain' alt="Favourite" />
      </div>
      <img src={image} className='w-full h-[47%]' alt="Product" />
      <div className='flex flex-row items-center justify-between mt-6'>
        <p className='font-manrope text-[16px] font-[700] tracking-[1.6px] leading-[23px]'>{name}</p>
        <p className='font-manrope text-black/70 text-[16px] font-[700] tracking-[1.6px] leading-[23px]'>{price}</p>
      </div>
      <p className='font-manrope text-black/70 text-[12px] font-[700] tracking-[1px] leading-[14px] mt-[13px]'>{description}</p>
      <div className='flex flex-row items-center my-[10px]'>
        {ratingStars}
        <p className='font-manrope text-[12px] text-black/70 tracking-[1.2px] leading-[17px]'>({reviews})</p>
      </div>
      <div className='flex w-[132px] h-[45px] bg-black rounded-[14px] items-center justify-center border-[#808080] border-solid border-b-[6px] border-l-[6px] mt-[15px] ' onClick={handleClick} >
        <p className='font-manrope text-[16px] font-[700] text-white'>Shop Now</p>
      </div>
    </div>
  );
}

export default ShoppingCard;
