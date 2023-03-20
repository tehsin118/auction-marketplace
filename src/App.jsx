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
import EditProfile from "./Component/profile/editProfile/EditProfile";
function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <BidPage /> */}
      <Routes>
        <Route path="/logins" element={<PhoneLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/homePage2" element={<MultiArtNFT />} />
        <Route path="/bidPage" element={<BidPage />} />
        <Route path="/liveAuction" element={<LiveAuction />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </div>
  );
}

export default App;
