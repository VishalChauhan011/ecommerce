import React from 'react';
import deep from '../assets/deep.png';
import remove from '../assets/remove.svg';
import ship from '../assets/ship.svg';
import { useSelector, useDispatch } from "react-redux";
import { updateCart, removeFromCart  } from "../store/cartSlice";


const CartItems = ({item}) => {

    const dispatch = useDispatch();
      console.log(item);
    const quantityOptions = [1, 2, 3, 4, 5];
  return (
    <div className='flex justify-center'>
      <div className='flex w-[819px] h-[204px] rounded-[10px]
       border border-solid border-black my-[20px] hover:border-r-2 hover:border-b-2'>
       
          <img src={item.photos[0].url} alt="Product" className='w-[190px] h-[161px] p-5 '  />
        <div className="flex flex-col pt-5 pl-3 font-manrope ">
            <div className='text-[24px] font-bold'>
            <p>{item.name}</p>
            </div>
            <div className='text-[#808080] tracking-[0.0875rem] text-[14px] font-bold'>
                <p>{item.description}</p>
            </div>
            <div className='text-[24px] font-bold mt-4 tracking-[0.125rem] '>
            <p>&#8377;{item.price}</p>
            </div>
            <div className='mt-3 text-[#808080] tracking-[0.0875rem] flex'>
            <p>Quantity</p>
            <select className=' border-b border-solid border-gray-300 rounded px-1 py-1 ml-2 bg-[#F7F7F7]'>
              {quantityOptions.map((quantity, index) => (
                <option key={index} value={quantity}>
                  {quantity}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='flex flex-col p-5 justify-between ml-20 font-manrope'>
            <div className='text-[14px] font-semibold tracking-[0.075rem]'>
            <img src={ship} alt='Remove' className='w-4 h-4 mr-2' />
            Ships in 1-3 business days
            </div>
            <div className='flex justify-end text-[#0071E3] tracking-[0.075rem] font-manrope cursor-pointer hover:font-bold
            ' onClick={() =>
                dispatch(removeFromCart({ id: item.id }))
            }>
            <img src={remove} alt='Remove' className='w-4 h-4 mr-2 mt-[2px]'/>
                Remove
                </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
