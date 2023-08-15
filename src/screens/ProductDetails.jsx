import React from 'react'
import { useLocation } from "react-router-dom";
import { rating_star } from '../assets';
import ProductDetailsCorousel from '../components/ProductDetailsCorousel';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
    
    const dispatch = useDispatch();
    const location = useLocation();
    const { state } = location;
    const { id, name, price, description, rating, reviews } = state;

    const ratingStars = Array.from({ length: rating }, (_, index) => (
        <img key={index} src={rating_star} alt={`Star ${index}`} className='mr-1 mt-2' />
    ));

    const handleAddToCart = () => {
        dispatch(addToCart({ id, name , price , description , reviews}));
    };
    
     console.log(id);
     console.log("Received state:", location.state);

     const notify = () => {
        toast.success("Success. Check your cart!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return (
        <>
        <ToastContainer />
        <div className='flex flex-row '>
            <div>
                <ProductDetailsCorousel />
            </div>

            <div className='flex flex-col'>
                <p className='font-manrope text-[36px] font-[800] text-black leading-[52px] tracking-[3.6px] mt-[54px] '>{name}</p>
                <p className='font-manrope text-[16px] font-[600] text-black/50 leading-[23px] tracking-[1.52px] ' >{description}</p>
                <div className='flex flex-row items-center'>
                    {ratingStars}
                    <p className='font-manrope text-[12px] text-black/70 tracking-[1.2px] leading-[17px]'>({reviews})</p>
                </div>
                <div className='flex flex-col w-[400px] h-[66px] rounded-[10px] border border-solid border-black my-[28px] justify-center '>
                    <p className='font-manrope text-[20px] font-[700] leading-[29px] tracking-[2px] ml-[23px]  '>MRP: &#8377;{price}</p>
                    <p className='font-manrope text-[10px] font-[700] leading-[14.5px] tracking-[1px] ml-[23px] '>(Inc. all taxes)</p>
                </div>
                <p className='font-manrope text-[20px] font-[600] leading-[29px] tracking-[2px] mb-[20px] '>Colour</p>
                <div className='flex flex-col w-[190px] h-[93px] rounded-[10px] border border-black/50 border-solid items-center justify-center '>
                    <div className='w-[29px] h-[29px] rounded-full bg-gray-400 mb-[8px] '></div>
                    <p className='font-manrope text-[12px] font-[600] leading-[17.4px] tracking-[1.2px] text-black '>Space Grey</p>
                </div>

                <div>
                    <button className='w-[190px] h-[52px] rounded-[10px] bg-black/90 text-white
                     font-manrope text-[16px] font-[700] leading-[23px]
                      tracking-[1.6px] mt-[20px] cursor-pointer ' onClick={() => {
                        handleAddToCart();
                        notify();
                      }}
                        >Add to Cart</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetails
