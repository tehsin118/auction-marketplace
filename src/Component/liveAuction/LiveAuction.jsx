import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./liveAuction.scss";
const LiveAuction = () => {
  const liveAuctionCard = [
    {
      name: "The Hammer",
      nftID: 16,
      price: 0.33,
    },

    {
      name: "Iron Man",
      nftID: 36,
      price: 0.3,
    },

    {
      name: "Cat",
      nftID: 22,
      price: 0.03,
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
    {
      name: "The Armsman",
      nftID: 262,
      price: 0.223,
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

  return (
    <div>
      <section className="live-auction">
        <div className="multiArtNFT-banner">
          <h1>
            <span>Live </span>
            Auctions
          </h1>
          <p>Your Bid Your Choice Place A Bid On Live Auctions</p>
        </div>
        <div className="backTab">
          <a href="#">Back</a>
          <p>NFT”S / Live Auction</p>
        </div>
        <div className="containers">
          <div className="live-auctions">
            <div className="ArtNFT-heading">
              <h2>Live Auctions</h2>
            </div>

            <div className="live-auction-cards">
              {liveAuctionCard.map((item) => {
                return (
                  <div className="l-auction-card">
                    <div className="card-head">
                      <img
                        src="\nftcollection\nftCard.png"
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
                        Details
                        <span>
                          {item.price}
                          <span> </span>
                          USD
                        </span>
                      </h3>
                      <button onClick={bidPage}>Place Bid</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="live-auctions ">
            <div className="ArtNFT-heading">
              <h2>Auctions Ended</h2>
            </div>

            <div className="live-auction-cards auction-ended">
              {liveAuctionCard.map((item) => {
                return (
                  <div className="l-auction-card">
                    <div className="card-head">
                      <img
                        src="\nftcollection\nftCard.png"
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
                        Details
                        <span>
                          {item.price + " "}
                          USD
                        </span>
                      </h3>
                      <button>Ended</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="auction-winner">
            <div className="ArtNFT-heading">
              <h2>Auctions Winner</h2>
            </div>

            <div className="winner-card-grid">
              {liveAuctionCard.map((item) => {
                return (
                  <div className="auction-winner-card">
                    <div className="left">
                      <img src="\mint\mintUser2.png" alt="" />
                      <div>
                        <h2>New Owner</h2>
                        <h3>The Hammer</h3>
                      </div>
                    </div>
                    <div className="right">
                      <h4>jack</h4>
                      <h4>
                        300.0<span> USD</span>
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveAuction;
