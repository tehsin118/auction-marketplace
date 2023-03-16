import React from "react";
import Contact from "../Component/home/ContactUs/Contact";
import Faq from "../Component/home/FAQs/Faq";
import Footer from "../Component/home/Footer/Footer";
import Hero from "../Component/home/Hero/Hero";
import UpComing from "../Component/home/UpComing/UpComing";
import Work from "../Component/home/Work/Work";
import MultiArtNFT from "../Component/multiArtnft/multiArtNFT";

const Home = () => {
  return (
    <div>
      <MultiArtNFT />
      <Work />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
