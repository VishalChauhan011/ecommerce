import React from "react";
import { useLocation } from "react-router-dom";
import { rating_star, delivery, return_icon } from "../assets";
import ProductDetailsCorousel from "../components/ProductDetailsCorousel";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { space_grey } from "../assets";
import ColorBox from "../components/ColorBox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;
  const { id, name, price, description, rating, reviews, colors } = state;
  const parsedColors = JSON.parse(colors);
  console.log("COLORS==>", parsedColors);

  const ratingStars = Array.from({ length: rating }, (_, index) => (
    <img
      key={index}
      src={rating_star}
      alt={`Star ${index}`}
      className="mr-1 mt-2"
    />
  ));

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, description, reviews }));
  };

  const notify = () => {
    toast.success("Success. Check your cart!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
};

  return (
    <>
    <ToastContainer />
    <div className="flex flex-row px-[100px] justify-center ">
      <div className="flex flex-col  ">
        <ProductDetailsCorousel />
        <div className="flex flex-row gap-[80px] mt-[74px] justify-evenly ">
          <div className="flex flex-col items-center">
            <img src={delivery} className="w-[22px] h-[22px] object-contain " />
            <p className="font-manrope text-[14px] font-[700] leading-[28px] tracking-[1.4px] ">
              Get free delivery to your doorstep
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={return_icon}
              className="w-[22px] h-[22px] object-contain "
            />
            <p className="font-manrope text-[14px] font-[700] leading-[28px] tracking-[1.4px] ">
              Easy Return
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <p className="font-manrope text-[36px] font-[800] text-black leading-[52px] tracking-[3.6px] mt-[54px] ">
          {name}
        </p>
        <p className="font-manrope text-[16px] font-[600] text-black/50 leading-[23px] tracking-[1.52px] ">
          {description}
        </p>
        <div className="flex flex-row items-center">
          {ratingStars}
          <p className="font-manrope text-[12px] text-black/70 tracking-[1.2px] leading-[17px]">
            ({reviews})
          </p>
        </div>
        <div className="flex flex-col w-[400px] h-[66px] rounded-[10px] border border-solid border-black my-[28px] justify-center ">
          <p className="font-manrope text-[20px] font-[700] leading-[29px] tracking-[2px] ml-[23px]  ">
            MRP: &#8377;{price}
          </p>
          <p className="font-manrope text-[10px] font-[700] leading-[14.5px] tracking-[1px] ml-[23px] ">
            (Inc. all taxes)
          </p>
        </div>
        <p className="font-manrope text-[20px] font-[600] leading-[29px] tracking-[2px] mb-[20px] ">
          Colour
        </p>

        <div className="flex flex-wrap gap-[25px] ">
          {parsedColors.map((color) => (
            <ColorBox name={color.name} img={color.img} />
          ))}
        </div>

        <div>
          <button
            className="w-[400px] h-[60px] rounded-full bg-black/90 text-white
                     font-manrope text-[16px] font-[700] leading-[23px]
                      tracking-[1.6px] mt-[55px] cursor-pointer "
                      onClick={() => {
                        handleAddToCart();
                        notify();
                      }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
