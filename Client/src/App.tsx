import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Components/Layout/Layout";
import Signup from "./Pages/Auth/Signup";
import Signin from "./Pages/Auth/Signin";
import AdminAuth from "../AdminPanel/AdminAuth";
import AdminDashboard from "../AdminPanel/AdminDashboard";

 
import Products from "../AdminPanel/Pages/Products"
import Orders from "../AdminPanel/Pages/Orders"
import Categories from "../AdminPanel/Pages/Categories"
import Users from "../AdminPanel/Pages/Users"
import Messages from '../AdminPanel/Pages/Messages'
import MiniDashboard from '../AdminPanel/Pages/MiniDashboard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="register" element={<Signup />} />
        <Route path="login" element={<Signin />} />
        <Route path="admin" element={<AdminAuth />} />
        <Route path="admin/dashboard" element={<AdminDashboard />}>
          <Route path="messages" element={<Messages />} />
          <Route path="minidashboard" element={<MiniDashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="categories" element={<Categories />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
