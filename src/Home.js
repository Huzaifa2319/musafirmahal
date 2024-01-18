import React from "react";
import CustomerPannel from "./Customer/CustomerPannel";
import Login from "./Customer/Login";
import Signup from "./Customer/Signup";
import Main from "./Customer/Main";
import Menu from "./Customer/Menu";
import { Routes, Route } from "react-router-dom";
import ItemDetails from "./Customer/ItemDetails";
import Aboutus from "./Customer/Aboutus";

import ManageUsers from "./Admin/ManageUsers";

import ViewDineOrders from "./Waiter/ViewDineOrders";
import ViewRecent from "./Waiter/ViewRecent";

import ViewHistory from "./Rider/ViewHistory";
import ViewOrders from "./Rider/ViewOrders";

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/ManageUsers" element={<ManageUsers />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/ViewRecent" element={<ViewRecent />} />
        <Route path="/ViewDineOrder" element={<ViewDineOrders />} />
        <Route path="/ViewHistory" element={<ViewHistory />} />
        <Route path="/ViewOrder" element={<ViewOrders />} />

        <Route path="cust" element={<CustomerPannel />}>
          <Route path="Home" element={<Main />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Feedback" element={<Aboutus />} />
          <Route path="det" element={<ItemDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default Home;
