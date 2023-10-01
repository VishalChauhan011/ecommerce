import React from 'react'
import { reward_headphone, coin } from '../assets'

const RewardContainer = () => {
  return (
    <div className='w-[296px] h-[229px] flex flex-col border border-black border-solid rounded-[10px] divide-y divide-solid divide-black'>
      <div className='flex flex-row  justify-center items-center h-[145px]'>
        <p className='font-manrope text-[26px] font-[700] leading-[27.43px] tracking-[1.56px] ml-[16px]'>Airpods Max</p>
        <img src={reward_headphone} className='h-[84px] w-[155px] justify-center mr-[14px]' alt='coin' />
      </div>

      <div className='flex flex-row items-center justify-between '>
        <div className='flex flex-row h-[32px] w-[79px] rounded-[20px] border border-solid bg-[#D6E35E] items-center justify-center my-[26px] ml-[16px] '>
          <p className='font-manrope text-[14px] font-[700] leading-[14.77px] '>20</p>
          <img src={coin} className='w-[24px] h-[18px] ' alt='coin ' />
        </div>

        <div className='cursor-pointer relative w-[102px] h-[34px] my-[26px] mr-[19px] '>
          <div className='flex w-[102px] h-[34px] bg-black relative right-[-6px] top-[-9px] z-10 rounded-[10px] items-center justify-center border-solid border-2 border-black cursor-pointer font-manrope overflow-hidden transition-right
                 transition-top duration-100 ease-in-out hover:translate-y-1 hover:translate-x-[-10px]'
            onClick={() => {}} >
            <p className="font-manrope text-[14px] font-[700] text-white">
              Claim
            </p>
          </div>
          <span className='h-[100%] w-[100%] bg-[#FF8080] border-2 border-black border-solid rounded-[8px] absolute left-0 top-0 box-border opacity-100 transition-opacity hover:duration-1000 hover:ease-linear ' ></span>
        </div>
      </div>
    </div>
  )
}

export default RewardContainer
