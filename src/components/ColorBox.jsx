import React from 'react'
import { space_grey } from '../assets'

const ColorBox = ({name, img}) => {
    return (
        <div className='flex flex-col w-[190px] h-[93px] rounded-[10px] border border-black/50 border-solid items-center justify-center '>
            <img src={img} className='w-[29px] h-[29px] mb-[8px] ' />
            <p className='font-manrope text-[12px] font-[600] leading-[17.4px] tracking-[1.2px] text-black '>{name}</p>
        </div>
    )
}

export default ColorBox
