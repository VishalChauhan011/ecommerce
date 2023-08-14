import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import deep from '../assets/deep.png';


const ProductDetailsCorousel = () => {
    return (
        <div className="text-white text-[20px] w-full max-w-[600px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
               
                 <img src={deep} alt="Product" className='w-[100px] h-[px] p-5 '  />
                 <img src={deep} alt="Product" className='w-[492px] h-[px] p-5 '  />
                 <img src={deep} alt="Product" className='w-[100px] h-[px] p-5 '  />
                 <img src={deep} alt="Product" className='w-[492px] h-[px] p-5 '  />
                 
                
            </Carousel>
        </div>
  )
}

export default ProductDetailsCorousel