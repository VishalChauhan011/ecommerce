import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Rewards from "./screens/Rewards";
import Products from "./screens/Products"
import Sidebar from "./components/Sidebar";
import ProductDetails from "./screens/ProductDetails";

function App() {
  return (
    <div className=' flex-1  h-screen bg-[#FFFFFF] flex-col divide-y divide-solid divide-black/30 '>
      <Navbar />
      <div className="flex flex-row h-screen w-full divide-x divide-solid divide-black/30 ">
        <BrowserRouter>
        <Sidebar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/product" element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
