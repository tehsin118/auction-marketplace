import React from "react";
import "./multiartnft.scss";
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const MultiProduct = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "0px",
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 787,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  var settingCollection = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "0px",
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 787,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1.7,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const liveAuctionCard = [
    {
      name: "The Hammer",
      nftID: 16,
      price: 33000,
    },

    {
      name: "Iron Man",
      nftID: 36,
      price: 2303,
    },

    {
      name: "Cat",
      nftID: 22,
      price: 203,
    },

    {
      name: "Bull Dog",
      nftID: 26,
      price: 0.31,
    },

    {
      name: "The Armsman",
      nftID: 262,
      price: 0.223,
    },
  ];
  const navigate = useNavigate();

  const bidPage = () => {
    navigate("/bidPage");
  };
  const liveAuctionPage = () => {
    navigate("/liveAuction");
  };
  return (
    <div>
      <section className="multiArtNFT">
        <div className="multiArtNFT-banner">
          <h1> Auction Market.</h1>
        </div>
        <div className="containers">
          {/* ----------------------- Live Auction */}
          <div className="explore-live-auction">
            <div className="multiArtNFT-heading">
              <h2>Live Auctions</h2>
              <h6 onClick={liveAuctionPage} style={{ cursor: "pointer" }}>
                View All
              </h6>
            </div>
            <div className="live-auction-cards">
              <Slider {...settings}>
                {liveAuctionCard.map((item) => {
                  return (
                    <div className="l-auction-card">
                      <div className="card-head">
                        <img
                          src="\bidcollection\nftCard.png"
                          alt=""
                          className="img-fluid"
                        />

                        <div className="auction-timer">
                          <div className="day">
                            <h1>06</h1>
                            <p>d's</p>
                          </div>

                          <div className="day">
                            <h1>16</h1>
                            <p>h's</p>
                          </div>

                          <div className="day">
                            <h1>36</h1>
                            <p>mn's</p>
                          </div>

                          <div className="day">
                            <h1>56</h1>
                            <p>sec</p>
                          </div>
                        </div>
                      </div>
                      <div className="card-details">
                        <h2>
                          {item.name}
                          <span>#{item.nftID}</span>
                        </h2>
                        <h3>
                          Price
                          <span>
                            {item.price + " "}
                            PKR
                          </span>
                        </h3>
                        <button onClick={bidPage}>Place Bid</button>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>

          {/* ----------------------- Trending NFTs*/}
          <div className="explore-live-auction">
            <div className="multiArtNFT-heading">
              <h2>Trending Auction</h2>
              <h6>View All</h6>
            </div>
            <div className="live-auction-cards trending-nfts">
              <Slider {...settings}>
                {liveAuctionCard.map((item) => {
                  return (
                    <div className="l-auction-card">
                      <div className="card-head">
                        <img
                          src="\bidcollection\nftCard.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="card-details">
                        <h2>
                          {item.name}
                          <span>#{item.nftID}</span>
                        </h2>
                        <h3>
                          Price
                          <span>PKR 300</span>
                        </h3>
                        <button>Place Bid</button>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MultiProduct;
