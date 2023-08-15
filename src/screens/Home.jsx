import React from "react";
import {
  filter_icon,
  dropdown,
  headphone,
  space_grey,
  pink,
  green,
  silver,
  skyblue,
} from "../assets";
import ShoppingCard from "../components/ShoppingCard";

const dummyData = [
  {
    key: 1,
    id: 1,
    image: headphone,
    name: "Air Pods Max",
    price: 56000,
    description: "Best headphone for your ears",
    colors: [
      {
        name: " Space Grey",
        img: space_grey,
      },
      {
        name: "Pink",
        img: pink,
      },
      {
        name: "Green",
        img: green,
      },
      {
        name: "Silver",
        img: silver,
      },
      {
        name: "Sky Blue",
        img: skyblue,
      },
    ],
    rating: 4,
    reviews: 21,
  },
  {
    key: 2,
    id: 2,
    image: headphone,
    name: "Wireless Earbuds",
    price: 3500,
    description: "Crystal-clear sound for your music",
    colors: [
      {
        name: " Space Grey",
        img: space_grey,
      },
      {
        name: "Pink",
        img: pink,
      },
      {
        name: "Green",
        img: green,
      },
      {
        name: "Silver",
        img: silver,
      },
      {
        name: "Sky Blue",
        img: skyblue,
      },
    ],
    rating: 3,
    reviews: 15,
  },
  {
    key: 3,
    id: 3,
    image: headphone,
    name: "Noise-Canceling",
    price: 8900,
    description: "Immersive listening experience",
    colors: [
      {
        name: " Space Grey",
        img: space_grey,
      },
      {
        name: "Pink",
        img: pink,
      },
      {
        name: "Green",
        img: green,
      },
      {
        name: "Silver",
        img: silver,
      },
      {
        name: "Sky Blue",
        img: skyblue,
      },
    ],
    rating: 5,
    reviews: 32,
  },
  {
    key: 4,
    id: 4,
    image: headphone,
    name: "Air Pods Max",
    price: 56000,
    description: "Best headphone for your ears",
    colors: [
      {
        name: " Space Grey",
        img: space_grey,
      },
      {
        name: "Pink",
        img: pink,
      },
      {
        name: "Green",
        img: green,
      },
      {
        name: "Silver",
        img: silver,
      },
      {
        name: "Sky Blue",
        img: skyblue,
      },
    ],
    rating: 4,
    reviews: 21,
  },
  {
    key: 5,
    id: 5,
    image: headphone,
    name: "Wireless Earbuds",
    price: "Rs 3,500",
    description: "Crystal-clear sound for your music",
    colors: [
      {
        name: " Space Grey",
        img: space_grey,
      },
      {
        name: "Pink",
        img: pink,
      },
      {
        name: "Green",
        img: green,
      },
      {
        name: "Silver",
        img: silver,
      },
      {
        name: "Sky Blue",
        img: skyblue,
      },
    ],
    rating: 5,
    reviews: 15,
  },
  {
    key: 6,
    id: 6,
    image: headphone,
    name: "Noise-Canceling",
    price: 8900,
    description: "Immersive listening experience",
    colors: [
      {
        name: " Space Grey",
        img: space_grey,
      },
      {
        name: "Pink",
        img: pink,
      },
      {
        name: "Green",
        img: green,
      },
      {
        name: "Silver",
        img: silver,
      },
      {
        name: "Sky Blue",
        img: skyblue,
      },
    ],
    rating: 3,
    reviews: 32,
  },
  {
    key: 7,
    id: 7,
    image: headphone,
    name: "Wireless Earbuds",
    price: 3500,
    description: "Crystal-clear sound for your music",
    colors: [
      {
        name: " Space Grey",
        img: space_grey,
      },
      {
        name: "Pink",
        img: pink,
      },
      {
        name: "Green",
        img: green,
      },
      {
        name: "Silver",
        img: silver,
      },
      {
        name: "Sky Blue",
        img: skyblue,
      },
    ],
    rating: 4,
    reviews: 15,
  },
  {
    key: 8,
    id: 8,
    image: headphone,
    name: "Noise-Canceling",
    price: 8900,
    description: "Immersive listening experience",
    colors: [
      {
        name: " Space Grey",
        img: space_grey,
      },
      {
        name: "Pink",
        img: pink,
      },
      {
        name: "Green",
        img: green,
      },
      {
        name: "Silver",
        img: silver,
      },
      {
        name: "Sky Blue",
        img: skyblue,
      },
    ],
    rating: 4,
    reviews: 32,
  },
];

const Home = () => {
  return (
    <div className=" flex-1 flex-col  divide-y divide-solid divide-black/30 ">
      <div className="flex flex-row px-[104px] py-6 items-center justify-between">
        <p className="font-manrope text-[40px] font-[600]  ">
          <span className="block">Our</span>
          <span className="block">Products</span>
        </p>
        <div className="flex flex-row w-[399px] h-[52px] divide-x divide-solid divide-black/50 rounded-full border-b-[1px] border-solid border-black items-center justify-evenly">
          <div className="flex flex-row items-center ">
            <p className="font-manrope text-[20px] font-[400] text-center">
              All Filters
            </p>
            <img src={filter_icon} className="ml-[10px] " />
          </div>
          <div className="flex flex-row items center ">
            <p className="font-manrope text-[20px] font-[400] text-center">
              Sort
            </p>
            <img src={dropdown} className="ml-[10px] " />
          </div>
        </div>
      </div>
      <div className="px-[103px] py-16 flex flex-wrap gap-[21px] items-center justify-center">
        {dummyData.map((item) => (
          <ShoppingCard
            key={item.key}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            description={item.description}
            rating={item.rating}
            reviews={item.reviews}
            colors={item.colors}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
