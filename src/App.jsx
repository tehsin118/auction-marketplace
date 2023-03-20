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
function App() {
  return (
    <div>
      {/* <Home /> */}
      <Navbar />
      <Routes>
        <Route path="/logins" element={<PhoneLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/homePage2" element={<MultiProduct />} />
        <Route path="/bidPage" element={<BidPage />} />
        <Route path="/liveAuction" element={<LiveAuction />} />
        <Route path="/payment-info" element={<PaymentInfo />} />
        <Route path="/message" element={<AdminMessage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
