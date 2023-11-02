import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ProductDetailsCorousel = ({img}) => {
    console.log("IMAGES==>", img)
    return (
        
        <div className="text-white text-[20px] w-[650px] height-[610px] ">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={90}
                className="productCarousel"
            >
                {img.map((item) => (
                    <div className="flex justify-center">
                        <img key = {item.id} src={item.url} alt="Product" className="w-[650px] h-[610px] object-contain" />
                    </div>
                ))}
            </Carousel>
        </div>
  )
}

export default ProductDetailsCorousel