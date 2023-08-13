import React from 'react'
import { useLocation } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { rating_star } from '../assets';

const ProductDetails = () => {
    const location = useLocation();
    const { state } = location;
    const { image, name, price, description, rating, reviews } = state;

    const ratingStars = Array.from({ length: rating }, (_, index) => (
        <img key={index} src={rating_star} alt={`Star ${index}`} className='mr-1' />
    ));

    if (!state) {
        // Handle if the state is not passed correctly
        return <p>No product data found.</p>;
    }


    return (
        <div className='flex flex-row '>
            <div>
            </div>
            <div className='flex flex-col'>
                <p className='font-manrope text-[36px] font-[800] text-black leading-[52px] tracking-[3.6px] '>{name}</p>
                <p className='font-manrope text-[16px] font-[600] text-black/50 leading-[23px] tracking-[1.52px] mt-[-35px]' >{description}</p>
                <div className='flex flex-row items-center mt-[-20px]'>
                    {ratingStars}
                    <p className='font-manrope text-[12px] text-black/70 tracking-[1.2px] leading-[17px]'>({reviews})</p>
                </div>
                <div className='flex flex-col w-[400px] h-[66px] rounded-[10px] border border-solid border-black my-[28px] justify-center '>
                    <p className='font-manrope text-[20px] font-[700] leading-[29px] tracking-[2px] ml-[23px] '>MRP: ₹{price}</p>
                    <p className='font-manrope text-[10px] font-[700] leading-[14.5px] tracking-[1px] ml-[23px]  '>(Inc. all taxes)</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
