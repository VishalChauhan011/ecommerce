import React from 'react'
import { coin } from '../assets'
import RewardContainer from '../components/RewardContainer'

const Rewards = () => {
  return (
    <div className='flex-1 flex-col divide-y-2 divide-solid divide-black'>
      <div className='flex flex-row px-[104px] py-6 justify-between'>
        <div className=' flex-col'>
          <p className='font-manrope text-[40px] font-[600] tracking-[.15rem] '>Store</p>
          <p className='font-manrope text-[16px] font-[600] leading-[16.8px] tracking-[1.12px] '>
            <span className='block'>Shop in our store or redeem our products for free </span>
            <span className='block'>by using Coins.</span>
          </p>
        </div>

        <div className='w-[252px] h-[74px] flex-col rounded-[30px] bg-[#FDD151]  border-b-8 border-l-2 border-t-2 border-r-2 border-solid
          border-black  justify-center items-center py-1 '>
          <p className='font-manrope text-[20px] font-[400] leading-[25.5px] text-center '>Your Coins</p>
          <div className='flex flex-row justify-center items-center'>
            <p className='font-manrope text-[36px] font-[400] leading-[45.98px] text-center'>540</p>
            <img src={coin} className='w-[53px] h-[39px]' alt='coin'/>
          </div>
        </div>
      </div>
      <div className='px-[104px] py-16 flex flex-wrap gap-[22px] items-center justify-center'>

        <RewardContainer />
        <RewardContainer />
        <RewardContainer />
        <RewardContainer />
        <RewardContainer />
        <RewardContainer />
        <RewardContainer />
      </div>
    </div>
  )
}

export default Rewards
