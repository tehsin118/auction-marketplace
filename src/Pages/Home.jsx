import React from "react";
import Contact from "../Component/home/ContactUs/Contact";
import Faq from "../Component/home/FAQs/Faq";
import Footer from "../Component/home/Footer/Footer";
import MultiArtNFT from "../Component/multiProduct/multiProduct";

const Home = () => {
  return (
    <div>
      <MultiArtNFT />
      <Faq />
      <Contact />
    </div>
  );
};

export default Home;
