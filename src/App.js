import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Rewards from "./screens/Rewards";
import Products from "./screens/Products";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import ProductDetails from "./screens/ProductDetails";
import { Provider } from "react-redux";
import Login from "./screens/Login";
import PrivateRoute from "./components/PrivateRoute";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";
import NewTest from "./screens/NewTest";
import SignUp from "./screens/SignUp";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
   
          <Routes>
          <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            
          </Routes>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path="/product" element={<Products />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
