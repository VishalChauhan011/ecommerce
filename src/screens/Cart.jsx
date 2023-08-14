import React from 'react'
import CartItems from '../components/CartItems'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const subTotal = useMemo(() => {
    return cartItems.reduce(
        (total, val) => total + val.price, 0
    );
}, [cartItems]);
    
  return (
    <>
   
    <div className='flex-1 flex-col divide-y divide-solid divide-black/30 '>
      <div className='flex flex-row px-[104px] py-6 items-center justify-between'>
        <p className='font-manrope text-[40px] font-[600] tracking-[.15rem]  '>
          <span className='block'>Review Items & </span>
          <span className='block'>Shipping</span>
        </p>
        <div className='flex flex-row w-[277px] h-[74px] divide-x divide-solid
         divide-black/50 rounded-full border-b-2 border-solid
          border-black items-center justify-evenly bg-[#EBEFF8]'>
          <div className='flex flex-row items-center '>
            <p className='font-manrope text-[20px] font-[400] text-center '>
            <span className='block text-[20px] mt-2'>The total of cart is </span>
            <span className='block text-[36px]'> &#8377;{subTotal}</span>
            </p>
          </div>
        </div>
      </div>
      
      <div className='px-[103px] py-8 flex flex-col '>
     {cartItems.map((item) => (
       <CartItems key={item.key} item={item} />
      ))}
      </div>

      <div className='flex justify-center'>
      <button className='bg-[#0E0E0E] text-[#ffffff] font-manrope
       font-bold text-[20px] px-[80px] py-[10px] rounded-[10px]'>Checkout</button>
      </div>

      </div>
    
    </>
  )
}

export default Cart
