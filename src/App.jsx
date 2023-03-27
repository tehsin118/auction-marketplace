import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import BidPage from "./Component/bidPage/bidPage";
import PhoneLogin from "./Component/logins/phoneLogin";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home";
import MultiProduct from "./Component/multiProduct/multiProduct";
import LiveAuction from "./Component/liveAuction/LiveAuction";

import PaymentInfo from "./Component/paymentInfo/PaymentInfo";
import { Message } from "@mui/icons-material";
import AdminMessage from "./Component/message/AdminMessage";
import Footer from "./Component/home/Footer/Footer";
import EditProfile from "./Component/profile/editProfile/EditProfile";
import CreateProduct from "./Component/createProduct/CreateProduct";
import UserLooking from "./Component/userLookingProfile/userLooking";
function App() {
  return (
    <div>
      {/* <Home /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logins" element={<PhoneLogin />} />
        <Route path="/homePage2" element={<MultiProduct />} />
        <Route path="/bidPage" element={<BidPage />} />
        <Route path="/liveAuction" element={<LiveAuction />} />
        <Route path="/payment-info" element={<PaymentInfo />} />
        <Route path="/message" element={<AdminMessage />} />
        <Route path="/profile" element={<EditProfile />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/user-profile" element={<UserLooking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
