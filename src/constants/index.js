import { home, products, rewards, cart, head2, head3, head4, watch1, watch2, watch3, watch4, iphone1, iphone2, iphone3, iphone4, nothing1, nothing2, nothing4, nothing3 } from "../assets"
import { filter_icon, dropdown, headphone, space_grey, pink, green, silver, skyblue} from '../assets'
import deep from '../assets/deep.png'

// constants.js
export const navlinks = [
  {
    name: 'Home',
    icon: home,
    path: '/',
    disabled: false,
  },
  {
    name: 'Products',
    icon: products,
    path: '/product',
    disabled: false,
  },
  {
    name: 'Cart',
    icon: cart,
    path: '/cart',
    disabled: false,
  },
  {
    name: 'Rewards',
    icon: rewards,
    path: '/rewards',
    disabled: false,
  },
];


export const dummyData = [
  {
    "key": 1,
    "id": 1,
    "image": headphone,
   moreImages: [{
      name: 'Image 1',
      img: headphone
    },
    {
      name: 'Image 2',
      img: head2
    },
    {
      name: 'Image 3',
      img: head3
    },
    {
      name: 'Image 4', 
      img: head4
    }],

    "name": "Air Pods Max",
    "price": "56,000",
    "description": "Best headphone for your ears",
    colors: [{
      name: ' Space Grey',
      img: space_grey
    },
    {
      name: 'Pink',
      img: pink
    },
    {
      name: 'Green',
      img: green
    },
    {
      name: 'Silver',
      img: silver
    },
    {
      name: 'Sky Blue',
      img: skyblue
    }],
    "rating": 4,
    "reviews": 21
  },
  {
    "key": 2,
    "id": 2,
    "image": watch1,
    moreImages: [{
      name: 'Image 1',
      img: watch1
    },
    {
      name: 'Image 2',
      img: watch2
    },
    {
      name: 'Image 3',
      img: watch3
    },
    {
      name: 'Image 4', 
      img: watch4
    }],

    "name": "Fossil Gen 6",
    "price": "23,995",
    "description": "Elevate your wrist with advanced smartwatch.",
    
    colors: [{
      name: ' Space Grey',
      img: space_grey
    },
    {
      name: 'Pink',
      img: pink
    },
    {
      name: 'Green',
      img: green
    },
    {
      name: 'Silver',
      img: silver
    },
    {
      name: 'Sky Blue',
      img: skyblue
    }],
    "rating": 3,
    "reviews": 15
  },
  {
    "key": 3,
    "id": 3,
    "image": iphone1,
    moreImages: [{
      name: 'Image 1',
      img: iphone1
    },
    {
      name: 'Image 2',
      img: iphone2
    },
    {
      name: 'Image 3',
      img: iphone3
    },
    {
      name: 'Image 4', 
      img: iphone4
    },],
    "name": "iPhone 14",
    "price": "97,999",
    "description": "Nice Specs and compatible.",
    colors: [{
      name: ' Space Grey',
      img: space_grey
    },
    {
      name: 'Pink',
      img: pink
    },
    {
      name: 'Green',
      img: green
    },
    {
      name: 'Silver',
      img: silver
    },
    {
      name: 'Sky Blue',
      img: skyblue
    }],
    "rating": 5,
    "reviews": 32
  },
  {
    "key": 4,
    "id": 4,
    "image": nothing1,
    moreImages: [{
      name: 'Image 1',
      img: nothing1
    },
    {
      name: 'Image 2',
      img: nothing2
    },
    {
      name: 'Image 3',
      img: nothing3
    },
    {
      name: 'Image 4', 
      img: nothing4
    }],
    "name": "Nothing Ear(2)",
    "price": "9,999",
    "description": "Experience exceptional wireless audio quality.",
    colors: [{
      name: ' Space Grey',
      img: space_grey
    },
    {
      name: 'Pink',
      img: pink
    },
    {
      name: 'Green',
      img: green
    },
    {
      name: 'Silver',
      img: silver
    },
    {
      name: 'Sky Blue',
      img: skyblue
    }],
    "rating": 4,
    "reviews": 21
  },
  {
    "key": 5,
    "id": 5,
    "image": headphone,
    moreImages: [{
      name: 'Image 1',
      img: headphone
    },
    {
      name: 'Image 2',
      img: headphone
    },
    {
      name: 'Image 3',
      img: headphone
    },
    {
      name: 'Image 4', 
      img: headphone
    },
     
    {
      name: 'Image 5',
      img: headphone
     }],
    "name": "Wireless Earbuds",
    "price": "Rs 3,500",
    "description": "Crystal-clear sound for your music",
    colors: [{
      name: ' Space Grey',
      img: space_grey
    },
    {
      name: 'Pink',
      img: pink
    },
    {
      name: 'Green',
      img: green
    },
    {
      name: 'Silver',
      img: silver
    },
    {
      name: 'Sky Blue',
      img: skyblue
    }],
    "rating": 5,
    "reviews": 15
  },
  {
    "key": 6,
    "id": 6,
    "image": headphone,
    moreImages: [{
      name: 'Image 1',
      img: headphone
    },
    {
      name: 'Image 2',
      img: headphone
    },
    {
      name: 'Image 3',
      img: headphone
    },
    {
      name: 'Image 4', 
      img: headphone
    },
     
    {
      name: 'Image 5',
      img: headphone
     }],
    "name": "Noise-Canceling",
    "price": 8900,
    "description": "Immersive listening experience",
    colors: [{
      name: ' Space Grey',
      img: space_grey
    },
    {
      name: 'Pink',
      img: pink
    },
    {
      name: 'Green',
      img: green
    },
    {
      name: 'Silver',
      img: silver
    },
    {
      name: 'Sky Blue',
      img: skyblue
    }],
    "rating": 3,
    "reviews": 32
  },
]