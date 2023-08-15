import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import deep from '../assets/deep.png';


const ProductDetailsCorousel = () => {
    return (
        <div className="text-white text-[20px] w-[650px] height-[610px] mx-auto sticky top-[50px] ">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                 <img src={deep} alt="Product" className='w-[492px] h-[px] p-5 object-contain '  />
                 <img src={deep} alt="Product" className='w-[492px] h-[px] p-5 object-contain '  />
                 <img src={deep} alt="Product" className='w-[492px] h-[px] p-5 object-contain '  />
                 <img src={deep} alt="Product" className='w-[492px] h-[px] p-5 object-contain '  />
            </Carousel>
        </div>
  )
}

export default ProductDetailsCorousel