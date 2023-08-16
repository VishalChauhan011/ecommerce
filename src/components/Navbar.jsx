import React from 'react'
import { brand_icon } from '../assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className='bg-[#FFFFFF] flex flex-row py-[50px] h-[50px] items-center relative '>
            <img src={brand_icon} className='ml-[130px] mr-[100px] ' />
            <div className='items-center flex flex-row relative' >
                <input type='text' placeholder='Search...' className=' border w-[600px] h-[52px] rounded-[20px] font-manrope ' />
                <div className='flex w-[142px] h-[45px] bg-[#0E0E0E] rounded-[20px] ml-6 items-center justify-center hover:cursor-pointer' >
                    <p className='text-[18px] text-center text-white font-manrope font-bold ' >Search</p>
                </div>
                <div className='h-[45px] w-[142px] border border-black/50 border-t-transparent border-solid absolute bg-transparent rounded-3xl right-[-1px] top-[10px] ' ></div>
            </div>
            <div className='cursor-pointer relative w-[142px] h-[45px] ml-[190px] '>
                <div className='flex w-[142px] h-[45px] bg-[#D6E35E] relative left-[-7px] top-[-8px] z-10 rounded-[20px] items-center justify-center border-solid border-2 border-black cursor-pointer font-manrope overflow-hidden transition-left
                 transition-top duration-100 ease-in-out hover:translate-x-1 hover:translate-y-1 ' >
                    <p className='text-[18px] text-center text-[#0E0E0E] font-manrope font-bold '>Log in</p>
                </div>
                <span className='h-[100%] w-[100%] bg-black rounded-[18px] absolute left-0 top-0 box-border opacity-100 transition-opacity hover:duration-1000 hover:ease-linear ' ></span>
            </div>
        </div>
    )
}

export default Navbar
