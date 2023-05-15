import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "./Pages/shop/Search";
//misc
import HomePage from "./Pages/misc/HomePage";
import PageNoteFound from "./Pages/misc/PageNoteFound";
import Contact from "./Pages/misc/Contact";
import Policy from "./Pages/misc/Policy";
import About from "./Pages/misc/About";
import Preview from "./Pages/misc/Preview";
//auth
import Signup from "./Pages/Auth/Signup";
import Login from "./Pages/Auth/Login";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
//admin
import AdminOrders from "./Pages/admin/AdminOrders";
import CreateCategory from "./Pages/admin/CreateCategory";
import ListUsers from "./Pages/admin/ListUsers";
import ListProducts from "./Pages/admin/ListProducts";
import UpdateProduct from "./Pages/admin/UpdateProduct";
import CreateProduct from "./Pages/admin/CreateProduct";
import AdminDashboard from "./Pages/admin/AdminDashboard";
//user
import UserDashboard from "./Pages/user/UserDashboard";
import UserOrders from "./Pages/user/UserOrders";
import UserProfile from "./Pages/user/UserProfile";
//shop
import ProductCategory from "./Pages/shop/ProductCategory";
import Cart from "./Pages/shop/Cart";
import Categories from "./Pages/shop/Categories";
import ProductDetails from "./Pages/shop/ProductDetails";
//route
import AuthRoute from "./components/Route/AuthRoute";

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:slug" element={<ProductCategory />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<AuthRoute role={"user"} />}>
          <Route path="user" element={<UserDashboard />} />
          <Route path="user/orders" element={<UserOrders />} />
          <Route path="user/profile" element={<UserProfile />} />
        </Route>
        <Route path="/dashboard" element={<AuthRoute role={"admin"} />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<ListProducts />} />
          <Route path="admin/users" element={<ListUsers />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PageNoteFound />} />
      </Routes>
    </React.Fragment>
  );
};
export default App;
