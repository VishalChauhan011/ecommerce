import React from 'react'
import { brand_icon } from '../assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className='bg-[#FFFFFF] flex flex-row  h-[50px] py-[50px] items-center justify-evenly relative '>
            <img src={brand_icon} />
            <div className='items-center flex flex-row relative' >
                <input type='text' placeholder='Search...' className=' border w-[600px] h-[52px] rounded-[20px] font-manrope ' />
                <div className='flex w-[142px] h-[45px] bg-[#0E0E0E] rounded-[20px] ml-6 items-center justify-center hover:cursor-pointer' >
                    <p className='text-[18px] text-center text-white font-manrope font-bold ' >Search</p>
                </div>
                <div className='h-[45px] w-[142px] border border-black/50 border-t-transparent border-solid absolute bg-transparent rounded-3xl right-[-1px] top-[10px] ' ></div>
            </div>
            <div className='flex w-[142px] h-[45px] bg-[#D6E35E] rounded-[20px] items-center justify-center border-solid border-b-[7px]  border-l-[7px] border-black cursor-pointer transition-transform active:scale-95 mb-3  hover:border-2 mt-8 font-manrope ' >
                <p className='text-[18px] text-center text-[#0E0E0E] font-manrope font-bold '>Log in</p>
            </div>
        </div>
    )
}

export default Navbar
