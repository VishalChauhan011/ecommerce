import React from 'react'
import { brand_icon } from '../assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const handleLogin = (e) => {
    
        window.location.href = '/login';
      };
    return (
        

       
        <div className='bg-[#FFFFFF] flex flex-row py-[50px] h-[50px]  items-center '>
            <img src={brand_icon} className='ml-[130px] mr-[100px] '  alt=''/>
            <div className='items-center flex flex-row relative' >
                <input type='text' placeholder='Search...' className=' border-2 border-b-4 border-black border-solid w-[600px] h-[52px] pl-[30px] rounded-[20px] font-manrope ' />
                <div className='cursor-pointer relative w-[142px] h-[45px] ml-6 '>
                    <div className='flex w-[142px] h-[45px] bg-[#0E0E0E] relative left-[-7px] top-[-8px] z-10 rounded-[20px] items-center justify-center border-solid border-2 border-black cursor-pointer font-manrope overflow-hidden transition-left
                 transition-top duration-100 ease-in-out hover:translate-x-1 hover:translate-y-1 ' onClick={() => { }} >
                        <p className='text-[18px] text-center text-white font-manrope font-bold ' >Search</p>
                    </div>
                    <span className='h-[100%] w-[100%] bg-white border-2 border-black border-solid rounded-[18px] absolute left-0 top-0 box-border opacity-100 transition-opacity hover:duration-1000 hover:ease-linear ' ></span>
                </div>
            </div>
            <div className='cursor-pointer relative w-[142px] h-[45px] ml-[190px] '>
                <div className='flex w-[142px] h-[45px] bg-[#D6E35E] relative left-[-7px]
                 top-[-8px] z-10 rounded-[20px] items-center justify-center border-solid border-2 border-black cursor-pointer font-manrope overflow-hidden transition-left
                 transition-top duration-100 ease-in-out hover:translate-x-1 hover:translate-y-1 ' onClick={handleLogin} >
                    <p className='text-[18px] text-center text-[#0E0E0E] font-manrope font-bold '>Log in</p>
                </div>
                <span className='h-[100%] w-[100%] bg-black rounded-[18px] absolute left-0 top-0 box-border opacity-100 transition-opacity hover:duration-1000 hover:ease-linear ' ></span>
            </div>
        </div>
       
    )
}

export default Navbar

{/* <div className='flex w-[142px] h-[45px] bg-[#0E0E0E] rounded-[20px] ml-6 items-center justify-center cursor-pointer' >
                    <p className='text-[18px] text-center text-white font-manrope font-bold ' >Search</p>
                </div> */}
