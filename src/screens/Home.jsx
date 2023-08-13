import React from 'react'
import { filter_icon, dropdown, headphone } from '../assets'
import ShoppingCard from '../components/ShoppingCard'

const dummyData = [
  {
    "id": 1,
    "image": headphone,
    "name": "Air Pods Max",
    "price": "Rs 56,000",
    "description": "Best headphone for your ears",
    "rating": 4,
    "reviews": 21
  },
  {
    "id": 2,
    "image": headphone,
    "name": "Wireless Earbuds",
    "price": "Rs 3,500",
    "description": "Crystal-clear sound for your music",
    "rating": 3,
    "reviews": 15
  },
  {
    "id": 3,
    "image": headphone,
    "name": "Noise-Canceling",
    "price": "Rs 8,900",
    "description": "Immersive listening experience",
    "rating": 5,
    "reviews": 32
  },
  {
    "id": 1,
    "image": headphone,
    "name": "Air Pods Max",
    "price": "Rs 56,000",
    "description": "Best headphone for your ears",
    "rating": 4,
    "reviews": 21
  },
  {
    "id": 2,
    "image": headphone,
    "name": "Wireless Earbuds",
    "price": "Rs 3,500",
    "description": "Crystal-clear sound for your music",
    "rating": 5,
    "reviews": 15
  },
  {
    "id": 3,
    "image": headphone,
    "name": "Noise-Canceling",
    "price": "Rs 8,900",
    "description": "Immersive listening experience",
    "rating": 3,
    "reviews": 32
  },
  {
    "id": 2,
    "image": headphone,
    "name": "Wireless Earbuds",
    "price": "Rs 3,500",
    "description": "Crystal-clear sound for your music",
    "rating": 4,
    "reviews": 15
  },
  {
    "id": 3,
    "image": headphone,
    "name": "Noise-Canceling",
    "price": "Rs 8,900",
    "description": "Immersive listening experience",
    "rating": 4,
    "reviews": 32
  }
]

const Home = () => {
  return (
    <div className=' flex-1 flex-col  divide-y divide-solid divide-black/30 '>
      <div className='flex flex-row px-[104px] py-6 items-center justify-between'>
        <p className='font-manrope text-[40px] font-[600]  '>
          <span className='block'>Our</span>
          <span className='block'>Products</span>
        </p>
        <div className='flex flex-row w-[399px] h-[52px] divide-x divide-solid divide-black/50 rounded-full border-b-2 border-solid border-black items-center justify-evenly'>
          <div className='flex flex-row items-center '>
            <p className='font-manrope text-[20px] font-[400] text-center'>All Filters</p>
            <img src={filter_icon} className='ml-[10px] ' />
          </div>
          <div className='flex flex-row items center '>
            <p className='font-manrope text-[20px] font-[400] text-center'>Sort</p>
            <img src={dropdown} className='ml-[10px] ' />
          </div>
        </div>
      </div>
      <div className='px-[103px] py-16 flex flex-wrap gap-[21px] items-center justify-center'>
      {dummyData.map((item) => (
          <ShoppingCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            description={item.description}
            rating={item.rating}
            reviews={item.reviews}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
