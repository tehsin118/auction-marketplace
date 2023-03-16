import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Upcoming } from "@mui/icons-material";
import "./App.css";
import BidPage from "./Component/bidPage/bidPage";
import PhoneLogin from "./Component/logins/phoneLogin";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home";
import MultiArtNFT from "./Component/multiArtnft/multiArtNFT";
import LiveAuction from "./Component/liveAuction/LiveAuction";
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <BidPage /> */}
      <Routes>
        <Route path="/" element={<PhoneLogin />} />
        <Route path="/homePage" element={<Home />} />
        <Route path="/homePage2" element={<MultiArtNFT />} />
        <Route path="/bidPage" element={<BidPage />} />
        <Route path="/liveAuction" element={<LiveAuction />} />
      </Routes>
    </div>
  );
}

export default App;
